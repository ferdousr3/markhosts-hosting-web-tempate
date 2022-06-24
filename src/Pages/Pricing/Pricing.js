import React from "react";
import HeaderPageTitle from "../../components/PageTitle/HeaderPageTitle";
import PageTitle from "../../components/PageTitle/PageTitle";
import PriceList from "./PriceList/PriceList";

const Pricing = () => {
  return (
    <>
      {/* SEO page Title */}
      <HeaderPageTitle title="Shared Hosting" />
      {/* main page title */}
      <section className="pt-24 main-bg pb-24">
        <PageTitle
          title="Product Pricing"
          description="Everything you may need for a successful online project."
        />
      </section>
      <section className="py-24">
        <PriceList />
      </section>
    </>
  );
};

export default Pricing;
