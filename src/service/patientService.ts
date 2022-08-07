import logger from "../misc/logger";
import Success from "../domain/Success";
import IPatient from "../domain/Patient";
import { PatientToInsert, UpdatedPatient } from "../domain/Patient";
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

/**
 *
 * @param patient {IPatient}
 * @returns {promises<Success<UpdatedPatient>>}
 */
export const updatePatient = async (
  patient: IPatient
): Promise<Success<UpdatedPatient>> => {
  const updatedPatient = await PatientModel.updatePatient(patient);
  logger.info("Patient Updated Successfully");

  return {
    data: updatedPatient,
    message: "Patient Updated Successfully",
  };
};

export const deletePatient = async (
  patientId: number
): Promise<Success<IPatient>> => {
  await PatientModel.deletePatient(patientId);
  logger.info("Patient Deleted Successfully");

  return {
    message: "Patient Deleted Successfully",
  };
};
