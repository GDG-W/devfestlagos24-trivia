import { User } from "./user.model";
import db from "../config/postgres";

class UserRepository {
  protected db = () => db<User>("users");

  async upsert(params: Partial<User>): Promise<User> {
    const [user] = await this.db()
      .insert(params)
      .onConflict("email_address")
      .merge(["name"])
      .returning("*");

    return user;
  }
}

export const userRepo = new UserRepository();
