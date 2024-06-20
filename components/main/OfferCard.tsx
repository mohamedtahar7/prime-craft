import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Button } from "../ui/button";
interface OfferCardProps {
  offer: any;
  cardNum: number;
}
const OfferCard = ({ offer, cardNum }: OfferCardProps) => {
  return (
    <Card
      className={`${
        cardNum === 3 ? "bg-zinc-100" : "bg-zinc-900"
      } flex flex-col ${cardNum === 1 ? "flex-1" : ""} justify-start px-4`}
    >
      <CardHeader
        className={`text-lg ${
          cardNum === 3 ? "text-zinc-900" : "text-zinc-200"
        }`}
      >
        {offer.title}
      </CardHeader>
      <CardContent className="h-full flex flex-col gap-3 ">
        <h1
          className={`text-2xl font-bold ${
            cardNum === 3 ? "text-zinc-900" : "text-zinc-100"
          }`}
        >
          {offer.price}.00 DZD
        </h1>
        <p
          className={`text-md font-normal ${
            cardNum === 3 ? "text-zinc-700" : "text-zinc-400"
          }`}
        >
          {offer.description}
        </p>
        <div className="flex flex-col gap-2">
          {offer.features.map((feature: any, id: any) => (
            <div
              className={`flex items-center ${
                cardNum === 3 ? "text-zinc-900" : "text-zinc-100"
              } gap-3`}
              key={id}
            >
              <IoCheckmarkCircleOutline size={20} /> {feature}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center text-center">
        <Button
          className="w-full"
          variant={cardNum === 3 ? "default" : "outline"}
        >
          Order now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OfferCard;
