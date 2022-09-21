import { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { TiSocialDribbble } from "react-icons/ti";
import { GiBeveledStar, GiCrystalShine } from "react-icons/gi";
import { AiOutlineLineChart } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { RiMoreLine } from "react-icons/ri";
import { Link, Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';

const SideNav = () => {
    const [showGaming, setShowGaming] = useState(false)
    const [showSport, setShowSport] = useState(false)
    const [showTelevision, setShowTelevision] = useState(false)
    const [showCelebrity, setShowCelebrity] = useState(false)
    const [showBEF, setShowBEF] = useState(false)
    const [showCrypto, setShowCrypto] = useState(false)
    const [showMore, setShowMore] = useState(false)
    return (
        <>
            <div className="bg-[#EDEFF1] grid grid-cols-6 fixed">
                <div className="bg-white px-8">
                    <h2 className="text-xs font-semibold text-gray-600 mt-4">FEEDS</h2>
                    <Link className="text-lg text-gray-800 py-4 flex items-center space-x-2">
                        <BsBoxArrowUpRight />
                        <p to='/'>Popular</p>
                    </Link>
                    <h2 className="text-xs font-semibold text-gray-600 my-4">EXPLORE</h2>
                    <div class="menu">
                        <ul class="space-y-3 text-lg">
                            <li><div className="flex justify-between">
                                <Link to="/" className="flex items-center"><IoGameControllerOutline className="mr-3 text-2xl" />Gaming</Link>
                                <MdKeyboardArrowDown onClick={() => setShowGaming(!showGaming)} className={`text-2xl cursor-pointer ${showGaming && 'rotate-180'}`} />
                            </div>
                                {showGaming && <ul class="submenu">
                                    <li><CustomLink to="/">About Company</CustomLink></li>
                                    <li><CustomLink to="/">Testimonials</CustomLink></li>
                                    <li><CustomLink to="/">Form</CustomLink></li>
                                    <li><CustomLink to="/">Progress</CustomLink></li>
                                    <li><CustomLink to="/">Bar</CustomLink></li>
                                    <li><CustomLink to="/">Typography</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Policy</CustomLink></li>
                                    <li><CustomLink to="/">Search</CustomLink></li>
                                    <li><CustomLink to="/">Button</CustomLink></li>
                                </ul>}
                            </li>
                            <li><div className="flex justify-between">
                                <Link to="/" className="flex items-center"> <TiSocialDribbble className="mr-3 text-2xl" /> Sports </Link>
                                <MdKeyboardArrowDown onClick={() => setShowSport(!showSport)} className={`text-2xl ${showSport && 'rotate-180'}`} />
                            </div>
                                {showSport && <ul class="submenu">
                                    <li><CustomLink to="/">About Company</CustomLink></li>
                                    <li><CustomLink to="/">Testimonials</CustomLink></li>
                                    <li><CustomLink to="/">Form</CustomLink></li>
                                    <li><CustomLink to="/">Progress</CustomLink></li>
                                    <li><CustomLink to="/">Bar</CustomLink></li>
                                    <li><CustomLink to="/">Typography</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Policy</CustomLink></li>
                                    <li><CustomLink to="/">Search</CustomLink></li>
                                    <li><CustomLink to="/">Button</CustomLink></li>
                                </ul>}
                            </li>
                            <li><div className="flex justify-between">
                                <Link to="/" className="flex items-center"><FiMonitor className="mr-3 text-2xl" /> Television</Link>
                                <MdKeyboardArrowDown onClick={() => setShowTelevision(!showTelevision)} className={`text-2xl ${showTelevision && 'rotate-180'}`} />
                            </div>
                                {showTelevision && <ul class="submenu">
                                    <li><CustomLink to="/">Progress</CustomLink></li>
                                    <li><CustomLink to="/">Bar</CustomLink></li>
                                    <li><CustomLink to="/">Typography</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Policy</CustomLink></li>
                                    <li><CustomLink to="/">Search</CustomLink></li>
                                    <li><CustomLink to="/">Button</CustomLink></li>
                                </ul>}
                            </li>
                            <li><div className="flex justify-between">
                                <Link to="/" className="flex items-center"><GiBeveledStar className="mr-3 text-2xl" />Celebrity</Link>
                                <MdKeyboardArrowDown onClick={() => setShowCelebrity(!showCelebrity)} className={`text-2xl ${showCelebrity && 'rotate-180'}`} />
                            </div>
                                {showCelebrity && <ul class="submenu">
                                    <li><CustomLink to="/">Form</CustomLink></li>
                                    <li><CustomLink to="/">Progress</CustomLink></li>
                                    <li><CustomLink to="/">Bar</CustomLink></li>
                                    <li><CustomLink to="/">Typography</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Policy</CustomLink></li>
                                    <li><CustomLink to="/">Search</CustomLink></li>
                                    <li><CustomLink to="/">Button</CustomLink></li>
                                </ul>}
                            </li>
                            <li><div className="flex justify-between overflow-hidden">
                                <Link to="/" className="flex items-center text-ellipsis whitespace-nowrap"><AiOutlineLineChart className="text-2xl" />Business, Economics, and Finance</Link>
                                <MdKeyboardArrowDown onClick={() => setShowBEF(!showBEF)} className={`text-2xl overflow-visible ${showBEF && 'rotate-180'}`} />
                            </div>
                                {showBEF && <ul class="submenu">
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Policy</CustomLink></li>
                                    <li><CustomLink to="/">Search</CustomLink></li>
                                    <li><CustomLink to="/">Button</CustomLink></li>
                                </ul>}
                            </li>
                            <li><div className="flex justify-between">
                                <Link to="/" className="flex items-center"><GiCrystalShine className="mr-3 text-2xl" />Crypto</Link>
                                <MdKeyboardArrowDown onClick={() => setShowCrypto(!showCrypto)} className={`text-2xl ${showCrypto && 'rotate-180'}`} />
                            </div>
                                {showCrypto && <ul class="submenu">
                                    <li><CustomLink to="/">Policy</CustomLink></li>
                                    <li><CustomLink to="/">Search</CustomLink></li>
                                    <li><CustomLink to="/">Button</CustomLink></li>
                                </ul>}
                            </li>
                            <li><div className="flex justify-between">
                                <Link to="/" className="flex items-center"><RiMoreLine className="mr-3 text-2xl" />More Topics </Link>
                                <MdKeyboardArrowDown onClick={() => setShowMore(!showMore)} className={`text-2xl ${showMore && 'rotate-180'}`} />
                            </div>
                                {showMore && <ul class="submenu">
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Policy</CustomLink></li>
                                    <li><CustomLink to="/">Search</CustomLink></li>
                                    <li><CustomLink to="/">Button</CustomLink></li>
                                </ul>}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-5 mb-24 mx-10">
                    <Outlet />
                </div>
            </div>
        </>

    );
};

export default SideNav;