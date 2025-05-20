

export default function Adress() {
    return (
        <div className="border border-[#E5E7EB] rounded-[1rem] p-[1rem] w-full flex flex-col gap-[21px]">
            <div className="flex flex-col gap-[12px]">
                <div className="flex gap-[4px]">
                    <img className="text-[#263A6B]" src="/ProductFullPage/location.svg" alt="location" />
                    <h2 className="text-[#263A6B]">Address</h2>
                </div>
                <div>
                    <p className="text-[#101828]">Kyivska St, 77, Zhytomyr, Zhytomyr Oblast, 10001</p>
                </div>
            </div>
            <div className="w-full max-h-[182px] rounded-[1rem] overflow-hidden flex justify-center items-center">
                <img src="/ProductFullPage/map.jpg" alt="map" />
            </div>
        </div>
    )
}
