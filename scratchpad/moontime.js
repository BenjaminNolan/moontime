// TODO: Convert to TypeScript

// Cheers to https://stackoverflow.com/questions/21593692/convert-unix-timestamp-to-date-without-system-libs for the basis for the logic here
function millisToLunarTime(millis) {
  const seconds = parseInt(millis / 1000);
  console.log(seconds);

  let second = seconds;
  let minute = 0;
  let hour = 0;
  let day = 0;
  let moonth = 0;
  let year = 1970;

  minute = Math.floor(second / 60);
  second -= minute * 60;

  hour = Math.floor(minute / 60);
  minute -= hour * 60;

  // Our Lunar calendar has 59 12-hour days in a Moonth :)
  day = Math.floor(hour / 12);
  hour -= day * 12;

  while (true) {
    // We have a leap year every 3 years in which we add one Moonth
    const leapYear = (year % 3 === 1);
    const moonthsInYear = leapYear ? 13 : 12;
    const daysInYear = moonthsInYear * 59;
    if (day >= daysInYear) {
      day -= daysInYear;
      year++;
    } else {
      for (moonth = 0; moonth < moonthsInYear; ++moonth) {
        if (day < 59) {
          break;
        }
        day -= 59;
      }
      break;
    }
  }

  day += 1;
  moonth += 1;

  return {
    second,
    minute,
    hour,
    day,
    moonth,
    year,
  };
}
