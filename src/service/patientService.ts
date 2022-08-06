import logger from "../misc/logger";
import Success from "../domain/Success";
import IPatient from "../domain/Patient";
import { PatientToInsert } from "../domain/Patient";
import PatientModel from "../models/PatientModel";

/**
 * Get all the patients.
 * @returns {Promise<Success<IPatient[]>>}
 */
export const getAllPatients = async (): Promise<Success<IPatient[]>> => {
  logger.info("Getting all users");
  const patients = await PatientModel.getAllPatients();

  return {
    data: patients,
    message: "Patients fetched successfully",
  };
};

/**
 *
 * @param patientId {number}
 * @returns {Proimse<Success<IPatient>>}
 */
export const getPatient = async (
  patientId: number
): Promise<Success<IPatient>> => {
  logger.info(`Getting patient with id: ${patientId}`);
  const patient = await PatientModel.getPatient(patientId);

  return {
    data: patient,
    message: "Patient fetched successfully",
  };
};

/**
 *
 * @param patient {PatientToInsert}
 * @returns {Proimse<Success<PatientToInsert>>}
 */
export const createPatient = async (
  patient: PatientToInsert
): Promise<Success<IPatient>> => {
  const createdPatient = await PatientModel.createPatient(patient);
  logger.info("Patient Created Successfully");

  return {
    data: createdPatient,
    message: "Patient created successfully",
  };
};
