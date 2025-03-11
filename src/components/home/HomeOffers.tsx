import ProductsContainer from "../ui/ProductsContainer";
import SectionTitle from "../ui/SectionTitle";

export default function HomeOffers() {
    const productsData = [
        {
            id: 1,
            productName: 'Product 1',
            price: 19.99,
            imgUrl: 'https://fakeimg.pl/400x300/b8b8b8/1f0101?text=Product+Image+400x300&font_size=35',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 4.5,
            reviews: 123,
            category: 'Electronics',
        },
        {
            id: 2,
            productName: 'Product 2',
            price: 29.99,
            imgUrl: 'https://fakeimg.pl/400x300/b8b8b8/1f0101?text=Product+Image+400x300&font_size=35',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 4.0,
            reviews: 100,
            category: 'Clothing',
        },
        {
            id: 3,
            productName: 'Product 3',
            price: 9.99,
            imgUrl: 'https://fakeimg.pl/400x300/b8b8b8/1f0101?text=Product+Image+400x300&font_size=35',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 4.7,
            reviews: 150,
            category: 'Electronics',
        },
        {
            id: 4,
            productName: 'Product 4',
            price: 39.99,
            imgUrl: 'https://fakeimg.pl/400x300/b8b8b8/1f0101?text=Product+Image+400x300&font_size=35',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 4.2,
            reviews: 180,
            category: 'Clothing',
        }
    ];

    return (
        <section className="bg-[#fffefe] py-16">
            <div className="flex flex-col gap-10 ">
                <SectionTitle title="Hot Offers" />
                <ProductsContainer products={productsData} />
            </div>
        </section>
    );
}
