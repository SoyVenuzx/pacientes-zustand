import { PatientType, PatientFormData } from '../../lib/schema'

export type PatientStoreType = {
  patients: PatientType[]
  patientToEdit: PatientType | null
  editID: string | null
  addPatient: (patient: PatientFormData) => void
  removePatient: (id: string) => void
  editPatient: (patient: PatientType) => void
  setEditID: (id: string) => void
  clearEdit: () => void
}
