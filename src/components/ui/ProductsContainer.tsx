import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";
function shuffleProducts(products) {
  return products.sort(() => Math.random() - 0.5);
}
export default function ProductsContainer({ products, link }) {
  let productstoDisplay;
  if (products?.length > 10) {
    productstoDisplay = shuffleProducts(products);
    productstoDisplay = productstoDisplay.slice(0, 8);
  } else productstoDisplay = products;


  // console.log(productstoDisplay)
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-6">
        {productstoDisplay.map((product, index) => (
          <li key={index} className="w-full">
            <ProductCard data={product} />
          </li>
        ))}

        {/* More Button */}
        <li className="w-full flex justify-start items-center ">
          <div className="w-full rounded-lg px-4 py-2 bg-sky-700 hover:bg-sky-600 shadow-sm hover:shadow-xl duration-500">
            <Link href={link || "/products"} className="w-full text-center">
              <button className="w-full text-white font-semibold transition cursor-pointer">
                More
              </button>
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
}
