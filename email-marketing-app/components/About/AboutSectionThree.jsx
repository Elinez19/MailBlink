/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const AboutSectionThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="w-[1140px] flex flex-row items-start justify-between">
        <div className="w-[553px] shrink-0 flex flex-col items-start justify-start gap-[32px] pt-0 pr-[48px] pb-0 pl-0 overflow-hidden">
          <h2 className="text-[40px] leading-[48px] font-['Poppins'] font-bold text-[#1f284f] text-center whitespace-nowrap">
            Our story
          </h2>
          <p className="w-[519px] text-[20px] leading-[32px] font-['Poppins'] text-[#17181a]">
            Our FirstWave support engineers are highly skilled and experienced
            in NMIS, Open-AudIT and all of our commercial products and helped
            customers from Telcos, MSP, enterprise organisations.
            <br />
            <br />
            We work closely with you during implementation and rollout, as well
            as post delivery of our solutions. as well as post delivery of our
            solutions.{" "}
          </p>
        </div>
        <Image
          alt="group"
          width="558"
          height="404"
          src="Group 10000009001_3277.png"></Image>
      </div>
      <p className="w-[1140px] text-[20px] leading-[32px] font-['Poppins'] text-[#575757]">Our mailblink support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.. <br/><br/>Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.<br/><br/>Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.t <br/><br/>Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.<br/><br/>We’re tired with recruiting and we know it can be done better. We’re starting with juniors and tech.</p>
    </section>
  );
};

export default AboutSectionThree;
