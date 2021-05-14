import React, { useContext } from 'react'

export type TCalendarContextProp = {
  startDayIndex: number
  currentMonth: Date
  handlePrevMonth: (date: Date) => void
  handleNextMonth: (date: Date) => void
}

export const CalendarContext = React.createContext({
  startDayIndex: 0,
  currentMonth: new Date(),
  /* eslint @typescript-eslint/no-empty-function: 'off' */
  handlePrevMonth: () => {},
  handleNextMonth: () => {},
})

export const useCalendarState = (): TCalendarContextProp => {
  return useContext(CalendarContext)
}
