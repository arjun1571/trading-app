import ContextLayout from "@/@layouts/ContextLayout/ContextLayout";
import Tabs from "@/@components/@pages/TabComponent/TabCompoent";
import ActionBar from "@/@components/@pages/ActionBar/ActionBar";

export default function Home() {
  return (
    <ContextLayout>
      <div className="text-white h-full">
        <div className="md:flex items-start justify-between md:h-full">
          <div className="w-full  min-h-[350px] border border-gray-700 rounded-lg mb-5 md:mb-0">
            <p className="p-4">Ata chart ar area</p>
            <p className="p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, aliquid. Reiciendis, consectetur.
            </p>
          </div>
          <div className="md:w-[220px] w-full md:h-full flex flex-col">
            <ActionBar />
            <div className="bg-[#2b3040] rounded-lg mt-3 flex-1 overflow-auto md:block hidden">
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </ContextLayout>
  );
}
