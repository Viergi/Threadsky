import React from "react";
import Category from "./Category";

export default function CategoryList({ threads }) {
  const categories = threads.map((thread) => thread.category);
  const uniqueCategories = [...new Set(categories)];

  return (
    <div className="p-4 flex flex-col gap-2 bg-background-light md:rounded-xl lg:order-2 lg:h-fit lg:sticky lg:top-18">
      <p className="font-semibold lg:text-xl lg:border-b lg:p-1">
        Kategori Populer
      </p>
      <div className="flex flex-wrap gap-2">
        {uniqueCategories.map((category, index) => {
          return <Category category={category} key={index} />;
        })}
      </div>
    </div>
  );
}
