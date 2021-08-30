import { useEffect, useState } from "react";

type Unit = [Intl.RelativeTimeFormatUnit, number];

const DATE_UNITS: Array<Unit> = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const INTERVAL = 5 * 1000000;

const getDateDiffs = (timestamp: number): { value: number, unit: Intl.RelativeTimeFormatUnit } => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
      const value = Math.round(elapsed / secondsInUnit);
      return { value, unit };
    }
  }

  return {
    value: 0,
    unit: 'second',
  }
};

export default function useTimeAgo(date: string) {
  const timestamp = Date.parse(date);
  const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp);
      setTimeago(newTimeAgo);
    }, INTERVAL);

    return () => clearInterval(interval);

  }, [timestamp]);


  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const { value, unit } = timeago;

  return rtf.format(value, unit);
}