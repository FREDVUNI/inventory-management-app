import React from "react";

import MainLayout from "../../components/MainLayout";
import CTA from "./container/CTA";
import Hero from "./container/Hero";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
