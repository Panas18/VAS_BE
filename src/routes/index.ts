import { Router } from "express";
import patientRoutes from "./patientRoutes";

const router = Router();

router.use("/patient", patientRoutes);

export default router;
