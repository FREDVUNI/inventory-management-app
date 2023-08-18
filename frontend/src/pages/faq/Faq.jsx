import React from "react";
import MainLayout from "../../components/MainLayout";
import CTATestimonial from "../shared/CTATestimonial";
import { Link } from "react-router-dom";
import { images } from "../../constants";

const FAQPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto px-5 text-lg">
        <div className="container my-24 mx-auto md:px-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="mb-6 md:mb-0">
              <h2 className="mb-6 text-3xl font-bold text-gray-800">
                Frequently asked questions
              </h2>

              <p className="text-neutral-500 dark:text-neutral-300 ">
                Didn't find your answer in the FAQ?
                <Link
                  to="/contact"
                  className="text-primary ml-3 transition duration-300 hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Contact our sales team
                </Link>
                .
              </p>
              <img
                className="w-full"
                src={images.AboutImage}
                alt="Inventory Management"
              />
            </div>

            <div className="mb-6 md:mb-0">
              <p className="mb-4 font-bold">
                Anim pariatur cliche reprehenderit?
              </p>
              <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                autem numquam dolore molestias aperiam culpa alias veritatis
                architecto eos, molestiae vitae ex eligendi libero eveniet
                dolorem, doloremque rem aliquid perferendis.
              </p>

              <p className="mb-4 font-bold">
                Non cupidatat skateboard dolor brunch?
              </p>
              <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                Distinctio corporis, iure facere ducimus quos consectetur ipsa
                ut magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed
                fugit iusto minus et suscipit? Minima sunt at nulla tenetur,
                numquam unde quod modi magnam ab deserunt ipsam sint aliquid
                dolores libero repellendus cupiditate mollitia quidem dolorem
                odit
              </p>

              <p className="mb-4 font-bold">
                Praesentium voluptatibus temporibus consequatur non aspernatur?
              </p>
              <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
                deserunt ipsam sint aliquid dolores libero repellendus
                cupiditate mollitia quidem dolorem.
              </p>
            </div>
          </div>
        </div>
        <CTATestimonial />
      </section>
    </MainLayout>
  );
};

export default FAQPage;
