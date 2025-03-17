export const parseStatValue = (value: string) => {
  const numericPart = value.match(/\d+/)?.[0];
  return numericPart ? parseInt(numericPart, 10) : 0;
};

export const getValueSuffix = (value: string) => {
  const suffix = value.replace(/\d+/g, "");
  return suffix;
};
