import { useState, useCallback } from 'react';

export function useBarHover() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const onMouseEnter = useCallback((_data: unknown, index: number) => {
    setHoveredIndex(index);
  }, []);

  const onMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  return { hoveredIndex, onMouseEnter, onMouseLeave };
}
