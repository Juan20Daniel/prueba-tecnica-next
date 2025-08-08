import { Navbar } from '../../components/ui/navbar/Navbar';
import { HomeLink } from "@/components/ui/navLinks/HomeLink";
import { ProductsCart } from "@/components/products";

export default function Home() {
  return (
    <div className="relative w-full h-[calc(100vh-60px)] mt-[60px] min-w-[300px] overflow-auto">
      <Navbar>
        <HomeLink />
      </Navbar> 
      <ProductsCart />
    </div>
  );
}