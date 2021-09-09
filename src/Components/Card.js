/** @format */

import { ImFire } from "react-icons/im";
import { TiArrowRepeatOutline } from "react-icons/ti";

export const Card = ({ details }) => {
  const calculateSpent = (spent, remaining) => {
    return (spent / remaining) * 100;
  };

  const calculateAvailable = (spent, remaining) => {
    return 100 - calculateSpent(spent, remaining);
  };

  return (
    <>
      {details && (
        <div className="p-5 m-2 md:m-5 w-full max-w-lg shadow-lg space-y-4 relative">
          <div className="absolute shadow-md h-16 w-16 rounded-full top-8 right-10 flex items-center justify-center">
            {details.card_type === "burner" ? (
              <ImFire className="text-2xl text-pink-700" />
            ) : (
              <TiArrowRepeatOutline className="text-2xl text-pink-700" />
            )}
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-semibold">{details.name}</h3>
            <div className="flex items-center space-x-1 text-gray-500">
              <p className="capitalize">{details.owner_name}</p>
              <span className="text-1xl">&bull;</span>
              <p className="capitalize">{details.budget_name}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="border border-gray-400 rounded px-3 text-gray-400 font-semibold capitalize">
              {details.card_type}
            </span>
            {details.expiry ? (
              <p className="text-gray-500 capitalize">
                Expires: {details.expiry}
              </p>
            ) : (
              <p className="text-gray-500 capitalize">
                {new Date().toLocaleString("default", { month: "short" })}{" "}
                Limit: {details.limit} SGD
              </p>
            )}
          </div>
          <div>
            <div className="flex">
              <div
                className="bg-pink-600 rounded-l-lg p-2"
                style={{
                  width: `${calculateSpent(
                    details.spent.value,
                    details.available_to_spend.value
                  )}%`,
                }}></div>
              <div
                className="bg-green-400 rounded-r-lg p-2"
                style={{
                  width: `${calculateAvailable(
                    details.spent.value,
                    details.available_to_spend.value
                  )}%`,
                }}></div>
            </div>
          </div>
          <div className="space-y-3 font-semibold">
            <div className="flex justify-between ">
              <div className="flex items-center space-x-2">
                <span className="rounded-full w-3 h-3 bg-pink-600"></span>
                <p className="text-gray-700">Spent</p>
              </div>
              <div className="text-gray-800">{details.spent.value} SGD</div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <span className="rounded-full w-3 h-3 bg-green-400"></span>
                <p>Available to spend</p>
              </div>
              <p>{details.available_to_spend.value} SGD</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
