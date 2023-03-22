"use client";
import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";



const lis: Array<{ name: string }> = [
  { name: "1 Adult" },
  { name: "2 Adults" },
  { name: "3 Adults" },
  { name: "4 Adults" },
];

const AdultsDropdown: React.FC = () => {
  const {adults, setAdults} = useContext(RoomContext)
  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      {/* btn */}
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {adults}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      {/* items */}
      <Menu.Items as="ul" className="bg-white absolute w-full flex flex-col z-40">
        {lis.map((li, index) => (
          <Menu.Item 
          onClick={() => setAdults(li.name)}
          key={index} as="li" className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer">
            {li.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
