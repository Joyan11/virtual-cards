/** @format */

export const filterByCardType = (data, filter) => {
  if (filter.length > 0) {
    return data?.filter((cardData) => filter.includes(cardData.card_type));
  } else {
    return data;
  }
};

export const filterByHolder = (prevdata, filter) => {
  if (filter !== "default") {
    return prevdata?.filter((cardData) => cardData.owner_name === filter);
  } else {
    return prevdata;
  }
};

export const searchResult = (prevData, text) => {
  return prevData?.filter((details) =>
    details.name.toLowerCase().trim().includes(text.toLowerCase().trim())
  );
};
