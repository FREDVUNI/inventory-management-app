import React from "react";
import { FiPackage, FiShoppingCart, FiBarChart2 } from "react-icons/fi";
import { images } from "../../../constants";

const About = () => {
  return (
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
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Efficiently Manage Your Inventory
          </h2>
          <p className="text-gray-600 text-lg">
            Our inventory management app provides powerful tools to help you
            keep track of your inventory, monitor stock levels, and streamline
            your operations. Whether you have a small business or a large
            enterprise, our app is designed to meet your needs and simplify your
            inventory management process.
          </p>
        </div>
      </div>

      <div className="mt-32">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              <FiPackage className="inline-block mr-2 text-primary" />
              Inventory Tracking
            </h3>
            <p className="text-gray-600">
              Easily keep track of your inventory items, including their
              quantities, locations, and other relevant information. Get
              real-time updates on stock levels and easily manage inventory
              replenishment.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              <FiShoppingCart className="inline-block mr-2 text-primary" />
              Order Management
            </h3>
            <p className="text-gray-600">
              Streamline your order management process by generating purchase
              orders, tracking sales orders, and managing order fulfillment.
              Maintain accurate records of customer orders and ensure timely
              delivery.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              <FiBarChart2 className="inline-block mr-2 text-primary" />
              Reporting and Analytics
            </h3>
            <p className="text-gray-600">
              Gain valuable insights into your inventory performance with
              comprehensive reporting and analytics. Analyze sales trends,
              identify popular products, and make data-driven decisions to
              optimize your inventory management strategy.
            </p>
          </div>
        </div>
      </div>

      <div className="py-32">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Get Started Today
        </h2>

        <p className="text-gray-600 text-lg">
          Ready to take control of your inventory? Sign up for our inventory
          management app today and experience the benefits of efficient
          inventory management. Start maximizing your productivity and
          minimizing stock-related issues.
        </p>

        <div className="flex mt-8">
          <button className="bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-dark">
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
