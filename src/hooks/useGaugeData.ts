import { useMemo } from 'react';

export function useGaugeData(score: number) {
  return useMemo(
    () => [
      { value: score },
      { value: 100 - score },
    ],
    [score]
  );
}
