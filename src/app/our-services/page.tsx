import HeroSection from "./components/HeroSection";

interface Product {
  
  title: string;
  link: string;
  thumbnail: string;

}
const page = () => {
  const products = [
    {
      title: "Product 1",
      link: "/product-1",
      thumbnail: "/images/event1.jpg",
    },
    {
      title: "Product 2",
      link: "/product-2",
      thumbnail: "/images/event2.jpg",
    },
    {
      title: "Product 3",
      link: "/product-3",
      thumbnail: "/images/event3.jpg",
    },
    {
      title: "Product 1",
      link: "/product-1",
      thumbnail: "/images/event1.jpg",
    },
    {
      title: "Product 2",
      link: "/product-2",
      thumbnail: "/images/event2.jpg",
    },
    {
      title: "Product 3",
      link: "/product-3",
      thumbnail: "/images/event3.jpg",
    }, {
      title: "Product 1",
      link: "/product-1",
      thumbnail: "/images/event1.jpg",
    },
    {
      title: "Product 2",
      link: "/product-2",
      thumbnail: "/images/event2.jpg",
    },
    {
      title: "Product 3",
      link: "/product-3",
      thumbnail: "/images/event3.jpg",
    }, {
      title: "Product 1",
      link: "/product-1",
      thumbnail: "/images/event1.jpg",
    },
    {
      title: "Product 2",
      link: "/product-2",
      thumbnail: "/images/event2.jpg",
    },
    {
      title: "Product 3",
      link: "/product-3",
      thumbnail: "/images/event3.jpg",
    },
    {
      title: "Product 1",
      link: "/product-1",
      thumbnail: "/images/event1.jpg",
    },
    {
      title: "Product 2",
      link: "/product-2",
      thumbnail: "/images/event2.jpg",
    },
    {
      title: "Product 3",
      link: "/product-3",
      thumbnail: "/images/event3.jpg",
    },
    


  ] as Array<Product>
  return (
    <div>
      <HeroSection products={products} />
    </div>
  )
}
export default page