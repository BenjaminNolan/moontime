# moontime

> _**NOTE:** This is not yet finished, so please excuse any inconsistencies,
> duplicated paragraphs, typos, etc._

Recently, a request was made to define a time system for use on the Moon. Having
worked a lot with internationalisation and cross-timezone software in the past,
and also having thought about this in my head a few times just out of curiosity,
I thought I'd have a go at actually writing down my idea for tracking time on
the Moon.

## Options

The following options, amongst others, are available for tracking time on the
Moon:

- Just use UTC and grid coordinates (the most sensible option IMO)

- Split the Lunar day into a large number of hours and have a leap day similar
  to the Gregorian calendar to re-synch the calendar with Earth years

- Call the Lunar day the Lunar calendar month, and split that into calendar
  days, and add in leap hours / days as necessary to re-synch the calendar with
  Earth years

- Disregard the Earth calendar entirely and treat the Moon's orbit around the
  Earth the same way we treat the Earth's orbit around the Sun (probably the
  most fun option)

## Option 1: Just use UTC and grid coordinates

Since the mapping of time on the moon relative to our calendar here on Earth is
not dependent on the actual position of the sun in the sky, it doesn't make
much sense to actually define a calendar or even a time zone for the moon which
infers daylight hours the same way we do with 'normal' timezones (if such a
thing even exists).

Thus, the most sensible option here is to just declare that all events logged
whilst on the Moon shall be logged with the date and time in UTC in conjunction
with the local grid coordinates at which the event occurred.

But, we're not here for sensible, we're here for time-zones on the Moon!

## Option 2: A 708-hour day?

If we're insistent on having a local Lunar calendar, then we first need a point
for that calendar to be relative to and calculated from.

* What about just using the linux epoch? Or maybe the exact time and date of the first moon landing?

### Lunar meridian

As far as I can tell, there is no official Lunar meridian defined at the time of
writing (almost as if that triggered the request! 😁).

Since the Moon is tidally locked and one side always faces Earth, I suggest we
define our meridian as the line of longitude which passes through the centre of
Tycho crater, becoming our 0 degrees longitude. I have chosen Tycho as it is a
large recognisable landmark that is easily measurable, and which undulates
between roughly the same position on the left and right sides of the visible
face of the moon over the course of the cycle of libration, thus it roughly
averages out to the centre point of the visible face of the Moon.

### Lunar calendar hours

Rather than re-defining everything completely, we should probably try to re-use
as much existing infrastructure and as many definitions as possible rather than
creating new time-keeping devices with a different number and / or length of
hours, minutes, and seconds. Thus, we will re-use the standard definitions for
hours, minutes, and seconds as they exist here on Earth.

These are:

- **Hour:** 60 minutes
- **Minute:** 60 seconds
- **Second:** The duration of 9,192,631,770 periods of the radiation
  corresponding to the transition between the two hyperfine levels of the
  unperturbed ground state of a caesium-133 atom. [1][1] Simple. o.o

### Lunar calendar day

Since the Lunar day and the Lunar month are the same length (708 SI hours), we
have two options here:

- Keep the day and month the same and have a single 708-hour day each month,
  having 708 defined time offsets to synchronise the local Solar zenith with
  Lunar midday (ie, 354:00, or 354 o'clock if you will)

- Use this time period as the Lunar calendar month and define a sub-division of
  this time period which will become our 'day'

This first option is attractive as it means that no-one will ever confuse the
month and the day when dates are written down as 01/01/2134. o.o

It is, however, redundant as we are essentially repeating a unit that will never
vary, and will lead to timestamps such as 2134-01-01T701:59:51+593:00 which is
kinda difficult to get your head around.

Thus, we need to define our Lunar calendar day. We also need to deal with
calendar synchronisation, which we will do later as we want to do this based on
the Lunar month-day regardless of whether we are using it as our calendar day or
not.

## Option 3: Define a new day

Two of the factors of 708 are 12 and 59, which gives us two options for the
number of hours in a day and the number of days in a Lunar calendar month. We
could have:

- 12 days in a Lunar calendar month comprising 59 hours each, or
- 59 days in a Lunar calendar month comprising 12 hours each.

Since we are much more used to dealing with twelves than fifty-ninths, I moot
that we take the second option here. This also means that a standard analogue
watch will function perfectly for showing the course of the progress of each
Lunar calendar day.

### Lunar calendar years

So far, we have defined the following units for our Lunar calendar:

- The standard SI Hour, Minute, and Second

- A Lunar calendar month (hereonout referred to as the Moonth) comprising 59
  Lunar calendar days

- A Lunar calendar day (a Doonth?) comprising 12 standard hours

We now need to decide how to track years. We probably want to try to keep these
as in-line with Earth years as possible, so we need to deal with the fact that
365.24 / 354 leaves us with 11.24 days unaccounted for within a cycle.

### Lunar calendar month names

Since we're at all this stuff, we might as well give these months some names.
Since half our month names come from the numbered Roman ones, we might as well
just complete the set:

- 1 Unumber
- 2 Duober
- 3 Triember
- 4 Quartember
- 5 Quintember (because Quintilis is inconsistent o.o)
- 6 Sextember
- 7 September (because it's the seventh month)
- 8 October
- 9 November
- 10 December
- 11 Undecimber
- 12 Duodecimber
- 13 Triodecimber (used in leap years)

Corrections to these names are appreciated as I've not studied Latin since I
was 15, and as we all know, tomacula scelerisque non bonum ientaculum faciunt.
<sup>[f1](#f1)</sup>

### Leap months

When synchronising the Lunar calendar year with the Georgian calendar year on
Earth, we probably want to do so in such a way that maintains the mapping
between a given day or hour in a month and the position of the sun in the sky,
similar to how midnight is always dark in Singapore regardless of what time of
year it is.

In the Gregorian calendar, we 'simply' add a leap day every four
years except for those divisible by 100, unless the year is _also_ divisible
by 400. (So, 1992, 1996, 2000, 2004, and 2008 were all leap years, but 1900
and 2100 (we/a)ren't.) The International Earth Rotation Service (the people
in charge of keeping it spinning, I assume) also add leap seconds occasionally,
but we're not going to go down to that level of accuracy here.

Our Moonth lasts 29.5 Earth days, and our discrepancy between the Lunar calendar
year and the Gregorian calendar year is 11.24 days, or 0.381 Moonths. This means
that roughly every three years we need to insert an additional Moonth into the
Lunar calendar year in order to keep things as in synch as possible. However, as
with the Gregorian calendar, we need some additional rules to stop slippage too
far in either direction.

| Lunar      | Earth      |
|------------|------------|
| 1970-01-01 | 1970-01-01 |
| 1970-02-01 | 1970-01-30 |
| 1970-02-04 | 1970-02-01 |
| 1970-12-59 | 1970-12-20 |
| 1971-01-22 | 1970-12-31 |

> _**TODO:** Better define the leap year algorithm._

### Putting this into practice

In order to actually make this useful, we need a reference variable to use in
our calculations. Fortunately, one already exists: The 64-bit UNIX Timestamp.

This is defined as the number of seconds that have elapsed since 00:00:00 UTC on
the first of January, 1970, and is now stored in a 64-bit integer, which is good
until the year 292,000,000,000, at which point, neither the Moon nor the Earth
will probably exist, so we probably don't need to worry about that.

## Option 4: Who needs Earth time anyway?

If we forget Earth exists for a minute, we could do something interesting and
define our Lunar calendar similarly to the how its parent body relates to _its_
parent body (ie, we count Lunar years as how many orbits it's done around Earth
instead of how many orbits it's done around the Sun).

If we take our outermost measurement of time as the Lunar day, then we need
define new units to subdivide that day.

I propose the following subdivisions:

- The SI Second as the basis for all other time units, same as outlined above
- The Lunartick, one 24th of a Lunar day or 106,200 Seconds
- The Moonment, one 12th of a Lunartick, or 8,850 Seconds
- The Moonit, one 75th of a Moonment, or 118 SI Seconds

> _**NOTE:** Below this line is a mess that includes some duplication for now._

> _**TODO:** Define the time zones based on the meridian outlined above._

Given this meridian, we can then divide the Moon's surface into 24 regions each
covering 15 degrees longitude travelling East around the surface, which gives us
the 24 Lunartick offsets that would be needed to synchronise the Solar Zenith
with the Lunar day so that 12:00:00:00 always falls when the sun is directly
overhead. This offset can be calculated easily as follows:

```
todo: 7.5deg offset here
floor(longitude / 15)
```

## About the Author

I am Benjamin Nolan, a 30-something systems architect, amateur composer, and
occasional amateur astronomer and fizzixist (ie, I whang Kerbals into asteroids).

You can find me on [GitHub][2] as [BenjaminNolan][3], and I have an ORCid
because it's funny to think that someone might actually cite this. It's
[0009-0001-1451-5027][4] if you're interested.

## References and Footnotes

[1]: <https://metricsystem.net/si/base-units/second/> "second - Metric System"
[2]: <https://github.com> "GitHub"
[3]: <https://github.com/BenjaminNolan> "Benjamin Nolan - GitHub"
[4]: <https://orcid.org/0009-0001-1451-5027> "Benjamin Nolan - ORCid"

<a id="f1">1</a>: Chocolate sausages do not a good breakfast food make.
