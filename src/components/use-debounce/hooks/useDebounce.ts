export const useDebounce = (cb: any, delay = 300) => {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);

    timer = setTimeout(() => cb(...args), delay);
  };
};
