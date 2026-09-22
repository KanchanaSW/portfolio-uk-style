import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/** Formats "2023-06" → "Jun 2023"; passes through "Present". */
export function formatMonthYear(value: string): string {
  if (value === "Present") return "Present";
  const [year, month] = value.split("-");
  const monthIndex = Number(month) - 1;
  if (!year || Number.isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) {
    return value;
  }
  return `${monthNames[monthIndex]} ${year}`;
}

export function formatDateRange(start: string, end: string): string {
  return `${formatMonthYear(start)} – ${formatMonthYear(end)}`;
}
