import { MenuFilter } from "../src/Menu/MenuFilter";
import { Header } from "../src/Header/Header";
import { REACT_CARDS } from "../src/react_card";
import { Cards } from "@/src/Cards/Cards";

export default function Home({ searchParams }) {
  const currentFilter = searchParams.filter;
  const filters = [...new Set(REACT_CARDS.map((card) => card.category))];

  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 flex flex-1 gap-4 px-2 py-2 overflow-auto max-lg:flex-col">
        <MenuFilter currentFilter={currentFilter} filters={filters} />
        <div className="size-full overflow-auto">
          <Cards currentFilter={currentFilter} cards={REACT_CARDS} />
        </div>
      </div>
    </main>
  );
}
