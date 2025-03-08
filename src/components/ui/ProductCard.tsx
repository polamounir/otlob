import Rating from "@/components/shared/Rating";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";
export default function ProductCard({ data }) {
  const {
    id,
    productName,
    imgUrl,
    category,
    price,
    discount,
    shortDesc,
    description,
    reviews,
    avgRating,
  } = data;

  const priceAfterDiscount = price - (price * discount) / 100;
  return (
    <>
      <Link href="#">
        <div className="p-4 pt-0 border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition text-center bg-white relative overflow-hidden">
          {discount && (
            <div
              className={`absolute top-6 start-6 -translate-1/2 px-20 py-1 -rotate-45 text-xs bg-sky-800 font-bold text-white`}
            >
              <span>{discount}% </span>
            </div>
          )}
          <div className=" flex justify-center items-center">
            <div className="px-5">
              <Image
                src={imgUrl}
                alt={productName}
                data={imgUrl}
                // layout="responsive"
                placeholder="blur"
                // loading="lazy"
                width={400}
                height={400}
                className="aspect-square"

              />
            </div>
          </div>
          <div className="pt-5 pb-2 flex flex-col gap-2">
            <div>
              <h3 className="font-bold text-md">{productName}</h3>
              <p className="text-gray-600 text-sm">{category}</p>
            </div>
            {discount && (
              <div className="ms-2 flex items-center gap-2">
                <span className="text-gray-400 text-sm font-semibold line-through">
                  {price} $
                </span>
                <span className="text-black text-md font-semibold">
                  {priceAfterDiscount} $
                </span>
              </div>
            )}
            {!discount && (
              <div className="ms-2 flex items-center gap-2">
                <span className="text-black text-md font-bold">
                  {price} $
                </span>
              </div>
            )}
            <p className="text-gray-600 text-xs">{shortDesc}</p>
            <div className="flex justify-between items-center gap-3 mt-2">
              <Rating rating={avgRating} />
              <div className="flex items-center justify-center p-2 aspect-square rounded-full bg-sky-700 hover:bg-sky-600 duration-300 cursor-pointer">
                <button className="text-white text-xl font-bold">
                  <FiPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
