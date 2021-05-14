import React, { useEffect, useState, useCallback } from 'react'
import { getDays, getPrevMonth, getNextMonth, getAllDates } from 'calendar-fp'
import { CalendarContext, useCalendarState } from './CalendarContext'

const { Provider: CalendarContextProvider } = CalendarContext

type TCalendarProps = {
  currentMonth?: Date
  startDayIndex?: number
  onMonthChange: (date: Date) => void
  children: React.Component[]
}

export function Calendar({
  currentMonth,
  startDayIndex,
  onMonthChange,
  children,
}: TCalendarProps): JSX.Element {
  const [currentMonthState, setCurrentMonthState] = useState<Date>(new Date())
  useEffect(
    function setCurrentMonthFromProps() {
      if (currentMonth) {
        setCurrentMonthState(currentMonth)
      }
    },
    [currentMonth]
  )

  const handlePrevMonth = useCallback(() => {
    const newMonth = getPrevMonth(currentMonthState)
    setCurrentMonthState(newMonth)
    onMonthChange(newMonth)
  }, [currentMonthState, onMonthChange])

  const handleNextMonth = useCallback(() => {
    const newMonth = getNextMonth(currentMonthState)
    setCurrentMonthState(newMonth)
    onMonthChange(newMonth)
  }, [currentMonthState, onMonthChange])

  return (
    <CalendarContextProvider
      value={{
        currentMonth: currentMonthState,
        startDayIndex,
        handlePrevMonth,
        handleNextMonth,
      }}
    >
      {children}
    </CalendarContextProvider>
  )
}

type TCalendarNavigationProps = {
  render: (props: Record<string, any>) => JSX.Element
}

export function CalendarNavigation({
  render,
}: TCalendarNavigationProps): JSX.Element {
  const { currentMonth, handlePrevMonth, handleNextMonth } = useCalendarState()
  return render({ currentMonth, handlePrevMonth, handleNextMonth })
}

type TCalendarDaysProps = {
  render: (props: Record<string, any>) => JSX.Element
}

export function CalendarDays({ render }: TCalendarDaysProps): JSX.Element {
  const { currentMonth } = useCalendarState()
  // temporary hack for type casting
  const days = getDays()
  return render({ days, currentMonth })
}

type TCalendarDateProps = {
  render: (props: Record<string, any>) => JSX.Element
}

export function CalendarDates({ render }: TCalendarDateProps): JSX.Element {
  const { currentMonth } = useCalendarState()
  const dates = getAllDates(currentMonth)
  return render({ dates, currentMonth })
}
