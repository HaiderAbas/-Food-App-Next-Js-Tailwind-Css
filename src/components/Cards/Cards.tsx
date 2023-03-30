import { CardsData } from "@/data/data";
import React, { useState } from "react";

const Cards = () => {
  const [cards, setCards] = useState(CardsData);
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {cards.map((item) => (
        <div key={item.id} className="relative rounded-xl">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
            <p className="font-bold text-2xl py-2 px-2">
              {item.name}
            </p>
            <p className="px-2">{item.title}</p>
            <button className="absolute bottom-4 mx-2 bg-white border-white text-black">
              {item.order}
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={item.image}
            alt="/"
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
