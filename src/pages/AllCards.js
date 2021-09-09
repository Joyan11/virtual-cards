/** @format */

import React from "react";
import { Card } from "../Components/Card";
import { useMainContext } from "../context/MainContext";

export const AllCards = () => {
  const { view, allData } = useMainContext();

  const renderedCards = React.Children.toArray(
    allData.data?.map((details) => {
      return <Card details={details} />;
    })
  );

  return (
    <div
      className={`mt-2 md:mt-4 flex flex-wrap justify-center items-center ${
        view === "list" ? "flex-col" : "flex-row"
      } `}>
      {renderedCards}
    </div>
  );
};
