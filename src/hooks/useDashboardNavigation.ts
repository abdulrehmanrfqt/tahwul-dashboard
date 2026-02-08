import { useState, useCallback } from 'react';

export function useDashboardNavigation() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const selectCategory = useCallback((title: string) => {
    setSelectedCategory(title);
  }, []);

  const goBack = useCallback(() => {
    setSelectedCategory(null);
  }, []);

  return { selectedCategory, selectCategory, goBack };
}
