/** @format */

import { Card } from "../Components/Card";
import { useMainContext } from "../context/MainContext";

export const YourCard = () => {
  const { allData, currentUserid, view } = useMainContext();

  const myCards = allData?.data.filter(
    (details) => details.owner_id === currentUserid
  );
  console.log(allData);

  const renderedCards = myCards.map((details) => <Card details={details} />);

  return (
    <div
      className={`mt-2 md:mt-4 flex flex-wrap justify-center items-center ${
        view === "list" ? "flex-col" : "flex-row"
      }`}>
      {renderedCards}
    </div>
  );
};
