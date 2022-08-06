import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("admin_account", (table) => {
    table.increments("id");
    table.string("name");
    table.string("password");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("admin_account");
}
