import React from "react";

const Categories = () => {
  return (
    <div>
      <h2 className="text-center md:text-2xl lg:text-4xl font-semibold">
        Categories
      </h2>
      <div className="flex flex-wrap justify-between gap-10">
        <CategoriesCard
          category={{
            name: "Shirts & Tshirts",
            image: "/images/electronics.jpg",
          }}
        />

        <CategoriesCard
          category={{
            name: "Tops & Buttoms",
            image: "/images/electronics.jpg",
          }}
        />
        <CategoriesCard
          category={{
            name: "Oversized Cargos",
            image: "/images/electronics.jpg",
          }}
        />
        <CategoriesCard
          category={{
            name: "Jeans",
            image: "/images/electronics.jpg",
          }}
        />
        <CategoriesCard
          category={{
            name: "One Piece",
            image: "/images/electronics.jpg",
          }}
        />

        <CategoriesCard
          category={{ name: "Jewelery", image: "/images/jewelery.jpg" }}
        />
      </div>
    </div>
  );
};

export default Categories;

function CategoriesCard({
  category,
}: {
  category: { name: string; image: string };
}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <img src={category.image} alt={category.name} className="w-20 h-20" />
      <p className="text-sm font-semibold">{category.name}</p>
    </div>
  );
}
