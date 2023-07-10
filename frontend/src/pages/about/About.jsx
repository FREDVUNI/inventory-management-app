import React from "react";
import MainLayout from "../../components/MainLayout";
import { images } from "../../constants";

const AboutPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto px-5 mt-25">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2">
            <img
              className="w-full"
              src={images.HeroImage}
              alt="Inventory Management"
            />
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-xl font-bold text-gray-800 mb-4">About us</h2>
            <p className="text-gray-600 text-lg">
              Our inventory management app provides powerful tools to help you
              keep track of your inventory, monitor stock levels, and streamline
              your operations. Whether you have a small business or a large
              enterprise, our app is designed to meet your needs and simplify
              your inventory management process.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
