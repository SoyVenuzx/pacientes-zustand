import { useForm } from 'react-hook-form'
import { usePatientStore } from '@/stores'
import { PatientType } from '../lib/schema'

export function usePatientForm () {
  const { addPatient, editPatient } = usePatientStore()

  const form = useForm<PatientType>({
    defaultValues: {
      id: '',
      patient: '',
      owner: '',
      email: '',
      date: '',
      symptoms: ''
    }
  })

  const onSubmit = (data: PatientType) => {
    addPatient(data)
    form.reset()
  }

  const onEdit = (data: PatientType) => {
    editPatient(data)
    form.reset()
  }

  return { form, onSubmit, onEdit }
}
