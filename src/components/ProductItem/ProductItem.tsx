export default function ProductItem() {
  return (
    <section className="max-w-screen overflow-hidden">
      <div className="p-[1rem] flex flex-col gap-[0.5rem] w-screen overflow-hidden">
        {/* Slider */}
        <div className="flex flex-col gap-8 p-[1rem] rounded-[1rem] border border-[#E5E7EB]">
          <div className="w-full h-[268px] overflow-hidden relative rounded-[1rem]">
            <img className="w-full h-full object-cover" src="/photo1.jpg" />
            <div className="flex justify-center items-center absolute bottom-[13px] left-[16px] w-[42px] h-[42px] bg-white rounded-[8px] cursor-pointer">
              <img src="/circle.svg" alt="circle" />
            </div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <div className="wrapper-image flex w-full gap-[8px]">
              <div className="item h-[62px] rounded-[1rem] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/photo1.jpg"
                  alt="photo"
                />
              </div>
              <div className="item h-[62px] rounded-[1rem] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/photo2.jpg"
                  alt="photo"
                />
              </div>
              <div className="item h-[62px] rounded-[1rem] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/photo3.jpg"
                  alt="photo"
                />
              </div>
              <div className="item h-[62px] rounded-[1rem] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/photo4.jpg"
                  alt="photo"
                />
              </div>
              <div className="item h-[62px] rounded-[1rem] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/photo5.jpg"
                  alt="photo"
                />
              </div>
            </div>
            <div className="buttons w-full flex justify-center gap-[12px]">
              <button className="w-[48px] h-[48px] rounded-full border border-[#E5E7EB] flex justify-center items-center">
                <img
                  className="w-[28px] h-[28px]"
                  src="/left.jpg"
                  alt="arrow-left"
                />
              </button>
              <button className="w-[48px] h-[48px] rounded-full border border-[#E5E7EB] flex justify-center items-center">
                {" "}
                <img
                  className="w-[28px] h-[28px]"
                  src="/right.jpg"
                  alt="arrow-right"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Seller */}
        <div className="flex flex-col gap-[24px] p-[1rem] rounded-[1rem] border border-[#E5E7EB] w-full">
          <div className="flex justify-between items-center">
            <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-fill"
                src="/avatar.jpg"
                alt="avatar"
              />
            </div>
            <div>
              <h2 className="text-[#304A89]">Jacob Jones</h2>
              <div className="flex items-center gap-[4px] w-full">
                <img className="w-[1rem] h-[1rem]" src="/Star.jpg" alt="star" />
                <span className="text-[#304A89]">4.8</span>
              </div>
            </div>
            <div className="flex gap-[4px]">
              <div className="w-[44px] h-[44px] border border-[#E5E7EB] rounded-[8px] flex justify-center items-center">
                <img className="text-[#304A89]" src="/heart.jpg" alt="heart" />
              </div>
              <div className="w-[44px] h-[44px] border border-[#E5E7EB] rounded-[8px] flex justify-center items-center">
                <img className="text-[#304A89]" src="/share.jpg" alt="share" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <h2 className="text-2xl font-bold text-[#1E2939]">
              Gray couch with cushios
            </h2>
            <div className="flex w-full gap-[24px]">
              <div className="flex gap-[4px]">
                <div className="flex gap-[4px]">
                  <img
                    className="w-[24px] h-[24px]"
                    src="/Star.jpg"
                    alt="star"
                  />
                  <img
                    className="w-[24px] h-[24px]"
                    src="/Star.jpg"
                    alt="star"
                  />
                  <img
                    className="w-[24px] h-[24px]"
                    src="/Star.jpg"
                    alt="star"
                  />
                  <img
                    className="w-[24px] h-[24px]"
                    src="/Star.jpg"
                    alt="star"
                  />
                  <img
                    className="w-[24px] h-[24px]"
                    src="/Star50.jpg"
                    alt="star 50%"
                  />
                </div>
                <span className="text-[#304A89]">4.8</span>
              </div>
              <div className="flex text-[#304A89] cursor-pointer">
                <span>See review</span>
                <img src="/arrow.svg" alt="arrow" />
              </div>
            </div>
            <div className="flex flex-col gap-[26px]">
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
              <div className="flex items-center gap-[1rem]">
                <span className="text-sm font-bold">Color :</span>
                <div className="flex gap-[0.5rem]">
                  <div className="rounded-full bg-[#DEDDD9] w-[38px] h-[38px] cursor-pointer"></div>
                  <div className="rounded-full bg-[#7E624D] w-[38px] h-[38px] cursor-pointer"></div>
                </div>
              </div>
              <div className="flex gap-[1rem] items-center">
                <span className="text-sm font-bold">Size : </span>
                <div className="flex gap-[0.5rem]">
                  <div className="flex justify-center items-center border border-[#E5E7EB] rounded-[0.5rem] py-2 px-4">
                    <span className="text-sm font-bold">1.5 M</span>
                  </div>
                  <div className="flex justify-center items-center border border-[#E5E7EB] rounded-[0.5rem] py-2 px-4">
                    <span className="text-sm font-bold">2.5 M</span>
                  </div>
                  <div className="flex justify-center items-center border border-[#E5E7EB] rounded-[0.5rem] py-2 px-4">
                    <span className="text-sm font-bold">3 M</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-[1rem] items-center">
                <span className="text-sm font-bold">Quantity : </span>
                <div className="flex gap-[24px] border border-[#E5E7EB] py-2 px-[5px] rounded-[0.5rem]">
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
              <div className="flex flex-col gap-[32px]">
                <div className="flex gap-[12px]">
                  <span className="text-[#304A89] text-2xl font-bold">
                    3200$
                  </span>
                  <span className="text-[#D1D5DC] line-through text-2xl">
                    3700$
                  </span>
                </div>
                <div className="flex gap-[12px] cursor-pointer bg-[#263A6B] py-2 px-4 justify-center items-center rounded-[8px]">
                  {" "}
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
        </div>
      </div>

      {/* Block Two */}
      <div className="flex flex-col p-[1rem] w-screen gap-[0.5rem] overflow-hidden">
      <div className="flex flex-col gap-[32px] border border-[#E5E7EB] rounded-[1rem] p-[1rem] w-full">
        <div className="flex flex-col gap-[12px]">
          <h2 className="text-[#263A6B] text-xl font-bold">Product Overview:</h2>
          <p className="text-[#1E2939]">
            Enjoy both comfort and elegance with this stylish gray couch,
            designed to suit modern and classic décor alike. Made from
            high-quality materials, it comes with comfortable cushions that add
            both aesthetic and functional value to any living space.
          </p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <h2 className="text-[#263A6B] text-xl font-bold">Key Features:</h2>
          <p className="text-[#1E2939]">
            Premium Materials: Soft, durable fabric that’s resistant to stains
            and wear. </p>
          <p className="text-[#1E2939]">Ultimate Comfort: Ergonomic design provides long-lasting
          seating comfort.</p>
          <p className="text-[#1E2939]">Easy to Clean: Removable and washable cushions.</p>
          <p className="text-[#1E2939]">Fits Any Space: Medium-sized design ideal for apartments and open
          spaces.</p>
          <p className="text-[#1E2939]">Neutral Gray Color: Matches all furniture styles and color
          schemes.</p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <h2 className="text-[#263A6B] text-xl font-bold">Package Contents:</h2>
          <p className="text-[#1E2939]">
            1 × Gray Couch </p>
          <p className="text-[#1E2939]">5 × Cushions</p>
          <p className="text-[#1E2939]">1 × User manual (assembly & care
            instructions)</p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <h2 className="text-[#263A6B] text-xl font-bold">Shipping & Returns:</h2>
          <p className="text-[#1E2939]">Delivery: Within 2–5 business days inside Egypt.
          </p>
          <p className="text-[#1E2939]">Returns: Within 14 days of delivery if you're not satisfied.</p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <h2 className="text-[#263A6B] text-xl font-bold">Price & Current Offer:</h2>
          <p className="text-[#1E2939]">Price: $ 3,200</p>
          <p className="text-[#1E2939]">Offer: 10% discount for a limited time + Free delivery within 3 days.</p>
        </div>
      </div>

      {/* Seller */}
      <div className="border border-[#E5E7EB] rounded-[1rem] p-[1rem] w-full flex flex-col gap-[24px]">
            <div className="flex flex-col justify-center items-center gap-[24px]">
              <h2 className="text-[#263A6B] text-xl font-bold">Seller</h2>
            <div className="flex flex-col justify-center items-center gap-[8px]">
            <img className="rounded-full w-[72px] h-[72px]" src="/avatar.jpg" alt="avatar" />
              <span className="text-[#263A6B] font-bold">Jacob Jones</span>
              <div className="flex justify-center items-center gap-[4px] w-full">
                <img className="w-[1rem] h-[1rem]" src="/Star.jpg" alt="star" />
                <span className="text-[#304A89]">4.8</span>
            </div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
            <div className="flex justify-center gap-[16px] py-2 px-4 border border-[#E5E7EB] rounded-[0.5rem]">
              <img src="/watsup.svg" alt="watsup" />
              <span className="text-[#263A6B]">Contact him</span>
            </div>
            <div className="flex justify-center gap-[16px] py-2 px-4 border border-[#E5E7EB] rounded-[0.5rem]">
              <img src="/call.svg" alt="call" />
              <span className="text-[#263A6B]">+201273232035</span>
            </div>
            </div>
            <p className="text-[#263A6B] text-center underline">View all product</p> {/*link*/}
      </div>

      </div>
    </section>
  );
}
