"use client";
import { CiSearch } from "react-icons/ci";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Card from "@/components/Card";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function HomePage() {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center align-middle">
        <button
          onClick={() => setIsSearching(!isSearching)}
          type="button"
          style={{ color: "#191919" }}
          className={`rounded-md px-3 py-2 font-semibold w-full ${
            isSearching ? "hidden" : "block sm:hidden"
          }`}
        >
          <CiSearch size={25} />
        </button>
        <div
          className={`relative w-full  ${
            isSearching ? "block" : "hidden sm:block"
          }`}
        >
          <div
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: "#5B5B5B" }}
          >
            <CiSearch />
          </div>
          <input
            type="text"
            placeholder="Search"
            style={{
              backgroundColor: "#BBC2C0",
              borderColor: "#D8E9E4",
              color: "#5B5B5B",
            }}
            className="w-full pl-10 pr-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          {isSearching && (
            <button
              onClick={() => setIsSearching(!isSearching)}
              type="button"
              style={{ color: "#5B5B5B" }}
              className={`absolute right-3 top-1/2 -translate-y-1/2`}
            >
              <IoMdClose />
            </button>
          )}
        </div>
        <Menu
          as="div"
          className={`relative inline-block text-left ${
            isSearching && "hidden"
          }`}
        >
          <div>
            <MenuButton
              style={{ color: "#191919" }}
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold "
            >
              Community
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5" />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  History
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Food
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Pets
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Health
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Fashion
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Exercise
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Others
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
        <button
          type="button"
          style={{ backgroundColor: "#49A569", minWidth: "100px" }}
          className={`${
            isSearching && "hidden"
          } rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2`}
        >
          Create +
        </button>
      </div>
      <div className="flex flex-col items-center gap-5 mt-5">
        <Card
          author="Wittawat"
          category="History"
          title="The Beginning of the End of the World"
          content="The afterlife sitcom The Good Place comes to its culmination, the show's two protagonists..."
          comments={32}
          image="https://i.pravatar.cc/100?img=1"
        />
        <Card
          author="Zach"
          category="History"
          title="The Big Short War"
          content="Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid..."
          comments={4}
          image="https://i.pravatar.cc/100?img=2"
        />
        <Card
          author="Nicholas"
          category="Exercise"
          title="The Mental Health Benefits of Exercise"
          content="You already know that exercise is good for your body. But did you know it can also..."
          comments={32}
          image="https://i.pravatar.cc/100?img=3"
        />
        <Card
          author="Carl"
          category="History"
          title="What Makes a Man Betray His Country?"
          content="The life of Adolf Tolkachev, Soviet dissident and CIA spy..."
          comments={32}
          image="https://i.pravatar.cc/100?img=4"
        />
      </div>
    </div>
  );
}
