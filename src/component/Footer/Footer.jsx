import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <footer className="bg-[#101727] pt-16 pb-10 p-10 md:p-20 lg:p-10">
                <div className="max-w-7xl mx-auto px-2">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12  gap-10">

                        <div className="md:col-span-4">
                            <div className="flex items-center gap-3 mb-6">
                                <h2 className="text-3xl font-bold tracking-tighter text-white">
                                   Morsa Stack Ai
                                </h2>
                            </div>

                            <p className="text-zinc-400 text-lg max-w-md">
                                Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="md:col-span-2">
                            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
                            <ul className="space-y-4 text-zinc-400">
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Templates
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Integrations
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="md:col-span-2">
                            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
                            <ul className="space-y-4 text-zinc-400">
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Press
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="md:col-span-2">
                            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
                            <ul className="space-y-4 text-zinc-400">
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Community
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="text-white font-semibold mb-6 text-lg">Social Links</h3>
                            <div className='flex gap-2'>
                                <span>
                                    <FaInstagram size={30} className="text-white hover:text-pink-500 cursor-pointer transition" />
                                </span>
                                <span>
                                    <FaFacebook size={30} className="text-white hover:text-blue-500 cursor-pointer transition" />
                                </span>
                                <span>
                                    <FaXTwitter size={30} className="text-white hover:text-green-500 cursor-pointer transition" />
                                </span>

                            </div>



                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                        <div>© {new Date().getFullYear()} All rights reserved.</div>

                        <div className="flex gap-6">
                            <a href="#" className="hover:text-red-400 transition">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-red-400 transition">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-red-400 transition">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;