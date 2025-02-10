"use client";
import { Geist, Geist_Mono } from "next/font/google";
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { RiHome6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const navigation = [
  {
    icon: <RiHome6Line size={25} className="inline" />,
    name: "Home",
    href: "#",
    current: true,
  },
  {
    icon: <FiEdit size={25} className="inline" />,
    name: "About",
    href: "#",
    current: false,
  },
];

const userNavigation = [{ name: "Sign out", href: "/login" }];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MemberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-full">
          <Disclosure
            as="nav"
            style={{ backgroundColor: "#243831" }}
            className=" fixed w-full z-10"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <Image
                      height={40}
                      width={100}
                      alt="Your Company"
                      src="/images/logo.png"
                    />
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <MenuButton className="relative flex max-w-xs items-center rounded-full  text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-400 focus:outline-hidden">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <span className="px-3 hidden lg:block">Komphet</span>
                          <UserCircleIcon
                            aria-hidden="true"
                            className="size-8"
                          />
                        </MenuButton>
                      </div>
                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                      >
                        {userNavigation.map((item) => (
                          <MenuItem key={item.name}>
                            <a
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                            >
                              {item.name}
                            </a>
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="group relative inline-flex items-center justify-center rounded-md  p-2 text-white hover:bg-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon
                      aria-hidden="true"
                      className="block size-6 group-data-open:hidden"
                    />
                    <XMarkIcon
                      aria-hidden="true"
                      className="hidden size-6 group-data-open:block"
                    />
                  </button>
                </div>
              </div>
            </div>
          </Disclosure>

          <main style={{ backgroundColor: "#BBC2C0", color: "#243831" }}>
            <div className="lg:hidden">
              {isOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  onClick={() => setIsOpen(false)}
                />
              )}

              <aside
                style={{ backgroundColor: "#243831", color: "#D8E9E4" }}
                className={`fixed top-0 right-0 w-64 h-screen  p-5 transform transition-transform z-50 flex justify-between flex-col  ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <nav className="space-y-4">
                  <a
                    href="#"
                    className="block px-3 py-2 hover:bg-white rounded"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                    }}
                  >
                    <FaArrowRight />
                  </a>
                  {navigation.map((item, index) => {
                    return (
                      <a
                        key={index}
                        href="#"
                        className="block px-3 py-2 hover:bg-gray-600 rounded"
                      >
                        {!!item.icon && item.icon} <span>{item.name}</span>
                      </a>
                    );
                  })}
                </nav>
                <nav className="space-y-4">
                  <a
                    href="/login"
                    className="block px-3 py-2 hover:bg-gray-600 rounded text-center"
                  >
                    Sign out
                  </a>
                </nav>
              </aside>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-row pt-16">
              <aside className="hidden lg:flex flex-col w-64 h-screen  p-5 basis-2/12">
                <nav className="space-y-4">
                  {navigation.map((item, index) => {
                    return (
                      <a
                        key={index}
                        href="#"
                        className="block px-3 py-2 hover:bg-white rounded "
                      >
                        {!!item.icon && item.icon} <span>{item.name}</span>
                      </a>
                    );
                  })}
                </nav>
              </aside>
              <div className="lg:basis-10/12 basis-full">{children}</div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
