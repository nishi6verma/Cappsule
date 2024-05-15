import React from "react";
import NotAvailable from "./NotAvailable";

const Pricing = ({ price }) => {
  // Display the price if available, else display NotAvailable component
  return (
    <>
      {price && <h1 className="font-bold text-2xl   ">From ₹{price}</h1>}
      {!price && <NotAvailable />}
    </>
  );
};

export default Pricing;
