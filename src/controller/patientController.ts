import { NextFunction, Request, Response } from "express";
import * as patientService from "../service/patientService";

/**
 * Get all patient.
 * @param {Request} req
 * @param {Response} res
 */
export const getAllPatients = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  patientService
    .getAllPatients()
    .then((data: any) => res.json(data))
    .catch((err: any) => next(err));
};

/**
 * Get individual patient.
 * @param {Request} req
 * @param {Response} res
 */
export const getPatient = (req: Request, res: Response, next: NextFunction) => {
  const { patientId } = req.params;
  patientService
    .getPatient(+patientId)
    .then((data: any) => res.json(data))
    .catch((err: any) => next(err));
};

/**
 * Create new patient.
 * @param {Request} req
 * @param {Response} res
 */
export const createPatient = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    first_name,
    last_name,
    dob,
    ethinicity,
    gender,
    email,
    street,
    city,
    state,
    insurance_id,
    member_id,
    insurance_provider,
  } = req.body;

  patientService
    .createPatient({
      first_name,
      last_name,
      dob,
      gender,
      email,
      ethinicity,
      street,
      state,
      city,
      insurance_id,
      member_id,
      insurance_provider,
    })
    .then((data: any) => res.json(data))
    .catch((err: any) => next(err));
};

/**
 * Update Patient
 * @param req {Request}
 * @param res {Response}
 */
export const updatePatient = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { patientId } = req.params;
  const {
    first_name,
    last_name,
    dob,
    ethinicity,
    gender,
    email,
    street,
    city,
    state,
    insurance_id,
    member_id,
    insurance_provider,
  } = req.body;

  patientService
    .updatePatient({
      first_name,
      last_name,
      dob,
      ethinicity,
      gender,
      email,
      street,
      city,
      state,
      insurance_id,
      member_id,
      insurance_provider,
      id: +patientId,
    })
    .then((data: any) => res.json(data))
    .catch((err: any) => next(err));
};

export const deletePatient = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { patientId } = req.params;
  patientService
    .deletePatient(+patientId)
    .then((data) => res.send(data))
    .catch((err) => next(err));
};
