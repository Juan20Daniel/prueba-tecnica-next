import { Title } from "@/components/ui";
import { Navbar } from '../../components/ui/navbar/Navbar';
import { HomeLink } from "@/components/ui/navLinks/HomeLink";

export default function Home() {
  return (
    <div className="relative w-full h-screen min-w-[300px] overflow-auto">
      <Navbar>
        <HomeLink />
      </Navbar>
        <div className='sticky top-[0px] h-[160px] px-4 flex items-end justify-center z-2 backdrop-blur-xs sm:top-[20px]'>
          <div className='w-full max-w-6xl flex flex-col items-start pb-2'>
            <Title value='Todos los productos del carrito' />
          </div>
        </div>
      {/* <Products /> */}
    </div>
  );
}