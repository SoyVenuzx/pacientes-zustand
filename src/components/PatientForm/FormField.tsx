import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { capitalize } from '@/lib/utils'
import { Calendar } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'
import { PatientType } from '../../lib/schema'

interface FormFieldProps {
  label: string
  name: keyof PatientType
  form: UseFormReturn<PatientType>
  type?: 'text' | 'email' | 'date' | 'textarea'
  placeholder: string
}

export const FormField = ({
  label,
  type,
  name,
  form,
  placeholder
}: FormFieldProps) => {
  const {
    register,
    formState: { errors }
  } = form

  const inputProps = register(name)

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <Textarea
            key={name}
            id={name}
            {...inputProps}
            placeholder={placeholder}
            className='min-h-[100px] border-zinc-200 focus:border-zinc-400 focus:ring-zinc-400'
          />
        )
      case 'date':
        return (
          <div className='relative'>
            <Input
              key={name}
              id={name}
              type='date'
              {...inputProps}
              className='border-zinc-200 focus:border-zinc-400 focus:ring-zinc-400'
            />
            <Calendar className='absolute right-3 top-2.5 h-5 w-5 text-zinc-400' />
          </div>
        )
      default:
        return (
          <Input
            key={name}
            id={name}
            type={type}
            {...inputProps}
            placeholder={placeholder}
            className='border-zinc-200 focus:border-zinc-400 focus:ring-zinc-400'
          />
        )
    }
  }

  return (
    <div className='space-y-2'>
      <Label htmlFor={name} className='text-zinc-600'>
        {capitalize(label.toLowerCase())}
      </Label>
      {renderInput()}
      {errors[name] && (
        <p className='text-sm text-red-500'>{errors[name]?.message}</p>
      )}
    </div>
  )
}
