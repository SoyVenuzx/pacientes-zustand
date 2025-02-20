import { PatientStore } from '@/stores/slices/patient.store'
import { useEffect, useState } from 'react'
import { PatientType } from '../lib/schema'

export const usePatientStore = () => {
  const patients = PatientStore(state => state.patients)
  const addPatient = PatientStore(state => state.addPatient)
  const removePatient = PatientStore(state => state.removePatient)
  const setEditPatient = PatientStore(state => state.setEditID)
  const editPatient = PatientStore(state => state.editPatient)
  const editID = PatientStore(state => state.editID)

  const [patientToEdit, setPatientToEdit] = useState<PatientType | never[]>([])

  useEffect(() => {
    if (!editID) {
      setPatientToEdit([])
    }

    const p: PatientType =
      (patients.find(p => p.id === editID) as PatientType) || []

    if (p) {
      setPatientToEdit(p)
    }
  }, [editID])

  return {
    patients,
    addPatient,
    removePatient,
    setEditPatient,
    patientToEdit,
    editPatient,
    editID
  }
}
