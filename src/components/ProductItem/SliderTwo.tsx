

export default function SliderTwo() {
  return (
          <div className="flex flex-col gap-[24px] p-[1rem] rounded-[1rem] border border-[#E5E7EB] w-full">
        <h2 className="text-[#263A6B] font-bold text-2xl">More from Furniture</h2>
        <div className="flex gap-[24px]  overflow-hidden">
          <div className="flex flex-col gap-[12px] w-[256px] p-3 rounded-xl">
            <div className="relative w-full h-[224px] overflow-hidden rounded-xl">
              <img className="w-full h-full object-fill" src="/photo3.jpg" alt="photo" />
              <div className="absolute top-3 right-3 border border-[#E5E7EB] rounded-[8px] w-[40px] h-[40px] bg-[#FFF] flex justify-center items-center cursor-pointer">
                <img className="" src="/heart.jpg" alt="heart" />
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <span className="text-[#6A7282]">Furniture</span>
              <p>Add a touch of modern luxury to your living space with this beautifully designed gray couch</p>
              <span className="text-[#263A6B] font-bold">$80,99</span>
            </div>

            <div className="flex gap-12 cursor-pointer bg-[#263A6B] py-2 px-4 justify-center items-center rounded-xl">
              {/*add component*/}
              <button className="text-[#FFFFFF]">Add to cart</button>
              <img
                className="text-[#FFFFFF]"
                src="/icon-btn.svg"
                alt="icon"
              />
            </div>

          </div>
        </div>
      </div>
  )
}
