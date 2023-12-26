export function useFormatDate(date: Date | string) {
  if(!date) return '';

  return typeof date === 'string' ? date : date.toDateString();
}
