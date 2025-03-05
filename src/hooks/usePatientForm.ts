import { SubmitHandler, useForm } from 'react-hook-form'
import { usePatientStore } from '@/stores'
import { PatientFormData, patientSchema, PatientType } from '../lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'

import toast, { toastConfig } from 'react-simple-toasts'
import 'react-simple-toasts/dist/style.css'
import 'react-simple-toasts/dist/theme/moonlight.css'

toastConfig({ theme: 'moonlight' })

export function usePatientForm () {
  const { addPatient, editPatient } = usePatientStore()

  const form = useForm<PatientFormData>({
    resolver: zodResolver(patientSchema),
    mode: 'onTouched',
    defaultValues: {
      patient: '',
      owner: '',
      email: '',
      date: '',
      symptoms: ''
    }
  })

  const onSubmit: SubmitHandler<PatientFormData> = (data: PatientFormData) => {
    addPatient(data)
    toast('Paciente agregado! ✅')
    form.reset()
    usePatientStore.getState().clearEdit()
  }

  const onEdit: SubmitHandler<PatientType> = (data: PatientType) => {
    editPatient(data)
    toast('Paciente editado! ✅')
    form.reset()
    usePatientStore.getState().clearEdit()
  }

  return { form, onSubmit, onEdit }
}
