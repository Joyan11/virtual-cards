/** @format */

import React from "react";
import { Card } from "../Components/Card";
import { useMainContext } from "../context/MainContext";

export const BlockedCards = () => {
  const { allData, view } = useMainContext();

  const blockedCards = allData?.filter(
    (details) => details.status === "blocked"
  );

  const renderedCards = React.Children.toArray(
    blockedCards.map((details) => (
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
