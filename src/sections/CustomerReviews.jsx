import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h2 className="font-palanquin font-bold text-center text-4xl">
        What Our <span className="text-coral-red">Customers</span> Say ?
      </h2>
      <p className="info-text text-lg mt-4 m-auto max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex justify-evenly flex-1 mt-24 items-center gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
