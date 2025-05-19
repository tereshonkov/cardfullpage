

export default function Product() {
  return (
    <div className="flex flex-col gap-[32px] border border-[#E5E7EB] rounded-[1rem] p-[1rem] w-[358px] lg:min-w-[956px] lg:w-[65%] lg:justify-between 2xl:w-full">
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
        <div>
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
      </div>
      <div className="flex flex-col gap-[12px]">
        <h2 className="text-[#263A6B] text-xl font-bold">Package Contents:</h2>
        <div>
          <p className="text-[#1E2939]">
            1 × Gray Couch </p>
          <p className="text-[#1E2939]">5 × Cushions</p>
          <p className="text-[#1E2939]">1 × User manual (assembly & care
            instructions)</p>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h2 className="text-[#263A6B] text-xl font-bold">Shipping & Returns:</h2>
        <div>
          <p className="text-[#1E2939]">Delivery: Within 2–5 business days inside Egypt.
          </p>
          <p className="text-[#1E2939]">Returns: Within 14 days of delivery if you're not satisfied.</p>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h2 className="text-[#263A6B] text-xl font-bold">Price & Current Offer:</h2>
        <div>
          <p className="text-[#1E2939]">Price: $ 3,200</p>
          <p className="text-[#1E2939]">Offer: 10% discount for a limited time + Free delivery within 3 days.</p>
        </div>
      </div>
    </div>
  )
}
