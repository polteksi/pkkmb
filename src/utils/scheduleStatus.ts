import { DaySchedule } from '../types';

export type ScheduleStatus = 'upcoming' | 'active' | 'completed';

const JAKARTA_TIME_ZONE = 'Asia/Jakarta';

export const getJakartaDateKey = (date: Date = new Date()): string => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: JAKARTA_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
};

export const getScheduleStatus = (
  dateISO: string,
  currentDate: Date = new Date(),
): ScheduleStatus => {
  const today = getJakartaDateKey(currentDate);

  if (dateISO > today) return 'upcoming';
  if (dateISO < today) return 'completed';
  return 'active';
};

export const getRelevantDayNumber = (
  days: DaySchedule[],
  currentDate: Date = new Date(),
): number => {
  if (days.length === 0) return 1;

  const today = getJakartaDateKey(currentDate);
  const exactDay = days.find((day) => day.dateISO === today);
  if (exactDay) return exactDay.dayNumber;

  const nextDay = days.find((day) => day.dateISO > today);
  return nextDay?.dayNumber ?? days[days.length - 1].dayNumber;
};
