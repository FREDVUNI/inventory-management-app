import React from "react";
import MainLayout from "../../components/MainLayout";
import CTATestimonial from "../shared/CTATestimonial";

const PricingPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto px-5 mt-25">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="grid items-center lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
              <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                <h2 className="mb-6 pb-2 text-4xl font-bold">
                  One-time payment
                </h2>
                <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  soluta corporis voluptate ab error quam dolores doloremque,
                  quae consectetur.
                </p>
                <div className="mb-6 flex flex-wrap">
                  <div className="mb-4 w-full md:w-4/12">
                    <p className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Support 24/7
                    </p>
                  </div>
                  <div className="mb-4 w-full md:w-4/12">
                    <p className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Analytics
                    </p>
                  </div>
                  <div className="mb-4 w-full md:w-4/12">
                    <p className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Components
                    </p>
                  </div>
                  <div className="mb-4 w-full md:w-4/12">
                    <p className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Updates
                    </p>
                  </div>
                  <div className="mb-4 w-full md:w-4/12">
                    <p className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Reports
                    </p>
                  </div>
                  <div className="mb-4 w-full md:w-4/12">
                    <p className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5 text-neutral-900 dark:text-neutral-50"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Mobile
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-block rounded bg-neutral-800 px-12 pt-3.5 pb-3 text-sm font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-50 dark:text-neutral-800 dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Buy now
                </button>
              </div>
            </div>

            <div>
              <img
                src="https://tecdn.b-cdn.net/img/new/ecommerce/vertical/132.jpg"
                className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt="pricing"
              />
            </div>
          </div>
        </div>
        <CTATestimonial />
      </section>
    </MainLayout>
  );
};

export default PricingPage;
