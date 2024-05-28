import clsx from "clsx";
import Link from "next/link";

export const MenuFilter = ({ currentFilter, filters }) => {
  return (
    <aside className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <MenuItem isActive={currentFilter.length === 0} filter="" key="all">
        all
      </MenuItem>

      {filters.map((filter) => {
        return (
          <MenuItem
            isActive={filter === currentFilter}
            filter={filter}
            key={filter}
          >
            {filter}
          </MenuItem>
        );
      })}
    </aside>
  );
};

const MenuItem = ({ filter, children, isActive }) => {
  return (
    <Link
      href={`?filter=${filter}`}
      className={clsx(
        "rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200",
        {
          "font-bold": isActive,
        }
      )}
      key={filter}
    >
      {children}
    </Link>
  );
};
