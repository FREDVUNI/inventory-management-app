import React from "react";
import { FiPackage, FiShoppingCart, FiBarChart2 } from "react-icons/fi";
import { images } from "../../../constants";
import CTATestimonial from "../../shared/CTATestimonial";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-6">
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

          <div className="bg-white shadow rounded-lg p-6">
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

          <div className="bg-white shadow rounded-lg p-6">
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
      <div class="container my-24 mx-auto md:px-6">
        <section class="mb-2">
          <div class="flex justify-center">
            <div class="container mx-auto md:px-6">
              <h2 class="mb-12 text-3xl font-bold">Features</h2>
            </div>
          </div>

          <div class="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            <div class="mb-12">
              <div class="flex">
                <div class="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="ml-2 grow">
                  <p class="mb-1 font-bold">Support 24/7</p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                    Pellentesque mollis, metus nec fringilla aliquam
                  </p>
                </div>
              </div>
            </div>

            <div class="mb-12">
              <div class="flex">
                <div class="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="ml-2 grow">
                  <p class="mb-1 font-bold">Tracking</p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                    Magna lacus iaculis elit, quis pharetra varius.
                  </p>
                </div>
              </div>
            </div>

            <div class="mb-12">
              <div class="flex">
                <div class="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="ml-2 grow">
                  <p class="mb-1 font-bold">Reporting</p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                    Pellentesque varius ex vel consequat quis.
                  </p>
                </div>
              </div>
            </div>

            <div class="mb-12">
              <div class="flex">
                <div class="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="ml-2 grow">
                  <p class="mb-1 font-bold">Analytics</p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                    Vestibulum gravida iaculis nisl, vel lobortis eros.
                  </p>
                </div>
              </div>
            </div>

            <div class="mb-12">
              <div class="flex">
                <div class="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="ml-2 grow">
                  <p class="mb-1 font-bold">Huge community</p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                    Praesent vulputate lacus bibendum augue .
                  </p>
                </div>
              </div>
            </div>

            <div class="mb-12">
              <div class="flex">
                <div class="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="ml-2 grow">
                  <p class="mb-1 font-bold">Easy to use</p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                    Sed mauris ex, imperdiet sit amet nisl ac, ultrices.
                  </p>
                </div>
              </div>
            </div>

            <div class="mb-12">
              <div class="flex">
                <div class="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="ml-2 grow">
                  <p class="mb-1 font-bold">Frequent updates</p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                    Aenean lectus ex, placerat id tellus in eros.
                  </p>
                </div>
              </div>
            </div>

            <div class="mb-12">
              <div class="flex">
                <div class="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="ml-2 grow">
                  <p class="mb-1 font-bold">Responsive</p>
                  <p class="text-neutral-500 dark:text-neutral-300">
                    Donec consequat orci quis volutpat imperdiet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CTATestimonial/>
    </section>
  );
};

export default About;
