import { PatientType } from '../../lib/schema'

export type PatientStoreType = {
  patients: PatientType[]
  editID: string
  addPatient: (patient: PatientType) => void
  removePatient: (id: string) => void
  editPatient: (patient: PatientType) => void
  setEditID: (id: string) => void
}
