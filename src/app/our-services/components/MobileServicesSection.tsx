import Image from "next/image";
import { Product } from "../page";
  
  interface MobileServicesSectionProps {
    products: Product[];
    bgColor?: string;
    title?: string;
  }

const MobileServicesSection = ({products, bgColor = 'bg-secondBg', title} : MobileServicesSectionProps) => {
  return (
    <div className={`${bgColor} py-8`}>
    <div className="max-w-4xl mx-auto px-4">
      {title ? <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">{title}</h2> : ''}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md shadow-myPurple-600 cursor-pointer hover:scale-105 ransform transition-transform  overflow-hidden">
            <Image src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover" width={500} height={400} />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600">Description of {product.title}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
export default MobileServicesSection