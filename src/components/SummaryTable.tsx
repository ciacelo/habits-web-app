import React from 'react'
import { generateDateFromYearBeginning } from '../utils/generate-date-from-year-beginning'
import HabitDay from './HabitDay'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDateFromYearBeginning()

const minimumSummaryDateSize = 18 * 7 //  18 semanas * 7 dias p/ semana = 126 dias
const amoutOfDaysToFill = minimumSummaryDateSize - summaryDates.length //quantidade de dias que devem ser simulados/placeholder

export default function SummaryTable() {
  return (
    <div className='w-full flex'>
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, index) => (
          <div
            key={`${day}-${index}`} 
            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map(date => (
          <HabitDay 
            key={date.toString()}
            amount={5} 
            completed={Math.round(Math.random() * 5)}
          /> 
        ))}

        {amoutOfDaysToFill > 0 && Array.from({ length: amoutOfDaysToFill }).map((_, i) => (
           <div key={i} className="bg-zinc-900 w-10 h-10 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed" />
        ))}
      </div>
    </div>
  )
}
