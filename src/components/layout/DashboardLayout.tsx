import { PatientForm } from '../PatientForm'
import { PatientList } from '../PatientList'
import { usePatientStore } from '@/hooks/usePatientStore'
import { usePatientForm } from '@/hooks/usePatientForm'
import { useEffect } from 'react'
import { PatientType } from '@/lib/schema'

export const DashboardLayout = () => {
  const { patients, removePatient, setEditPatient, patientToEdit, editID } =
    usePatientStore()
  const { form, onSubmit, onEdit } = usePatientForm()

  useEffect(() => {
    if (!editID) form.reset()
    form.reset(patientToEdit as PatientType)
  }, [patientToEdit, editID])

  return (
    <div className='min-h-screen p-4 bg-zinc-50 md:p-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='container mb-8 text-center'>
          <h1 className='text-3xl font-semibold tracking-tight'>
            <span className='text-zinc-900'>Seguimiento de Pacientes</span>{' '}
            <span className='text-zinc-500'>Veterinaria</span>
          </h1>
        </div>

        <div className='grid gap-8 lg:grid-cols-2'>
          <PatientForm
            form={form}
            onSubmit={editID ? onEdit : onSubmit}
            onEdit={editID}
          />
          <PatientList
            patients={patients}
            onDelete={removePatient}
            onEdit={setEditPatient}
          />
        </div>
      </div>
    </div>
  )
}
