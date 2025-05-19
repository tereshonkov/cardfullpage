import Seller from "./Seller";
import PriceBlock from "./PriceBlock";
import Slider from "./Slider";
import Adress from "./Adress";
import Reviews from "./Reviews";
import SliderTwo from "./SliderTwo";
import Product from "./Product";

export default function ProductItem() {
  return (
    <section className="max-w-screen overflow-hidden p-4 flex flex-col gap-4">
      <div className="p-1 flex flex-col gap-2 min-w-[358px] overflow-hidden lg:flex-row lg:gap-3 lg:justify-center lg:rounded-2xl lg:border lg:border-[#E5E7EB] lg:p-4">
        <Slider />
        <PriceBlock />
      </div>


      <div className="flex flex-col max-w-screen gap-2 overflow-hidden lg:flex-row lg:gap-4 ">
        <Product />

        <div className="flex flex-col max-w-[358px] gap-4 lg:w-[31%] lg:max-w-[35%]">
          <Seller />
          <Adress />
        </div>
      </div>

      <Reviews />
      <SliderTwo />
    </section>
  );
}
