import React from "react";
import { Helmet } from "react-helmet-async";

const HeaderPageTitle = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title} | MarkHosts</title>
      </Helmet>
    </>
  );
};

export default HeaderPageTitle;
