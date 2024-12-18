"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHome } from "react-icons/fa";

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathName = usePathname();

  const isActive = (path: string): boolean => pathName === path;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="fixed bottom-0 w-full bg-gray-200 sm:fixed sm:w-32 sm:h-full sm:top-0 sm:left-0">
        <div className="flex sm:flex-col justify-around sm:justify-start sm:items-center p-4 space-x-3 sm:space-x-0 sm:space-y-6">
          {/* Account */}
          <Link
            href="/account"
            className={`flex items-center justify-center w-16 h-16 rounded-lg transition-all ${
              isActive("/account") ? "bg-gray-400" : "bg-gray-200"
            }`}
          >
            <Image
              alt="Account"
              width={30}
              height={30}
              className="object-cover"
              src="/Test Account.png"
            />
          </Link>

          {/* Home */}
          <Link
            href="/"
            className={`flex items-center justify-center w-16 h-16 rounded-lg transition-all ${
              isActive("/") ? "bg-gray-400" : "bg-gray-200"
            }`}
          >
            <FaHome size={30} />
          </Link>

          {/* Trending */}
          <Link
            href="/trending"
            className={`flex items-center justify-center w-16 h-16 rounded-lg transition-all ${
              isActive("/trending") ? "bg-gray-400" : "bg-gray-200"
            }`}
          >
            <Image
              alt="Trending"
              width={30}
              height={30}
              className="object-cover"
              src="/Tranding.png"
            />
          </Link>

          {/* Notification */}
          <Link
            href="/notification"
            className={`flex items-center justify-center w-16 h-16 rounded-lg transition-all ${
              isActive("/notification") ? "bg-gray-400" : "bg-gray-200"
            }`}
          >
            <Image
              alt="Notification"
              width={30}
              height={30}
              className="object-cover"
              src="/Alarm.png"
            />
          </Link>

          {/* Conflict */}
          <Link
            href="/conflict"
            className={`flex items-center justify-center w-16 h-16 rounded-lg transition-all ${
              isActive("/conflict") ? "bg-gray-400" : "bg-gray-200"
            }`}
          >
            <Image
              alt="Conflict"
              width={30}
              height={30}
              className="object-cover"
              src="/Conflict.png"
            />
          </Link>

          {/* Settings */}
          <Link
            href="/settings"
            className={`flex items-center justify-center w-16 h-16 rounded-lg transition-all ${
              isActive("/settings") ? "bg-gray-400" : "bg-gray-200"
            }`}
          >
            <Image
              alt="Settings"
              width={30}
              height={30}
              className="object-cover"
              src="/Settings.png"
            />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div
        suppressHydrationWarning={true}
        className="ml-0 sm:ml-32 flex-1 relative overflow-y-auto p-4 mb-24 lg:mb-0"
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
