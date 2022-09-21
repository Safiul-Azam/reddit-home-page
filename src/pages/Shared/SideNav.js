import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link, Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';

const SideNav = () => {
    return (
        <>
            <div className="bg-[#EDEFF1] grid grid-cols-6">
                <div className="bg-white pl-8">
                    <h2 className="text-xs font-semibold text-gray-600 mt-4">FEEDS</h2>
                    <Link className="text-lg text-gray-800 py-4 flex items-center space-x-2">
                        <BsBoxArrowUpRight />
                        <p to='/'>Popular</p>
                    </Link>
                    <h2 className="text-xs font-semibold text-gray-600 mt-4">EXPLORE</h2>
                    <div class="menu">
                        <ul class="mainmenu">
                            <li><Link to="/">Gaming <i class="fas fa-angle-down"></i></Link>
                                <ul class="submenu">
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
                                </ul>

                            </li>
                            <li><Link to="/">Sports <i class="fas fa-angle-down"></i></Link>
                                <ul class="submenu">
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
                                </ul>

                            </li>
                            <li><Link to="/">Television <i class="fas fa-angle-down"></i></Link>
                                <ul class="submenu">

                                    <li><CustomLink to="/">Progress</CustomLink></li>
                                    <li><CustomLink to="/">Bar</CustomLink></li>
                                    <li><CustomLink to="/">Typography</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Policy</CustomLink></li>
                                    <li><CustomLink to="/">Search</CustomLink></li>
                                    <li><CustomLink to="/">Button</CustomLink></li>
                                </ul>


                            </li>
                            <li><Link to="/">Celebrity <i class="fas fa-angle-down"></i></Link>
                                <ul class="submenu">

                                    <li><CustomLink to="/">Form</CustomLink></li>
                                    <li><CustomLink to="/">Progress</CustomLink></li>
                                    <li><CustomLink to="/">Bar</CustomLink></li>
                                    <li><CustomLink to="/">Typography</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Policy</CustomLink></li>
                                    <li><CustomLink to="/">Search</CustomLink></li>
                                    <li><CustomLink to="/">Button</CustomLink></li>
                                </ul>


                            </li>
                            <li><Link to="/">Business,Economics,Finance <i class="fas fa-angle-down"></i></Link>

                                <ul class="submenu">

                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Policy</CustomLink></li>
                                    <li><CustomLink to="/">Search</CustomLink></li>
                                    <li><CustomLink to="/">Button</CustomLink></li>
                                </ul>

                            </li>
                            <li><Link to="/">Crypto<i class="fas fa-angle-down"></i></Link>

                                <ul class="submenu">

                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Policy</CustomLink></li>
                                    <li><CustomLink to="/">Search</CustomLink></li>
                                    <li><CustomLink to="/">Button</CustomLink></li>
                                </ul>

                            </li>
                            <li><Link to="/">More Topics<i class="fas fa-angle-down"></i></Link>

                                <ul class="submenu">

                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Privacy</CustomLink></li>
                                    <li><CustomLink to="/">Policy</CustomLink></li>
                                    <li><CustomLink to="/">Search</CustomLink></li>
                                    <li><CustomLink to="/">Button</CustomLink></li>
                                </ul>

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