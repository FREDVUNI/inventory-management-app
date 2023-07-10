import React from "react";
import MainLayout from "../../components/MainLayout";

const PricingPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Basic</h3>
            <p className="text-gray-600">$9.99/month</p>
            <ul className="mt-4">
              <li className="text-gray-600">Feature 1</li>
              <li className="text-gray-600">Feature 2</li>
              <li className="text-gray-600">Feature 3</li>
            </ul>
            <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 mt-6">
              Get Started
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Pro</h3>
            <p className="text-gray-600">$19.99/month</p>
            <ul className="mt-4">
              <li className="text-gray-600">Feature 1</li>
              <li className="text-gray-600">Feature 2</li>
              <li className="text-gray-600">Feature 3</li>
            </ul>
            <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 mt-6">
              Get Started
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Enterprise
            </h3>
            <p className="text-gray-600">Contact us for pricing</p>
            <ul className="mt-4">
              <li className="text-gray-600">Feature 1</li>
              <li className="text-gray-600">Feature 2</li>
              <li className="text-gray-600">Feature 3</li>
            </ul>
            <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 mt-6">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PricingPage;
