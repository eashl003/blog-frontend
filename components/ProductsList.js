import NextImage from "./Image"
import Link from "next/link"
import CategoryButtons from "../components/CategoryButtons"

const ProductsList = ({ products, categories }) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        <CategoryButtons categories={categories} />
        <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 mt-8">
          {products.map((_product) => (
            <div
              key={_product.id}
              className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
            >
              <Link href={`/products/${_product.slug}`} passHref>
                <div className="w-full bg-white">
                  <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
                    <NextImage media={_product.image} />
                  </div>
                </div>
                <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
                  <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                    {_product.title} sticker
                  </h4>
                  <div className="mt-1 text-sm text-gray-700">
                    {_product.description}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsList
