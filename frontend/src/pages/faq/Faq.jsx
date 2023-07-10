import React from "react";
import MainLayout from "../../components/MainLayout";

const FAQPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-40">
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Question 1?
            </h3>
            <p className="text-gray-600">Answer 1.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Question 2?
            </h3>
            <p className="text-gray-600">Answer 2.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Question 3?
            </h3>
            <p className="text-gray-600">Answer 3.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Question 4?
            </h3>
            <p className="text-gray-600">Answer 4.</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FAQPage;
