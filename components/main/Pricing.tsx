import { offers } from "@/lib/config";
import React from "react";
import OfferCard from "./OfferCard";

const Pricing = () => {
  return (
    <section className="py-4" id="offers">
      <div className="mb-5 flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-center">Pricing</h1>
        <p className="text-lg text-zinc-300 font-medium text-center">
          Choose the offer that suits your needs the most.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {offers.map((offer, id) => (
          <OfferCard cardNum={id + 1} offer={offer} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
