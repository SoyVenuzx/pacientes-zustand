import { PatientFormData } from '../../lib/schema'

type FormFieldSchema = {
  id: string
  label: string
  name: keyof PatientFormData
  type: 'text' | 'email' | 'date' | 'textarea'
  placeholder: string
}

export const formFields: FormFieldSchema[] = [
  {
    id: 'patient',
    label: 'PACIENTE',
    name: 'patient',
    type: 'text',
    placeholder: 'Nombre del Paciente'
  },
  {
    id: 'owner',
    label: 'PROPIETARIO',
    name: 'owner',
    type: 'text',
    placeholder: 'Nombre del Propietario'
  },
  {
    id: 'email',
    label: 'EMAIL',
    name: 'email',
    type: 'email',
    placeholder: 'Email de Registro'
  },
  {
    id: 'date',
    label: 'FECHA ALTA',
    name: 'date',
    type: 'date',
    placeholder: ''
  },
  {
    id: 'symptoms',
    label: 'SÍNTOMAS',
    name: 'symptoms',
    type: 'textarea',
    placeholder: 'Síntomas del Paciente'
  }
]
