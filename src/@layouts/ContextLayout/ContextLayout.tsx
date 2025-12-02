"use client";
import { useState } from "react";
import Icon from "@/@components/@core/Icon/Icon";
import Image from "next/image";
import logo from "@/@asstes/kings-of-asia.jpg";
import { MenuItem } from "@/@interfaces/common.interface";

export default function ContextLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const menuItems: MenuItem[] = [
    { icon: "dashboard", label: "Trade" },
    { icon: "sms", label: "Support" },
    { icon: "account_box", label: "Account" },
    { icon: "settings", label: "Tourna-ments" },
    { icon: "more_horiz", label: "More" },
  ];

  return (
    <div className="h-screen bg-gray-900 text-white relative overflow-hidden">
      {open && (
        <div className="fixed inset-0 bg-gray-800 opacity-75 backdrop-blur-sm z-[998]" />
      )}
      <aside
        className={`
          hidden sm:flex fixed top-0 left-0 h-full 
          transition-all duration-300 ease-in-out z-[9999]
          ${
            open
              ? "w-44 translate-x-0 bg-[#1c1f2d]"
              : "w-20 translate-x-0 bg-primary"
          }
          flex-col
        `}
      >
        <div className="h-16 flex items-center justify-between px-4">
          {open ? (
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg transition cursor-pointer"
            >
              <Icon name="close" size={28} />
            </button>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="p-2 rounded-lg transition cursor-pointer"
            >
              <Icon name="menu_open" size={28} />
            </button>
          )}
        </div>

        <nav className="px-2 py-1 space-y-3 w-full">
          {menuItems?.map((item, i) => (
            <div key={i} className="cursor-pointer transition">
              <div className="flex flex-col items-center gap-1 hover:bg-[#026fd3] px-8 py-2 rounded">
                <Icon name={item.icon} size={24} />
                <p className="text-[10px] text-center uppercase">
                  {item.label}
                </p>
              </div>
            </div>
          ))}

          <div>
            <Image src={logo} alt="" className="rounded-lg px-1" />
          </div>
        </nav>

        <div className="px-2 py-1 mt-auto pb-3 mx-auto">
          <div className="flex items-center justify-center mt-auto py-2 rounded mb-1 w-13">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-1 mb-1">
                <Icon
                  name="zoom_out_map"
                  size={19}
                  className="cursor-pointer text-[#6b6c74]"
                />
                <Icon
                  name="arrow_circle_right"
                  size={20}
                  className="cursor-pointer text-[#6b6c74]"
                  variant="outlined"
                />
              </div>
              <div className="flex items-center gap-1 mb-1">
                <Icon
                  name="settings"
                  size={20}
                  className="cursor-pointer text-[#6b6c74]"
                />
                <Icon
                  name="volume_up"
                  size={20}
                  className="cursor-pointer text-[#6b6c74]"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#393a46] flex items-center justify-center mt-auto py-2 rounded mb-2 w-13">
            <div className="flex flex-col items-center justify-center">
              <Icon name="rocket" size={18} className="cursor-pointer" />
              <p className="text-white text-[8px] mt-0.5 font-semibold uppercase">
                Official
              </p>
            </div>
          </div>
          <div className="bg-[#12c65e] flex items-center justify-center mt-auto py-2 rounded w-13">
            <div className="flex flex-col items-center justify-center">
              <Icon name="adjust" size={18} className="cursor-pointer" />
              <p className="text-white text-[11px] font-semibold">Help</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="sm:hidden fixed bottom-0 left-0 w-full flex justify-around bg-[#1c1f2d] py-2 z-[9999] border-t border-gray-700">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center text-white cursor-pointer"
          >
            <Icon name={item.icon} size={24} />
            <p className="text-[10px] mt-1 uppercase">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="h-full pl-0 sm:pl-20">
        <header className="h-16 bg-gray-900 sm:flex items-center sm:justify-between px-2">
          <div className="font-medium flex items-center gap-10">
            <div className="sm:block hidden">
              <div className="flex items-center gap-3 ">
                <Icon
                  name="currency_exchange"
                  className="text-white"
                  size={24}
                />
                <h4 className="uppercase font-bold text-xl">Quotex</h4>
              </div>
            </div>
            <div className="lg:block hidden">
              <p className="text-[#5d5f69] uppercase text-sm font-bold">
                Web Trading Platform
              </p>
            </div>
          </div>
          <div className="xl:block hidden">
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
          <div className="flex items-center justify-between md:justify-normal gap-x-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#2b3040] px-2 pt-2 pb-1 rounded hover:bg-black cursor-pointer order-2 sm:order-1">
                <Icon name="notifications" size={20} />
              </div>
              <div className="bg-[#2b3040] px-2 pt-0.5 pb-1 rounded flex items-center gap-2 font-bold hover:bg-black cursor-pointer order-1 sm:order-2">
                <Icon name="send" size={20} className="text-[#35cb01]" />
                <div>
                  <p className="text-xs text-[#0ea152] uppercase font-bold">
                    Live Account
                  </p>
                  <p className="text-xs uppercase font-bold">$0.00</p>
                </div>
                <Icon name="keyboard_arrow_down" size={22} className="" />
              </div>
            </div>
            <div className="flex items-center gap-2 sm:order-1 order-3">
              <button className="flex items-center bg-[#05c65e] p-2 rounded text-sm font-bold gap-1">
                <Icon name="add" size={20} />
                <p>Deposit</p>
              </button>
              <button className="flex items-center bg-[#353a4d] p-2 rounded text-sm font-bold gap-1 sm:block hidden">
                Withdrawal
              </button>
            </div>
          </div>
        </header>
        <main className="px-2 overflow-y-auto h-[calc(100%-4rem)] pb-16 sm:pb-0">
          {children}
        </main>
      </div>
    </div>
  );
}
