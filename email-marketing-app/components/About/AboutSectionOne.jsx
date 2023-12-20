import Image from "next/image";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="w-[553px] flex flex-col items-start justify-start gap-[32px] pt-0 pr-[48px] pb-0 pl-0 overflow-hidden">
          <div className="flex flex-col items-start justify-start overflow-hidden">
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="w-[444px] text-[50px] leading-[60px] font-['Poppins'] font-bold text-[#1f284f]">
                About Us
              </h2>

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <p className="w-[444px] text-[20px] leading-[32px] font-['Poppins'] font-medium text-[#1f284f]">
                      Who are we? MailBlink is a team of talented individuals
                      working together to make software people love.
                    </p>
                    <p className="w-[444px] text-[20px] leading-[32px] font-['Poppins'] text-[#575757]">
                      We develop multi-award winning enterprise-class software
                      that helps IT teams audit IT environments.
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[16px]">
                    <div className="w-[173px] shrink-0 flex flex-col items-center justify-center py-[12px] px-[24px] bg-[#0070f0e5] border-[1px] border-solid border-[#0070f0e5] rounded-[30px]">
                      <button className="custom-btn">Contact Us</button>
                    </div>
                    <div className="w-[173px] shrink-0 flex flex-col items-center justify-center py-[12px] px-[24px] bg-[#3cba79] border-[1px] border-solid border-[#3cba79] rounded-[30px]">
                      <button className="text-[16px] leading-[24px] font-['Poppins'] font-bold text-[#fff] whitespace-nowrap">
                        Book a Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pr-4">
              <div className="pr-4">
                <Image
                  src="/assets/images/about-hero.png"
                  alt="hero-dashboard-image"
                  width="150"
                  height="150"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
