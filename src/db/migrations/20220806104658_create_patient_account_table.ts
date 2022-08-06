import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("patient_record", (table) => {
    table.increments("id");
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("dob").notNullable();
    table.string("gender").notNullable();
    table.string("email").unique().notNullable();
    table.string("ethinicity").notNullable();
    table.string("street").notNullable();
    table.string("state").notNullable();
    table.string("city").notNullable();
    table.string("insurance_id").notNullable().unique();
    table.string("member_id").notNullable();
    table.string("insurance_provider").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("patient_record");
}
