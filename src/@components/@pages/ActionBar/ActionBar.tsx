import Image from "next/image";
import AU from "@/@asstes/au.svg";
import AF from "@/@asstes/af.svg";
import Icon from "@/@components/@core/Icon/Icon";
import TradeInput from "@/@components/@pages/TradeInput/TradeInput";

export default function ActionBar() {
  return (
    <div className="bg-[#2b3040] p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            className="h-5 w-5 rounded-full"
            src={AU}
            alt=""
            height={100}
            width={100}
          />
          <Image
            className="h-5 w-5 rounded-full -ms-3"
            src={AF}
            alt=""
            height={100}
            width={100}
          />
        </div>
        <div>
          <p className="font-bold">AUD/JPY</p>
        </div>
        <div>
          <p className="font-bold text-[#6b6f7a]">85%</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <Icon name="history" size={15} className="text-[#2b89e3]" />
          <p className="text-[#2b89e3] text-[12px] font-bold uppercase">
            Pending Tread
          </p>
        </div>
        <div>
          <Icon name="toggle_off" className="text-[#2b89e3]" />
        </div>
      </div>
      <div>
        <TradeInput />
      </div>
      <div className="block md:hidden">
        <p className="text-center text-sm font-bold py-4  ">
          Your payout: 1.87 $
        </p>
      </div>
      <div className="flex md:flex-col gap-4">
        <button className="flex items-center justify-between bg-[#0faf59] px-4 py-3 rounded w-full">
          <p>Up</p>
          <Icon name="arrow_circle_up" className="text-gray-300" />
        </button>
        <p className="text-center text-sm font-bold py-3 md:block hidden ">
          Your payout: 1.87 $
        </p>
        <button className="flex items-center justify-between bg-[#ff402b] px-4 py-3 rounded w-full">
          <p>Down</p>
          <Icon name="arrow_circle_down" className="text-gray-300" />
        </button>
      </div>
    </div>
  );
}
