import { FilterProducts, Products } from "@/components/products";
import { CartLink, Navbar, Title } from "@/components/ui";

export default function Home() {
  return (
    <div className="relative w-full h-screen min-w-[300px] overflow-auto">
      <Navbar>
        <CartLink />
      </Navbar>
        <div className='sticky top-[0px] h-[200px] px-4 flex items-end justify-center z-2 backdrop-blur-xs sm:top-[20px]'>
          <div className='w-full max-w-6xl flex flex-col items-start pb-2'>
            <Title value='Todos los productos' />
            <FilterProducts />
          </div>
        </div>
      <Products />
    </div>
  );
}