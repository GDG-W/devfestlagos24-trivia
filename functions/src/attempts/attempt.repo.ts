import { Attempt } from "./attempt.model";
import db from "../config/postgres";

class AttemptsRepository {
  protected db = () => db<Attempt>("attempts");

  async record(params: Partial<Attempt>): Promise<Attempt> {
    const [user] = await this.db().insert(params).returning("*");
    return user;
  }

  async geRankings(): Promise<Attempt[]> {
    const results = await db.raw(`
    with scores as (
      select users.name, users.email_address, users.id, attempts.created_at,attempts.score,
      row_number() over(partition by users.id order by score desc) as pos 
      from attempts inner join users on attempts.user_id=users.id
    ), arrangements as (select id,name,email_address,score from scores where pos=1 order by score desc,created_at asc limit 50)
    select *, row_number() over() from arrangements
    `);
    return results.rows;
  }
}

export const attemptsRepo = new AttemptsRepository();
