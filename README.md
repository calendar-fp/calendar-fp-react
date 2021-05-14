# calendar-fp-react

⚡ Style agnostic react calendar based on calendar-fp

## Features

- Style agnostic
- Minimalistic
- Compund components
- Uses date-fns library

## Usage

```js

import { Calendar, CalendarNavigation, CalendarDays, CalendarDates } from 'calendar-fp-react';

const App = () => {
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
        currentMonth={new Date(2022, 0, 1)}
        onMonthChange={date => {
            console.info('month changed', date)
        }}
    >
        <CalendarNavigation render={navRenderer} />
        <CalendarDays render={daysRenderer} />
        <CalendarDates render={datesRenderer} />
    </Calendar>
  );
}

```

## License

MIT © [Deepak Bhattarai](https://github.com/bring2dip)
