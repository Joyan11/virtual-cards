/** @format */

import { useEffect, useState } from "react";
import { useMainContext } from "../context/MainContext";
import { fakeFetch } from "../fakeServer/fakeServer";

export const useFetch = (pagenumber) => {
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const { dispatch } = useMainContext();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        console.log("running");
        const { data, total } = await fakeFetch(pagenumber);
        dispatch({ type: "SET_INITIAL_DATA", payload: data });
        setTotal(total);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [dispatch, pagenumber]);

  return [loading, total];
};
