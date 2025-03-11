
interface ProductData {
    id: number;
    productName: string;
    imgUrl: string;
    category: string;
    price: number;
    description: string;
    rating: number;
    reviews: number;
}
interface ProductsProps {
    products: ProductData[];
}
export default function ProductsContainer({ products }: ProductsProps) {
    return (
        <>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 ">
                {products?.map((product) => (
                    <li
                        key={product.id}
                        className="bg-white rounded shadow-md overflow-hidden duration-300 hover:shadow-xl"
                    >
                        <img
                            src={product.imgUrl}
                            alt={product.productName}
                            loading="lazy"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{product.productName}</h3>
                            <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                            <div className="mt-3 flex items-center justify-between">
                                <span className="text-yellow-500 font-semibold">{`⭐ ${product.rating}`}</span>
                                <span className="text-gray-500 text-sm">{`${product.reviews} reviews`}</span>
                            </div>
                            <button className="mt-4 w-full bg-sky-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-sky-600 transition duration-300">
                                View Details
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}
