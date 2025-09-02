import React, { useState } from 'react'
import { Card } from '../../components/ui/card'
import { Link } from 'react-router-dom'
import LivoLab from "../../assets/livolab.png";
import { FaArrowRight } from "react-icons/fa";

function Header() {
    const [mobileNav, setMobileNav]=useState("hidden");
    const mobileMenu = ()=>{
        setMobileNav((mobileNav==='hidden'?'sm:block':'hidden'));
    }
  return (
    <div>
      <header className="w-full fixed top-0 h-fit bg-white z-999">
        <div className="px-18 p-2">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
                <Link className="block text-teal-600" to="/">
                    <img src={LivoLab} alt="LivoLab" className='object-contain h-10'/>
                </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-black-500 transition hover:text-black-500/75"
                      to="#"
                    >
                      {" "}
                      Membership Plans{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-black-500 transition hover:text-black-500/75"
                      to="#"
                    >
                      {" "}
                      Diseases We Cover{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-black-500 transition hover:text-black-500/75"
                      to="#"
                    >
                      {" "}
                      FAQs{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-black-500 transition hover:text-black-500/75"
                      to="#"
                    >
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden md:block">
                <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                    <Link
                    className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm flex items-center gap-2"
                    to="#"
                    >
                    Join as a Member <FaArrowRight />
                    </Link>
                </div>
                </div>
            </div>
            <div className="block md:hidden">
                <button onClick={()=>mobileMenu()} className="rounded-sm bg-blue-600 p-2 text-white transition hover:text-blue-600/75">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>
                </button>
            </div>
            
          </div>
        <div className={mobileNav}>
            <nav aria-label="Global">
                <Card className="border-0 px-7 max-w-60">
                    <ul className="flex flex-col gap-6 text-sm">
                        <li>
                            <Link
                                className="text-gray-500 transition hover:text-gray-500/75"
                                to="#"
                            >
                                {" "}
                                Membership Plans{" "}
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="text-gray-500 transition hover:text-gray-500/75"
                                to="#"
                            >
                                {" "}
                                Diseases We Cover{" "}
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="text-gray-500 transition hover:text-gray-500/75"
                                to="#"
                            >
                                {" "}
                                FAQs{" "}
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="text-gray-500 transition hover:text-gray-500/75"
                                to="#"
                            >
                                {" "}
                                Contact Us{" "}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm flex items-center gap-2"
                                to="#"
                                >
                                Join as a Member <FaArrowRight />
                            </Link>
                        </li>
                    </ul>
                </Card>
            </nav>
        </div>
        </div>
      </header>
    </div>
  )
}

export default Header
