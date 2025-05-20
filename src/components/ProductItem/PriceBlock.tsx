

export default function Seller() {
    return (
        <section className="flex flex-col gap-6 p-4 rounded-xl border border-[#E5E7EB] w-full lg:min-w-[640px] lg:w-1/2 lg:justify-between">
            <div className="flex justify-between items-center lg:justify-start lg:gap-3">
                <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
                    <img
                        className="w-full h-full object-fill"
                        src="/ProductFullPage/avatar.jpg"
                        alt="avatar"
                    />
                </div>
                <div className="lg:flex-1">
                    <h2 className="text-[#304A89]">Jacob Jones</h2>
                    <div className="flex items-center gap-1 w-full">
                        <img className="w-[1rem] h-[1rem]" src="/ProductFullPage/Star.jpg" alt="star" />
                        <span className="text-[#304A89]">4.8</span>
                    </div>
                </div>
                <div className="flex gap-[4px]">
                    <div className="w-[44px] h-[44px] border border-[#E5E7EB] rounded-lg flex justify-center items-center">
                        <img className="text-[#304A89]" src="/ProductFullPage/heart.jpg" alt="heart" />
                    </div>
                    <div className="w-[44px] h-[44px] border border-[#E5E7EB] rounded-lg flex justify-center items-center">
                        <img className="text-[#304A89]" src="/ProductFullPage/share.jpg" alt="share" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-[#1E2939]">
                    Gray couch with cushios
                </h2>
                <div className="flex w-full gap-7">
                    <div className="flex gap-1">
                        <div className="flex gap-1">
                            <img
                                className="w-[24px] h-[24px]"
                                src="/ProductFullPage/Star.jpg"
                                alt="star"
                            />
                            <img
                                className="w-[24px] h-[24px]"
                                src="/ProductFullPage/Star.jpg"
                                alt="star"
                            />
                            <img
                                className="w-[24px] h-[24px]"
                                src="/ProductFullPage/Star.jpg"
                                alt="star"
                            />
                            <img
                                className="w-[24px] h-[24px]"
                                src="/ProductFullPage/Star.jpg"
                                alt="star"
                            />
                            <img
                                className="w-[24px] h-[24px]"
                                src="/ProductFullPage/Star50.jpg"
                                alt="star 50%"
                            />
                        </div>
                        <span className="text-[#304A89]">4.8</span>
                    </div>
                    <div className="flex text-[#304A89] cursor-pointer">
                        <span>See review</span>
                        <img src="/ProductFullPage/arrow.svg" alt="arrow" />
                    </div>
                </div>
                <div className="flex flex-col gap-7">
                    <div>
                        <p>
                            Add a touch of modern luxury to your living space with this
                            beautifully designed gray couch, crafted to provide maximum
                            comfort.
                        </p>
                        <p>
                            Made from high-quality materials, it features soft gray
                            upholstery that blends seamlessly with various decor styles,
                            making it a perfect addition to any room.
                        </p>
                    </div>
                    <p>
                        The couch comes with a set of cozy cushions that add a warm,
                        inviting feel while offering ideal support for sitting or
                        lounging.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-bold">Color :</span>
                        <div className="flex gap-2">
                            <div className="rounded-full bg-[#DEDDD9] w-[38px] h-[38px] cursor-pointer"></div>
                            <div className="rounded-full bg-[#7E624D] w-[38px] h-[38px] cursor-pointer"></div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className="text-sm font-bold">Size : </span>
                        <div className="flex gap-2">
                            <div className="flex justify-center items-center border border-[#E5E7EB] rounded-lg py-2 px-4">
                                <span className="text-sm font-bold">1.5 M</span>
                            </div>
                            <div className="flex justify-center items-center border border-[#E5E7EB] rounded-lg py-2 px-4">
                                <span className="text-sm font-bold">2.5 M</span>
                            </div>
                            <div className="flex justify-center items-center border border-[#E5E7EB] rounded-lg py-2 px-4">
                                <span className="text-sm font-bold">3 M</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className="text-sm font-bold">Quantity : </span>
                        <div className="flex gap-6 border border-[#E5E7EB] py-2 px-2 rounded-lg">
                            <button className="text-sm font-bold">-</button>
                            <span className="text-sm font-bold">1</span>
                            <button className="text-sm font-bold">+</button>
                        </div>
                    </div>
                    <div className="flex gap-[12px]">
                        <div className="py-2 px-4 bg-[#F3F4F6] rounded-full text-[#304A89]">
                            Furniture
                        </div>
                        <div className="py-2 px-4 bg-[#F3F4F6] rounded-full text-[#304A89]">
                            Handmade
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-3">
                            <span className="text-[#304A89] text-2xl font-bold">
                                3200$
                            </span>
                            <span className="text-[#D1D5DC] line-through text-2xl">
                                3700$
                            </span>
                        </div>
                        <div className="lg:w-[276px] flex gap-3 cursor-pointer bg-[#263A6B] py-2 px-4 justify-center items-center rounded-lg">
                            {/*add component*/}
                            <button className="text-[#FFFFFF] cursor-pointer">Add to cart</button>
                            <img
                                className="text-[#FFFFFF]"
                                src="/ProductFullPage/icon-btn.svg"
                                alt="icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
