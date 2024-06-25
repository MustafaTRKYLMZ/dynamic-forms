export const setItemToLocalStorage = (endpoint: string, data: any) => {
  localStorage.setItem(endpoint, JSON.stringify(data));
};
