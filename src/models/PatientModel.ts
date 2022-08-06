import db from "../db/db";
import IPatient from "../domain/Patient";
import { PatientToInsert } from "../domain/Patient";

class PatientTable {
  public static table = "patient_record";

  public static async getAllPatients() {
    const patients = await db(PatientTable.table).select();

    return patients;
  }

  public static async getPatient(patientId: number): Promise<IPatient> {
    const patient = await db(PatientTable.table)
      .where({ id: patientId })
      .select()
      .first();

    return patient;
  }

  /**
   *
   * @param  patient {PatientToInsert}
   * @returns  {PatientToInsert}
   */
  public static async createPatient(
    patient: PatientToInsert
  ): Promise<IPatient> {
    const newPatient: IPatient = await db(PatientTable.table).insert(patient, [
      "id",
      "first_name",
      "last_name",
      "dob",
      "gender",
      "email",
      "ethinicity",
      "street",
      "state",
      "city",
      "insurance_id",
      "member_id",
      "insurance_provider",
    ]);

    return newPatient;
  }
}

export default PatientTable;
