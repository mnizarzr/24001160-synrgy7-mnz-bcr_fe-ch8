import { Knex } from "knex";
import bcrypt from "bcrypt";

export async function seed(knex: Knex): Promise<void> {
  await knex("users").insert({
    name: "superadmin",
    email: "suadmin@bcr.id",
    username: "superadmin",
    password: await bcrypt.hash("admin8521", 10),
    role: "superadmin",
  });
}
