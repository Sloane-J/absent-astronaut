/**
 * Utility function to calculate the progress percentage.
 * @param completed - The number of completed items.
 * @param total - The total number of items.
 * @returns The progress percentage.
 */
export function calculateProgress(completed: number, total: number): number {
    return total > 0 ? (completed / total) * 100 : 0;
  }
  
  /**
   * Utility function to check if localStorage is available.
   * @returns True if localStorage is available, false otherwise.
   */
  export function isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }
  
  /**
   * Utility function to save data to localStorage.
   * @param key - The key under which the data will be saved.
   * @param data - The data to save.
   */
  export function saveToLocalStorage(key: string, data: any): void {
    if (isLocalStorageAvailable()) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }
  
  /**
   * Utility function to load data from localStorage.
   * @param key - The key under which the data is saved.
   * @returns The loaded data, or null if not found.
   */
  export function loadFromLocalStorage(key: string): any {
    if (isLocalStorageAvailable()) {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    }
    return null;
  }