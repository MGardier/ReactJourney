import clsx from "clsx";
import { ReactSvg } from "../Header/ReactSvg";
import { BookOpenText, PlusCircle } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "../Header/Button";

export const Cards = ({ currentFilter, cards }) => {
  const filteredCards =
    currentFilter.length === 0
      ? cards
      : cards.filter((card) => card.category === currentFilter);
  return (
    <div className="grid h-fit w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredCards.map((filteredCard) => {
        return (
          <Card
            key={filteredCard.name}
            currentFilter={currentFilter}
            card={filteredCard}
          />
        );
      })}
    </div>
  );
};

const Card = ({ currentFilter, card }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 rounded-lg border p-4 shadow 
      transition-colors hover:border-gray-300 hover:bg-gray-100`}
    >
      <div className="flex w-full items-center gap-2">
        <ReactSvg size="24" />
        <p className="text-base font-bold"> React</p>
      </div>
      <p className="line-clamp-1 w-full overflow-hidden text-ellipsis text-center text-lg font-extrabold">
        {card.name}
      </p>
      <div className="flex w-full items-center gap-2">
        {console.log({ filt: currentFilter, 1: 1 })}
        <p
          className={clsx("line-clamp-1 text-start text-xs text-gray-400 ", {
            invisible: currentFilter.length > 0,
          })}
        >
          {card.category}
        </p>
        <Link
          className={buttonVariants({ variant: "secondary" })}
          key={card.name}
          href={card.url}
        >
          <BookOpenText size={16} />
        </Link>
        <Button variant="secondary">
          <PlusCircle size={16} />
        </Button>
      </div>
    </div>
  );
};
