import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsBox, BsSpeedometer } from 'react-icons/bs';
import { FiChevronLeft, FiMenu } from 'react-icons/fi';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { PiDotDuotone } from "react-icons/pi";
import { MdOutlineCategory } from "react-icons/md";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [dropdowns, setDropdowns] = useState({
    categories: false,
    subcategories: false,
  });
  
  const [dropdownPosition, setDropdownPosition] = useState({ y: 0 });

  const toggleDropdown = (dropdown, event) => {
    const rect = event.target.getBoundingClientRect();
    setDropdownPosition({ y: rect.top + window.scrollY });
    setDropdowns((prevDropdowns) => {
      return{
        ...Object.fromEntries(Object.keys(prevDropdowns).map(key => [key, false])),
        [dropdown]: true,
      }
    }
     
    );
  };

  const onClickHandler = (dropdown, event) => {
    const rect = event.target.getBoundingClientRect();
    setDropdownPosition({ y: rect.top + window.scrollY });
    setDropdowns((prevDropdowns) => {
      return{
        ...Object.fromEntries(Object.keys(prevDropdowns).map(key => [key, false])),
        [dropdown]: !prevDropdowns[dropdown],
      }
    }
     
    );
  };
  
  const renderDropdownContent = (dropdown) => {
    switch (dropdown) {
      case 'categories':
        return <>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Products</span>
          </Link>
        </li>
        </>;
      case 'subcategories':
        return <>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <PiDotDuotone className="text-xl" />
            </span>
            <span>Products</span>
          </Link>
        </li>
        </>;
      default:
        return null;
    }
  };

  return (
    <div
      className={`bg-gray-900 text-white gap-4 flex flex-col p-4 h-full ${
        isSidebarOpen ? 'w-64' : 'group/minimize'
      }`}
    >
      <div className="items-center flex gap-2 group-[]/minimize:justify-center group-[]/minimize:grid group-[]/minimize:gap-3">
        <div className="text-xl font-bold grow group-[]/minimize:text-center">
          {isSidebarOpen ? <span>Your App</span> : <span>YA</span>}
        </div>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none hover:text-gray-400 w-8 h-8 bg-gray-900 items-center justify-center rounded grid text-xl"
        >
          {isSidebarOpen ? <FiChevronLeft /> : <FiMenu />}
        </button>
      </div>
      <ul className={`flex-fill overflow-x-hidden ${Object.values(dropdowns).some(open => open) ? 'group-[]/minimize:overflow-y-hidden' : 'overflow-y-auto'}`}>
        <li className="">
          <Link
            to="/dashboard"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <BsSpeedometer className="text-xl" />
            </span>
            {isSidebarOpen && <span>Dashboard</span>}
          </Link>
        </li>
        <li className="">
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <BsBox className="text-xl" />
            </span>
            {isSidebarOpen && <span>Products</span>}
          </Link>
        </li>
        <li className="relative">
          <button
            onMouseEnter={(e) =>{
              if(isSidebarOpen) return
               toggleDropdown('subcategories', e)
              }}
            onClick={(e) =>{
              onClickHandler('subcategories', e)
              }}
            className="flex group/dropdown items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative w-full"
          >
            <span>
              <MdOutlineCategory className="text-xl" />
            </span>
            {isSidebarOpen && <span>Sub Categories</span>}
            {isSidebarOpen &&
            <span className="ml-auto group-[]/dropdown:bg-gray-900 rounded-full w-5 h-5 grid items-center justify-center">
              {dropdowns?.subcategories ? (
                <BiChevronUp className="text-xl" />
              ) : (
                <BiChevronDown className="text-xl" />
              )}
            </span> 
            }
          </button>
          {dropdowns?.subcategories && (
            <ul className={`group-[]/minimize:fixed bg-gray-900 rounded-lg p-2 group-[]/minimize:left-24 group-[]/minimize:overflow-x-hidden group-[]/minimize:overflow-y-auto group-[]/minimize:max-h-[calc(100vh-${dropdownPosition.y}px-35px)]`} style={{ top: dropdownPosition.y }}>
              {renderDropdownContent('subcategories')}
            </ul>
          )}
        </li>
        <li className="relative">
          <button
            // onClick={(e) => toggleDropdown('categories', e)}
            // onMouseEnter={(e) => toggleDropdown('categories', e)}
            onMouseEnter={(e) =>{
              if(isSidebarOpen) return
               toggleDropdown('categories', e)
              }}
            onClick={(e) =>{
              onClickHandler('categories', e)
              }}

            className="flex group/dropdown items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative w-full"
          >
            <span className='pointer-events-none'>
              <MdOutlineCategory className="text-xl" />
            </span>
            {isSidebarOpen && <span className='pointer-events-none'>Categories</span>}
            {isSidebarOpen &&
            <span className="ml-auto group-[]/dropdown:bg-gray-900 rounded-full w-5 h-5 grid items-center justify-center pointer-events-none">
              {dropdowns?.categories ? (
                <BiChevronUp className="text-xl" />
              ) : (
                <BiChevronDown className="text-xl" />
              )}
            </span> 
            }
          </button>
          {dropdowns?.categories && (
            <ul className={`group-[]/minimize:fixed bg-gray-900 rounded-lg p-2 group-[]/minimize:left-24 group-[]/minimize:overflow-x-hidden group-[]/minimize:overflow-y-auto group-[]/minimize:max-h-[calc(100vh-${dropdownPosition.y}px-35px)]`} style={{ top: dropdownPosition.y }}>
              {renderDropdownContent('categories')}
            </ul>
          )}
        </li>
        <li className="">
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <BsBox className="text-xl" />
            </span>
            {isSidebarOpen && <span>Products</span>}
          </Link>
        </li>
        <li className="">
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <BsBox className="text-xl" />
            </span>
            {isSidebarOpen && <span>Products</span>}
          </Link>
        </li>
        <li className="">
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <BsBox className="text-xl" />
            </span>
            {isSidebarOpen && <span>Products</span>}
          </Link>
        </li>
        <li className="">
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <BsBox className="text-xl" />
            </span>
            {isSidebarOpen && <span>Products</span>}
          </Link>
        </li>
        <li className="">
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <BsBox className="text-xl" />
            </span>
            {isSidebarOpen && <span>Products</span>}
          </Link>
        </li>
        <li className="">
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <BsBox className="text-xl" />
            </span>
            {isSidebarOpen && <span>Products</span>}
          </Link>
        </li>
        <li className="">
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <BsBox className="text-xl" />
            </span>
            {isSidebarOpen && <span>Products</span>}
          </Link>
        </li>
        <li className="">
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <BsBox className="text-xl" />
            </span>
            {isSidebarOpen && <span>Products</span>}
          </Link>
        </li>
        <li className="">
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <BsBox className="text-xl" />
            </span>
            {isSidebarOpen && <span>Products</span>}
          </Link>
        </li>
        <li className="">
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <BsBox className="text-xl" />
            </span>
            {isSidebarOpen && <span>Products</span>}
          </Link>
        </li>
        <li className="">
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <BsBox className="text-xl" />
            </span>
            {isSidebarOpen && <span>Products</span>}
          </Link>
        </li>
        <li className="">
          <Link
            to="/products"
            className="flex items-center p-3 rounded-lg gap-3 hover:bg-gray-800 transition duration-300 ease-in-out text-sm font-semibold relative"
          >
            <span>
              <BsBox className="text-xl" />
            </span>
            {isSidebarOpen && <span>Products</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
