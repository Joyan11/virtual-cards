/** @format */

import { Card } from "../Components/Card";
import { useMainContext } from "../context/MainContext";

export const BlockedCards = () => {
  const { allData, view } = useMainContext();

  const myCards = allData?.data.filter(
    (details) => details.status === "blocked"
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
