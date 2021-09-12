/** @format */
import allData from "../data/CardData.json";

const paginatedData = (perPage, pagenumber) => {
  const newData = allData.data.filter(
    (_, index) => index < perPage * pagenumber
  );
  return { data: newData, total: allData.total };
};

export const fakeFetch = (pagenumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = paginatedData(allData.per_page, pagenumber);
      if (result) {
        resolve(result);
      } else {
        reject("Something went wrong");
      }
    }, 1000);
  });
};
