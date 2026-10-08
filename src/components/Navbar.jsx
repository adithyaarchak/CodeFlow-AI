import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    // to open the sidemenu 
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

    return (<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

                {/* logo and website name */}
                <div className="flex items-center space-x-1 group cursor-pointer">
                    {/* logo */}
                    <div>
                        <img src="/logo.png" alt="" className="w-6 h-6 sm:w-8 sm:h-8"/>
                    </div>
                    {/* website name */}
                    <span className="text-lg sm:text-xl md:text-2xl font-medium">
                        <span className="text-white">Code</span>
                        <span className="text-blue-400">Flow</span>
                    </span>
                </div>

                    {/* nav Links */}
                    <div className=" hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#features" className="text-gray-300 hover:text-white text-sm lg:text-base">Feature</a>
                        <a href="#pricing" className="text-gray-300 hover:text-white text-sm lg:text-base">Pricing</a>
                        <a href="#testimonials" className="text-gray-300 hover:text-white text-sm lg:text-base">Testimonials</a>
                    </div>

                    <button 
                        className="md:hidden p-2 text-gray-300 hover:text-white"
                        onClick={() => setMobileMenuIsOpen((prev) => !prev)}  //to open the side menu
                    >
                         {/* mobile menu open and close */} 
                         {/* if the mobile menu is opened the X is will pop up to close */}
                         {mobileMenuIsOpen ? ( 
                            <X className="w-5 h-5 sm:w-6 sm:h-6"/>
                        ) : (
                            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                         )}
                        
                    </button>
            </div>
        </div>

        {/* when we click the burger menu the links will shows ups */}
        {mobileMenuIsOpen && 
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top anim-duration-300">
            <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                <a 
                href="#features"
                onClick={() => setMobileMenuIsOpen(false)} //so when we click the link the menu bar should close manually
                className="block text-gray-300 hover:text-white text-sm lg:text-base"
                >
                    Feature
                </a>

                <a 
                href="#pricing" 
                onClick={() => setMobileMenuIsOpen(false)} 
                className="block text-gray-300 hover:text-white text-sm lg:text-base"
                >
                    Pricing
                </a>

                <a 
                href="#testimonials" 
                onClick={() => setMobileMenuIsOpen(false)} 
                className="block text-gray-300 hover:text-white text-sm lg:text-base"
                >
                    Testimonials
                </a>

            </div>
        </div> }
    </nav>
);
}
