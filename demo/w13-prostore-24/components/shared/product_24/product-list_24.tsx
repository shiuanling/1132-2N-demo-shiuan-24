import ProductCard_24 from "./product-card_24";
const ProductList_24 = ({ data, title }: { data: any; title?: string }) => {
    // console.log('data',data);
    return (
        <div className='my-10'>
            <h2 className="h2-bold mb-4 class">{title}</h2>
            {data.length > 0 ? (
                <div className='grid grid-clos-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {data.map((product:any) => (
                       <ProductCard_24 key={product.slug} product={product} />
                    ))}
                </div>
            ) : (
                <div>
                    <p>No product found</p>
                </div>
            )}
        </div>
    );
};

export default ProductList_24;
