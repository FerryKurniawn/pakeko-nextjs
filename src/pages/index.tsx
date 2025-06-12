import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async (): Promise<void> => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />

      <Footer />
    </div>
  );
};

export default Home;
