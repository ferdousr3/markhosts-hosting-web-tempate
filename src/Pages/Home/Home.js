import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturesLeftTitle from "../../components/Features/FeaturesLeftTitle";
import FeaturesRightTitle from "../../components/Features/FeaturesRightTitle";
import FindDomain from "../../components/FindDomain/FindDomain";
import HostingFeatures from "../../components/HostingFeatures/HostingFeatures";
import SpeedUp from "../../components/SpeedUp/SpeedUp";
import RightChoose from "../../components/RightChoose/RightChoose";
import HomePrice from "../../components/Price/HomePrice";

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <HeroSection />
      {/* web hosting section */}
      <section className="mt-[-80px] ">
        <FeaturesLeftTitle
          title="WEB HOSTING"
          subTitle="Perfect for small to medium websites."
          price="$0.99"
          buttonText="get started"
          route="products"
        />
      </section>
      {/* cloud hosting section */}
      <section className="mt-24 pb-24 bg-white">
        <FeaturesRightTitle
          title="CLOUD HOSTING"
          subTitle="Great for saving media files for your website."
          price="$0.99"
          buttonText="get started"
          route="products"
        />
      </section>
      {/* find domain section */}
      <section className="main-bg py-32">
        <FindDomain />
      </section>
      {/* hosting features section */}
      <section className="py-24">
        <HostingFeatures />
      </section>
      <section className=" bg-nine py-32  ">
       <RightChoose/>
      </section>
      <section className="py-24  ">
       <SpeedUp />
      </section>
      <section className="main-bg  py-24  ">
       <HomePrice/>
      </section>
    </div>
  );
};

export default Home;
