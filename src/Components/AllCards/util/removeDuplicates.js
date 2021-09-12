/** @format */

export const removeDuplicates = (data) => {
  const newArr = data.map((item) => item.owner_name);
  const purgedDuplicates = [...new Set(newArr)];
  return purgedDuplicates;
};
