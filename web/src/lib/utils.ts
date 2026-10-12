export const formatDate = (dateStr: string, includeDay = true): string => {
  const d = new Date(dateStr);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  if (!includeDay) return `${y}.${m}`;
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}.${m}.${day}`;
};
