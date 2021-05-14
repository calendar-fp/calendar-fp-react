# calendar-fp-react

⚡ Style agnostic react calendar based on calendar-fp

## Features

- Style agnostic
- Minimalistic

## Usage

```js

import { Calendar, CalendarNavigation, CalendarDays, CalendarDates } from 'calendar-fp-react';

// rendering

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

```

## License

MIT © [Deepak Bhattarai](https://github.com/bring2dip)
