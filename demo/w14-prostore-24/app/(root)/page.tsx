import sampleData from "@/db/sample-data"
import ProductList_24 from "@/components/shared/product_24/product-list_24";
import { getLatestProducts_24 } from "@/lib/actions/product.actions_24";

// const delay = (ms) => new Promise((resolve) => {
//   setTimeout(resolve, ms);

// });

const HomePage_24 = async () => {
  // await delay(5000)
  // console.log('sampleData,', sampleData)
  const latestProducts = await getLatestProducts_24();
  return (
    // <div>home</div>
    <>
      <ProductList_24 data={sampleData.products} title='Newest Arrival' limit={4}/>
    </>
  );
};

export default HomePage_24
