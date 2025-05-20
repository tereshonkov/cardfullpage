

export default function Slider() {
    return (
        <section className="flex flex-col gap-8 p-4 rounded-2xl border border-[#E5E7EB] lg:min-w-[540px] lg:w-1/2  lg:items-center lg:relative">
            <div className="w-full h-[268px] xl:min-w-[540px] xl:h-[611px] overflow-hidden relative rounded-2xl">
                <img className="w-full h-full object-cover" src="/ProductFullPage/photo1.jpg" />
                <div className="flex justify-center items-center absolute bottom-[13px] left-[16px] w-[42px] h-[42px] bg-white rounded-lg cursor-pointer">
                    <img src="/ProductFullPage/circle.svg" alt="circle" />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="wrapper-image flex w-full gap-2 lg:justify-center">
                    <div className="item h-[62px] rounded-2xl lg:w-[100px] lg:h-[96px] overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src="/ProductFullPage/photo1.jpg"
                            alt="photo"
                        />
                    </div>
                    <div className="item h-[62px] rounded-2xl lg:w-[100px] lg:h-[96px] overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src="/ProductFullPage/photo2.jpg"
                            alt="photo"
                        />
                    </div>
                    <div className="item h-[62px] rounded-2xl lg:w-[100px] lg:h-[96px] overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src="/ProductFullPage/photo3.jpg"
                            alt="photo"
                        />
                    </div>
                    <div className="item h-[62px] rounded-2xl lg:w-[100px] lg:h-[96px] overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src="/ProductFullPage/photo4.jpg"
                            alt="photo"
                        />
                    </div>
                    <div className="item h-[62px] rounded-2xl lg:w-[100px] lg:h-[96px] overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src="/ProductFullPage/photo5.jpg"
                            alt="photo"
                        />
                    </div>
                </div>
                <div className="buttons w-full flex justify-center gap-3 lg:w-[98%] lg:justify-between lg:absolute lg:bottom-10 lg:left-2">
                    <button className="w-[48px] h-[48px] rounded-full border border-[#E5E7EB] flex justify-center items-center">
                        <img
                            className="w-[28px] h-[28px]"
                            src="/ProductFullPage/left.jpg"
                            alt="arrow-left"
                        />
                    </button>
                    <button className="w-[48px] h-[48px] rounded-full border border-[#E5E7EB] flex justify-center items-center">
                        <img
                            className="w-[28px] h-[28px]"
                            src="/ProductFullPage/right.jpg"
                            alt="arrow-right"
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}
