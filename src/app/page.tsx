import ContextLayout from "@/@layouts/ContextLayout/ContextLayout";
import Tabs from "@/@components/@pages/TabComponent/TabCompoent";
import ActionBar from "@/@components/@pages/ActionBar/ActionBar";

export default function Home() {
  return (
    <ContextLayout>
      <div className="text-white h-full">
        <div className="flex items-start justify-between h-full">
          <div className="w-full h-full">dynamic chart area</div>
          <div className="w-[220px] h-full flex flex-col">
            <ActionBar />
            <div className="bg-[#2b3040] rounded-lg mt-3 flex-1 overflow-auto">
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </ContextLayout>
  );
}
