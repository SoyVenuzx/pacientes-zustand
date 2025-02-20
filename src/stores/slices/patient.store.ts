import { create } from 'zustand'
import { PatientStoreType } from '../types/store.types'
import { v4 as uuidv4 } from 'uuid'
import { devtools, persist } from 'zustand/middleware'

export const PatientStore = create<PatientStoreType>()(
  devtools(
    persist(
      set => ({
        patients: [],
        editID: '',
        addPatient: patient => {
          const newPatient = { ...patient, id: uuidv4() }

          set(state => ({
            patients: [...state.patients, newPatient]
          }))
        },
        removePatient: id => {
          set(state => ({
            patients: state.patients.filter(patient => patient.id !== id)
          }))
        },
        editPatient: patient => {
          const { id } = patient

          set(state => ({
            patients: state.patients.map(p =>
              p.id === id ? { ...p, ...patient } : p
            )
          }))
          set({ editID: '' })
        },
        setEditID: id => {
          set({ editID: id })
        }
      }),
      {
        name: 'patients-store',
        partialize: state => ({ patients: state.patients })
      }
    )
  )
)
