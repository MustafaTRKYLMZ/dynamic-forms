export const getItemFromLocalStorage = (endpoint: string) => {
  const dataFromLocal = localStorage.getItem(endpoint);
  const data = dataFromLocal ? JSON.parse(dataFromLocal) : [];
  return data;
};
