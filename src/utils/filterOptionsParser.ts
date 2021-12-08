export const removeDuplicates = (options: string[]): string[] => {
  return options.filter((option, i) => {
    return options.indexOf(option) === i;
  });
};
