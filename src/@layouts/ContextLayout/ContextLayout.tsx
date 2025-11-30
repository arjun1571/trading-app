"use client";

import { useState } from "react";
import Icon from "@/@components/@core/Icon/Icon";

export default function ContextLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen bg-gray-900 text-white relative overflow-hidden">
      {open && (
        <div className="fixed inset-0 bg-gray-800 opacity-75 backdrop-blur-sm z-[998]" />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full 
          transition-all duration-300 ease-in-out z-[9999]
          ${
            open
              ? "w-44 translate-x-0 bg-[#1c1f2d]"
              : "w-20 translate-x-0 bg-primary"
          }
        `}
      >
        <div className="h-16 flex items-center justify-between  px-4">
          {open ? (
            <button
              onClick={() => setOpen(false)}
              className="p-2  rounded-lg transition cursor-pointer"
            >
              <Icon name="close" size={28} />
            </button>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="p-2  rounded-lg transition cursor-pointer"
            >
              <Icon name="menu_open" size={28} />
            </button>
          )}
        </div>

        <nav className="px-2 py-1 space-y-3 w-full">
          {[
            { icon: "dashboard", label: "Trade" },
            { icon: "sms", label: "Support" },
            { icon: "account_box", label: "Account" },
            { icon: "settings", label: "Tourna-ments" },
            { icon: "more_horiz", label: "More" },
          ].map((item, i) => (
            <div key={i} className="   cursor-pointer transition ">
              <div className="flex flex-col items-center gap-1 hover:bg-[#026fd3] px-8 py-2 rounded">
                <Icon name={item.icon} size={24} />
                <p className="text-[10px] text-center uppercase">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </nav>
      </aside>

      <div className="h-full pl-20">
        <header className="h-16 bg-gray-900  flex items-center justify-between px-2">
          <div className="font-medium flex items-center gap-10">
            <div className="flex items-center gap-3">
              <Icon name="currency_exchange" className="text-white" size={24} />
              <h4 className="uppercase font-bold text-xl">Quotex</h4>
            </div>
            <div>
              <p className="text-[#5d5f69] uppercase text-sm font-bold">
                Web Trading Platform
              </p>
            </div>
            <div className="flex items-center bg-[#26a663] px-2 py-1.5 rounded-full text-sm gap-3 relative">
              <Icon
                name="rocket_launch"
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 absolute left-2"
                size={50}
              />

              <p className="font-bold ps-13 text-white">
                Get a 70% bonus on your first deposit!
              </p>

              <p className="bg-[#444b66] py-1 px-3 rounded-full text-white font-semibold">
                70%
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="bg-[#2b3040] px-2 pt-2 pb-1 rounded hover:bg-black cursor-pointer">
              <Icon name="notifications" size={20} />
            </div>
            <div className="bg-[#2b3040] px-2 pt-0.5 pb-1 rounded flex items-center gap-2 font-bold hover:bg-black cursor-pointer">
              <Icon name="send" size={20} className="text-[#35cb01]" />
              <div>
                <p className="text-xs text-[#0ea152] uppercase font-bold">
                  Live Account
                </p>
                <p className="text-xs  uppercase font-bold">$0.00</p>
              </div>
              <Icon name="keyboard_arrow_down" size={22} className="" />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center bg-[#05c65e] p-2 rounded text-sm font-bold gap-1">
                <Icon name="add" size={20} />
                <p>Deposit</p>
              </button>

              <button className="flex items-center bg-[#353a4d] p-2 rounded text-sm font-bold gap-1">
                Withdrawal
              </button>
            </div>
          </div>
        </header>

        <main className="px-4 py-2 overflow-y-auto h-[calc(100%-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}
