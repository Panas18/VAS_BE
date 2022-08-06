import { Router } from "express";
import * as patientController from "../controller/patientController";

const router = Router();

router.get("/", patientController.getAllPatients);
router.get("/:patientId", patientController.getPatient);
router.post("/", patientController.createPatient);

export default router;
