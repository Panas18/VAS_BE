interface Patient {
  id: number;
  first_name: string;
  last_name: string;
  dob: string;
  gender: string;
  email: string;
  ethinicity: string;
  street: string;
  state: string;
  city: string;
  insurance_id: string;
  member_id: string;
  insurance_provider: string;
}

export type PatientToInsert = Omit<Patient, "id">;

export default Patient;
