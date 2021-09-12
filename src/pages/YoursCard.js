/** @format */

import React from "react";
import { Card } from "../Components/Card";
import { useMainContext } from "../context/MainContext";

export const YourCard = () => {
  const { allData, currentUserid, view } = useMainContext();

  const myCards = allData?.filter(
    (details) => details.owner_id === currentUserid
  );

  const renderedCards = React.Children.toArray(
    myCards.map((details) => (
      <div className=" m-2 md:m-5 w-full max-w-xl">
        <Card details={details} />
      </div>
    ))
  );

  return (
    <section
      className={`card-page ${view === "list" ? "flex-col" : "flex-row"}`}>
      {renderedCards}
    </section>
  );
};
