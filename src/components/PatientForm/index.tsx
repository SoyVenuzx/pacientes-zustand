import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FormField } from './FormField'
import { formFields } from './formData'
import { UseFormReturn } from 'react-hook-form'
import { PatientFormData, PatientType } from '../../lib/schema'
import { DevTool } from '@hookform/devtools'

type PatientFormProps = {
  form: UseFormReturn<PatientFormData>
  onSubmit: (data: PatientFormData | PatientType) => void
  onEdit?: string | null
}

export const PatientForm = ({ form, onSubmit, onEdit }: PatientFormProps) => {
  return (
    <>
      <div>
        <div className='mt-2 mb-4'>
          <p className='text-xl font-semibold tracking-tight text-center'>
            Añade Pacientes y {''}
            <span className='font-semibold text-zinc-700'>Administralos</span>
          </p>
        </div>
        <Card className='bg-white shadow-sm border-zinc-200 min-h-[650px] flex flex-col'>
          <CardHeader>
            <CardTitle className='text-lg font-medium text-zinc-800'>
              Añadir Paciente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
              {formFields.map(field => (
                <FormField
                  key={field.name}
                  {...field}
                  type={field.type}
                  name={field.name}
                  form={form}
                />
              ))}
              <Button
                type='submit'
                className='w-full bg-zinc-900 hover:bg-zinc-800'
              >
                {onEdit ? 'ACTUALIZAR PACIENTE' : 'AÑADIR PACIENTE'}
              </Button>
            </form>

            <DevTool control={form.control} />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
