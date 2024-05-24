import { Attempt } from "./attempt.model";
import db from "../config/postgres";

class AttemptsRepository {
  protected db = () => db<Attempt>("attempts");

  async record(params: Partial<Attempt>): Promise<Attempt> {
    const [user] = await this.db().insert(params).returning("*");
    return user;
  }
}

export const attemptsRepo = new AttemptsRepository();
