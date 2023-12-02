import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from 'next/image'

const Hero = () => {
  return (
    <section>
        <div className="grid grid-cols-2">
            <div className="pl-24 relative">
              <div className="pt-12 pb-48">
                  <p className="text-primaryBlack2 text-5xl font-semibold font-Roboto leading-tight">SMS Marketing and <span className="text-forestGreen">Email Marketing</span> Made Easy.</p>
                  <div className="my-8">
                    <p className="text-[#565656] text-lg">You can get started with your marketing automation in a few minutes</p>
                    <ul className="my-6">
                      <li className="flex items-center"><RiVerifiedBadgeFill className="text-navyBlue" size={24} /> <span className="ml-4 text-[#565656]">Get Overview at a glance</span></li>
                      <li className="flex items-center my-2"><RiVerifiedBadgeFill className="text-navyBlue" size={24} /> <span className="ml-4 text-[#565656]">Deposit funds easily, security</span></li>
                      <li className="flex items-center"><RiVerifiedBadgeFill className="text-navyBlue" size={24} /> <span className="ml-4 text-[#565656]">Get Live Support</span></li>
                    </ul>
                  </div>
                  <div className="flex mt-4 pb-10">
                    <input type="text" placeholder="Enter email" className="px-5 py-2 focus:border-0 outline-none shadow-xl cursor-pointer" />
                    <button className="bg-navyBlue text-white text-lg px-5 py-2 ml-5 hover:text-navyBlue hover:font-semibold hover:border hover:border-navyBlue hover:bg-white">Let’s Talk</button>
                  </div>
                </div>
                <div className="">
                  <Image src='/image/Rectangle.svg' alt="left-half-circle" width="24" height="24" className=" absolute left-0 top-0" />
                  <Image src='/image/Rectangle (1).svg' alt="left-half-cirle 2" width="64" height="44" className=" absolute left-0 bottom-0" />
                  <Image src='/image/Rectangle (2).svg' alt="left-half-cirle 2" width="20" height="20" className=" absolute right-0 bottom-10" />
                </div>
            </div>
            <div className="pr-4">
              <Image src='/image/Group 1000000796.svg' alt="hero-dashboard-image" width='100' height='100' className="w-full object-cover" />
            </div>
        </div>
    </section>
  )
}

export default Hero