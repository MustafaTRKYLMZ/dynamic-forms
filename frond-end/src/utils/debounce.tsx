export const debounce = (func: Function, wait: number) => {
  let timeout: number | undefined;
  return (...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait) as unknown as number;
  };
};
