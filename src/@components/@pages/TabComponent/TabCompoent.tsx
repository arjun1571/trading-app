"use client";
import Icon from "@/@components/@core/Icon/Icon";
import { TabItem } from "@/@interfaces/common.interface";
import { useState } from "react";

export default function Tabs() {
  const [active, setActive] = useState("orders");

  const tabs: TabItem[] = [
    { id: "orders", label: "Orders", icon: "sync_alt", value: 0 },
    { id: "trades", label: "Trades", icon: "schedule", value: 0 },
  ];

  return (
    <div className="w-full">
      <div className="flex gap-5 border-b border-gray-700 pb-2">
        {tabs.map((tab: TabItem) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`
              px-3 py-1 text-sm font-medium relative
              transition-all duration-300
              ${active === tab.id ? " w-44" : "text-gray-400"}
            `}
          >
            <div className="pt-1 flex items-center w-full cursor-pointer">
              {active === tab.id ? (
                <div className="flex items-center gap-2 text-center justify-center mx-auto font-bold text-xs ">
                  <p>{tab.label} </p>
                  <p>{tab.value} </p>
                </div>
              ) : (
                <Icon name={tab.icon} className="" size={18} />
              )}
            </div>
            {active === tab.id && (
              <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-[#2b89e3] rounded-full! top-0 "></span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-4 text-white px-4">
        {active === "orders" && (
          <div className="flex items-center justify-center w-full mx-auto text-center pb-14">
            <div className="flex flex-col items-center justify-center">
              <Icon
                name="takeout_dining"
                size={40}
                className="mb-3 text-gray-400"
              />

              <p className="text-sm text-gray-300 max-w-xs">
                You don’t have any trade history yet. You can open a trade using
                the form above.
              </p>
            </div>
          </div>
        )}
        {active === "trades" && (
          <div className="flex items-center justify-center w-full mx-auto text-center pb-14">
            <div className="flex flex-col items-center justify-center">
              <Icon
                name="takeout_dining"
                size={40}
                className="mb-3 text-gray-400"
              />

              <p className="text-sm text-gray-300 max-w-xs">
                You don’t have any Order history yet. You can open a trade using
                the form above.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
