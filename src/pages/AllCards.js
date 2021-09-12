/** @format */

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FilterButton,
  FilterModal,
  NoCardsFound,
  Search,
} from "../Components/AllCards";
import { Card } from "../Components/Card";
import { useMainContext } from "../context/MainContext";
import { useFetch } from "../hooks/useFetch";
import {
  filterByCardType,
  filterByHolder,
  searchResult,
} from "../utils/filters";

export const AllCards = () => {
  const { view, allData, cardType, cardHolder, modal, dispatch, filteredData } =
    useMainContext();
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, total] = useFetch(pageNumber);
  const [text, setText] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [activateFilters, setActivateFilters] = useState(false);

  //infinite scrolling
  const observer = useRef();
  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      //disconnect previous observer
      if (observer.current) observer.current.disconnect();
      //get new observer
      observer.current = new IntersectionObserver((entries) => {
        console.log(entries[0]);
        if (entries[0].isIntersecting && total > allData.length) {
          setPageNumber((pageNumber) => pageNumber + 1);
        }
      });
      //connect new observer
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  //filter only applied on clicking apply
  useEffect(() => {
    //multiple filters through function composition
    const data = searchResult(
      filterByHolder(filterByCardType(allData, cardType), cardHolder),
      text
    );
    dispatch({ type: "FILTERED_DATA", payload: data });
  }, [activateFilters, text, allData]);

  const renderedCards = React.Children.toArray(
    filteredData?.map((details, index) => {
      if (allData.length === index + 1) {
        return (
          <div ref={lastElement} className=" m-2 md:m-5 w-full max-w-xl">
            <Card details={details} />
          </div>
        );
      } else {
        return (
          <div className=" m-2 md:m-5 w-full max-w-xl">
            <Card details={details} />
          </div>
        );
      }
    })
  );

  return (
    <section>
      <div className="box flex justify-end pt-3 space-x-3 items-center">
        <Search
          setShowInput={setShowInput}
          setText={setText}
          showInput={showInput}
        />
        <FilterButton />
      </div>
      <div
        className={`card-page ${view === "list" ? "flex-col" : "flex-row"} `}>
        {renderedCards}
        {modal && (
          <FilterModal data={allData} setActivateFilters={setActivateFilters} />
        )}
        {filteredData?.length === 0 && loading === false && <NoCardsFound />}
        {loading && <p className="text-3xl pt-2">Loading...</p>}
      </div>
    </section>
  );
};
