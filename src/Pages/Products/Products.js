import React from "react";
import FeaturesLeftTitle from "../../components/Features/FeaturesLeftTitle";
import FeaturesRightTitle from "../../components/Features/FeaturesRightTitle";
import PageTitle from "../../components/PageTitle/PageTitle";

const Products = () => {
  return (
    <>
      {/* main page title */}
      <section className="pt-24 main-bg pb-36">
        <PageTitle
          title="Our Hosting is Your Speed"
          description="Choosing us your site will become faster and more secure."
        />
      </section>
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
          price="$1.99"
          buttonText="get started"
          route="products"
        />
      </section>
      {/*vps hosting section */}
      <section className="bp-24 ">
        <FeaturesLeftTitle
          title="VPS HOSTING"
          subTitle="Dedicated resources to scale."
          price="$3.99"
          buttonText="get started"
          route="products"
        />
      </section>
      {/* domain name checker section */}
      <section className="mt-24 pb-24 bg-white">
        <FeaturesRightTitle
          title="DOMAIN CHECKER"
          subTitle="Find the perfect domain name."
          price="$1.99"
          buttonText="get started"
          route="products"
        />
      </section>
    </>
  );
};

export default Products;
