
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ReviewForm from "./ReviewForm";
import ReviewsDisplay from "./ReviewsDisplay";

const Reviews = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="reviews" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Client Reviews
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            See what our clients say about working with Phaemos Technologies
          </p>
          
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            {showForm ? "View Reviews" : "Leave a Review"}
          </Button>
        </div>

        {showForm ? (
          <div className="max-w-2xl mx-auto">
            <ReviewForm />
          </div>
        ) : (
          <ReviewsDisplay />
        )}
      </div>
    </section>
  );
};

export default Reviews;
