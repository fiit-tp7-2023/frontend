export const parsePaginationQueryParam = (param: string, defaultValue: number) => {
  const parsedParam = parseInt(param);
  return isNaN(parsedParam) || parsedParam < 1 ? defaultValue : parsedParam;
};
