// utils/dateUtils.ts

/**
 * Форматирует дату в строке (дд.мм.гггг) и возвращает количество оставшихся дней
 * @param dateString Строка с датой в формате "дд.мм.гггг"
 * @returns Количество оставшихся дней до указанной даты + 1 год (дембель)
 */
export const getDembelRemainingDays = (dateString: string): number => {
  const { year, month, day } = parseDateString(dateString);
  const currentDate = new Date();
  const dembelDate = new Date(year + 1, month, day);
  return Math.floor((dembelDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
};

/**
 * Парсит строку с датой в формате "дд.мм.гггг" в объект с числами
 * @param dateString Строка с датой в формате "дд.мм.гггг"
 * @returns Объект с числовыми значениями { day, month, year }
 */
export const parseDateString = (dateString: string): { day: number; month: number; year: number } => {
  const day = Number(dateString.slice(0, 2));
  const month = Number(dateString.slice(3, 5)) - 1; // Месяцы в JS: 0-11
  const year = Number(dateString.slice(-4));
  return { day, month, year };
};

/**
 * Возвращает различные единицы времени до указанной даты
 * @param dateString Строка с датой в формате "дд.мм.гггг"
 * @returns Объект с оставшимся временем { days, weeks, months, hours, minutes }
 */
export const getTimeRemaining = (dateString: string) => {
  const { year, month, day } = parseDateString(dateString);
  const currentDate = new Date();
  const targetDate = new Date(year, month, day);
  
  // Если текущая дата уже прошла targetDate, добавляем 1 год
  const dembelDate = currentDate > targetDate 
    ? new Date(year + 1, month, day) 
    : targetDate;

  const timeDiff = dembelDate.getTime() - currentDate.getTime();

  // Если время уже прошло, возвращаем 0 вместо отрицательных значений
  return {
    days: Math.max(0, Math.floor(timeDiff / (1000 * 60 * 60 * 24))),
    weeks: Math.max(0, Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7))),
    months: Math.max(0, Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44))),
    hours: Math.max(0, Math.floor(timeDiff / (1000 * 60 * 60))),
    minutes: Math.max(0, Math.floor(timeDiff / (1000 * 60))),
  };
};

/**
 * Возвращает количество прошедших дней с указанной даты
 * @param dateString Строка с датой в формате "дд.мм.гггг"
 * @returns Количество прошедших дней
 */
export const getDaysPassed = (dateString: string): number => {
  const { year, month, day } = parseDateString(dateString);
  const currentDate = new Date();
  const targetDate = new Date(year, month, day);
  return Math.floor((currentDate.getTime() - targetDate.getTime()) / (1000 * 60 * 60 * 24));
};

/**
 * Форматирует количество дней в читаемую строку (для обратной совместимости)
 * @deprecated Используйте более специализированные функции
 */
export const formatDate = (dateString: string): number => {
  console.log(`С ${dateString} прошло ${getDaysPassed(dateString)} дней.`);
  return getDembelRemainingDays(dateString);
};
export const formatDateToDotted = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  
  return `${day}.${month}.${year}`;
};