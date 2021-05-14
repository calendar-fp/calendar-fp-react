import React from 'react'
import format from 'date-fns/fp/format'
import { Calendar, CalendarNavigation, CalendarDays, CalendarDates } from '..'

export default {
  title: 'Calendar FP React',
}

export const Default: React.FC = () => {
  const navRenderer = ({ currentMonth, handlePrevMonth, handleNextMonth }) => {
    const dateFormat = 'MMMM yyyy'
    const formatToMonthYear = format(dateFormat)
    return (
      <div>
        <span>{formatToMonthYear(currentMonth)}</span>
        <span>
          <button type="button" onClick={handlePrevMonth}>
            &lt; Prev{' '}
          </button>
          <button type="button" onClick={handleNextMonth}>
            Next &gt;
          </button>
        </span>
      </div>
    )
  }

  const daysRenderer = ({ days }) => {
    return (
      <div>
        {days.map((day: string) => (
          <span key={`day-cell-${day}`}>{day}</span>
        ))}
      </div>
    )
  }

  const datesRenderer = ({ dates }) => {
    const cellDateFormat = 'd'
    return (
      <div>
        {dates.map((date: Date) => {
          const formattedDate = format(cellDateFormat)(date)
          return (
            <span key={`date-cell-${formattedDate}`}>
              <span>{formattedDate}</span>
              <span />
            </span>
          )
        })}
      </div>
    )
  }

  return (
    <Calendar
      onMonthChange={date => {
        /* eslint-disable-next-line no-console */
        console.info('month changed', date)
      }}
    >
      <CalendarNavigation render={navRenderer} />
      <CalendarDays render={daysRenderer} />
      <CalendarDates render={datesRenderer} />
    </Calendar>
  )
}
