

export default function Seller() {
    return (
        <div className="border border-[#E5E7EB] rounded-[1rem] p-[1rem] flex flex-col gap-[24px]">
          <div className="flex flex-col justify-center items-center gap-[24px]">
            <h2 className="text-[#263A6B] text-xl font-bold">Seller</h2>
            <div className="flex flex-col justify-center items-center gap-[8px]">
              <img className="rounded-full w-[72px] h-[72px]" src="/ProductFullPage/avatar.jpg" alt="avatar" />
              <span className="text-[#263A6B] font-bold">Jacob Jones</span>
              <div className="flex justify-center items-center gap-[4px] w-full">
                <img className="w-[1rem] h-[1rem]" src="/ProductFullPage/Star.jpg" alt="star" />
                <span className="text-[#304A89]">4.8</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex justify-center gap-[16px] py-2 px-4 border border-[#E5E7EB] rounded-[0.5rem]">
              <img src="/ProductFullPage/watsup.svg" alt="watsup" />
              <span className="text-[#263A6B]">Contact him</span>
            </div>
            <div className="flex justify-center gap-[16px] py-2 px-4 border border-[#E5E7EB] rounded-[0.5rem]">
              <img src="/ProductFullPage/call.svg" alt="call" />
              <span className="text-[#263A6B]">+201273232035</span>
            </div>
          </div>
          <p className="text-[#263A6B] text-center underline">View all product</p> {/*link*/}
        </div>
    )
}
