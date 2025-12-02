import LabeledBox from "@/@components/@core/LabelBox/LabelBox";

export default function TradeInput() {
  return (
    <div className="md:space-y-6 w-full bg-[#2b303f] md:py-4 rounded-xl  flex md:flex-col gap-4">
      <LabeledBox label="Time" bottomLabel="SWITCHTIME">
        <div className="flex items-center justify-between rounded-lg px-3 ">
          <button className="text-xl text-gray-300 bg-gray-700  rounded-full h-7 w-7">
            –
          </button>
          <span className="text-white font-semibold">00:02:02</span>
          <button className="text-xl text-gray-300 bg-gray-700  rounded-full h-7 w-7">
            +
          </button>
        </div>
      </LabeledBox>
      <LabeledBox label="Investment" bottomLabel="SWITCH">
        <div className="flex items-center justify-between rounded-lg px-3 ">
          <button className="text-xl text-gray-300 bg-gray-700  rounded-full h-7 w-7">
            –
          </button>
          <span className="text-white font-semibold">6 $</span>
          <button className="text-xl text-gray-300 bg-gray-700  rounded-full h-7 w-7">
            +
          </button>
        </div>
      </LabeledBox>
    </div>
  );
}
