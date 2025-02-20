import { z } from 'zod'

export const patientSchema = z.object({
  id: z.string().uuid(),
  patient: z.string().min(1, 'El nombre del paciente es requerido'),
  owner: z.string().min(1, 'El nombre del propietario es requerido'),
  email: z.string().email('Email inválido'),
  date: z.string().min(1, 'La fecha es requerida'),
  symptoms: z.string().min(1, 'Los síntomas son requeridos')
})

export type PatientType = z.infer<typeof patientSchema>
export type PatientFormData = Omit<PatientType, 'id'>
