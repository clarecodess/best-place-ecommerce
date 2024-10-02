import CategoryList from "@/components/CategoryList"
import Offers from "@/components/Offers"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"


const HomePage = () => {
  return (
    <div className="">
      <Slider />

      {/* <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">Offers</h1>
        <Offers />
      </div> */}

      <div className="mt-10 bg-gradient-to-b from-gray-50 via-white to-gray-100 py-12 rounded-lg shadow-md">
        <Offers />
      </div>

      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Latest Products</h1>
        <ProductList />
      </div>

      {/* <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Latest Products</h1>
        <ProductList />
      </div> */}
    </div>
  );
}

export default HomePage