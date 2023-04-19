import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import { ProgressBar } from './ProgressBar'

interface HabitProps {
  completed: number
  amount: number
}

export default function HabitDay({ completed, amount }: HabitProps) {
  const completedPercenage = Math.round((completed / amount) * 100)
  
  return (
    <Popover.Root>
      <Popover.Trigger className={clsx('w-10 h-10 border-2 rounded-lg', {
        'bg-zinc-900 border-zinc-800': completedPercenage == 0,
        'bg-violet-900 border-violet-800': completedPercenage > 0 && completedPercenage < 20,
        'bg-violet-800 border-violet-700': completedPercenage >= 20 && completedPercenage < 40,
        'bg-violet-700 border-violet-600': completedPercenage >= 40 && completedPercenage < 60,
        'bg-violet-600 border-violet-500': completedPercenage >= 60 && completedPercenage < 80,
        'bg-violet-500 border-violet-400': completedPercenage >= 80,

      })} />

      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col' >
          <span className='font-semibold text-zinc-400'>terça-feira</span>
          <span className='mt-1 font-extrabold leading-tight text-3xl'>17/01</span>

          <ProgressBar progress={completedPercenage} />


          <Popover.Arrow height={9} width={16} className='fill-zinc-900' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
