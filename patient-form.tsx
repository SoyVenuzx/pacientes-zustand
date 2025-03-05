import { Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function PatientForm () {
  return (
    <div className='min-h-screen p-4 bg-zinc-50 md:p-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-8 text-center'>
          <h1 className='text-3xl font-semibold tracking-tight'>
            <span className='text-zinc-900'>Seguimiento de Pacientes</span>{' '}
            <span className='text-zinc-800'>Veterinaria</span>
          </h1>
        </div>

        <div className='grid gap-8 lg:grid-cols-2'>
          {/* Formulario */}
          <Card className='bg-white shadow-sm border-zinc-200'>
            <CardHeader>
              <CardTitle className='text-lg font-medium text-zinc-800'>
                Añadir Paciente
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='patient' className='text-zinc-600'>
                  PACIENTE
                </Label>
                <Input
                  id='patient'
                  placeholder='Nombre del Paciente'
                  className='border-zinc-200 focus:border-zinc-400 focus:ring-zinc-400'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='owner' className='text-zinc-600'>
                  PROPIETARIO
                </Label>
                <Input
                  id='owner'
                  placeholder='Nombre del Propietario'
                  className='border-zinc-200 focus:border-zinc-400 focus:ring-zinc-400'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email' className='text-zinc-600'>
                  EMAIL
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='Email de Registro'
                  className='border-zinc-200 focus:border-zinc-400 focus:ring-zinc-400'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='date' className='text-zinc-600'>
                  FECHA ALTA
                </Label>
                <div className='relative'>
                  <Input
                    id='date'
                    type='date'
                    className='border-zinc-200 focus:border-zinc-400 focus:ring-zinc-400'
                  />
                  <Calendar className='absolute right-3 top-2.5 h-5 w-5 text-zinc-400' />
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='symptoms' className='text-zinc-600'>
                  SÍNTOMAS
                </Label>
                <Textarea
                  id='symptoms'
                  placeholder='Síntomas del paciente'
                  className='min-h-[100px] border-zinc-200 focus:border-zinc-400 focus:ring-zinc-400'
                />
              </div>

              <Button className='w-full bg-zinc-900 hover:bg-zinc-800'>
                GUARDAR PACIENTE
              </Button>
            </CardContent>
          </Card>

          {/* Lista de Pacientes */}
          <Card className='bg-white shadow-sm border-zinc-200'>
            <CardHeader>
              <CardTitle className='text-lg font-medium text-zinc-800'>
                Pacientes Registrados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex min-h-[400px] items-center justify-center text-center text-sm text-zinc-500'>
                No hay pacientes registrados aún.
                <br />
                Los pacientes agregados aparecerán en este lugar.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
