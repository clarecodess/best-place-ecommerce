import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>

      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Short Product description: Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex gap-4 items-center">
          <h3 className="text-xl text-gray-500 line-through">KES 4500</h3>
          <h2 className="font-medium text-2xl">KES 3500</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">PRODUCT INFO</h4>
          <p className="">Detailed product description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem sed laudantium, nobis cum quas repudiandae! Sed reiciendis ea, deserunt accusamus consequuntur quo aperiam in consectetur debitis itaque, eaque asperiores!</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">REFUND & RETURN POLICY</h4>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem sed laudantium, nobis cum quas repudiandae! Sed reiciendis ea, deserunt accusamus consequuntur quo aperiam in consectetur debitis itaque, eaque asperiores!</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">DELIVERY INFO</h4>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem sed laudantium, nobis cum quas repudiandae! Sed reiciendis ea, deserunt accusamus consequuntur quo aperiam in consectetur debitis itaque, eaque asperiores!</p>
        </div>
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        <h1 className="text-2xl">Customer Reviews</h1>
      </div>
    </div>
  );
};

export default SinglePage;
