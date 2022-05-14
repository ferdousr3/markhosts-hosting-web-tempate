import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturesLeftTitle from "../../components/Features/FeaturesLeftTitle";
import FeaturesRightTitle from "../../components/Features/FeaturesRightTitle";
import FindDomain from "../../components/FindDomain/FindDomain";

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
      <section className="mt-10">
        <FeaturesRightTitle
          title="CLOUD HOSTING"
          subTitle="Great for saving media files for your website."
          price="$0.99"
          buttonText="get started"
          route="products"
        />
      </section>
      {/* find domain section */}
      <section className="main-bg py-28">
        <FindDomain />
      </section>
    </div>
  );
};

export default Home;
