import { Calendar, Mail, Pencil, Stethoscope, Trash2, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { PatientType } from '@/lib/schema'

type PatientListProps = {
  patients: PatientType[]
  onEdit?: (id: string) => void
  onDelete?: (id: string) => void
}

export const PatientList = ({
  patients,
  onEdit,
  onDelete
}: PatientListProps) => {
  return (
    <Card className='bg-white shadow-sm border-zinc-200 h-[750px] flex flex-col'>
      <CardHeader className='border-b border-zinc-100'>
        <CardTitle className='text-lg font-medium text-zinc-800'>
          Pacientes Registrados
        </CardTitle>
      </CardHeader>
      <CardContent className='flex-1 overflow-y-auto'>
        {patients.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-full gap-2 text-center'>
            <Stethoscope className='w-12 h-12 text-zinc-300' />
            <div className='text-sm text-zinc-500'>
              No hay pacientes registrados aún.
              <br />
              Los pacientes agregados aparecerán en este lugar.
            </div>
          </div>
        ) : (
          <ul className='py-2 space-y-4'>
            {patients.map((patient, index) => (
              <li
                key={index}
                className='relative p-6 transition-all bg-white border rounded-lg group border-zinc-200 hover:shadow-sm'
              >
                <div className='absolute flex gap-2 transition-opacity opacity-0 right-4 top-4 group-hover:opacity-100'>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='w-8 h-8 text-zinc-500 hover:text-zinc-900'
                    onClick={() => onEdit?.(patient.id)}
                  >
                    <Pencil className='w-4 h-4' />
                    <span className='sr-only'>Editar paciente</span>
                  </Button>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='w-8 h-8 text-zinc-500 hover:text-red-600'
                    onClick={() => onDelete?.(patient.id)}
                  >
                    <Trash2 className='w-4 h-4' />
                    <span className='sr-only'>Eliminar paciente</span>
                  </Button>
                </div>

                <div className='space-y-4'>
                  <div>
                    <h3 className='text-lg font-semibold text-zinc-900'>
                      {patient.patient}
                    </h3>
                    <div className='flex flex-wrap mt-1 text-sm gap-x-6 gap-y-2 text-zinc-600'>
                      <div className='flex items-center gap-2'>
                        <User className='w-4 h-4 text-zinc-400' />
                        {patient.owner}
                      </div>
                      <div className='flex items-center gap-2'>
                        <Mail className='w-4 h-4 text-zinc-400' />
                        {patient.email}
                      </div>
                      <div className='flex items-center gap-2'>
                        <Calendar className='w-4 h-4 text-zinc-400' />
                        {patient.date}
                      </div>
                    </div>
                  </div>

                  <div className='text-sm font-semibold text-zinc-800'>
                    Síntomas
                  </div>
                  <div className='p-3 text-sm break-words whitespace-pre-wrap rounded-md bg-zinc-50 text-zinc-600'>
                    {patient.symptoms}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
