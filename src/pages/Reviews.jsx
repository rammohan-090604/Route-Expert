import React from 'react';
import ReviewCard from './ReviewsCard';

const Reviews = () => {
  const reviews = [
    {
      image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      rating: 4,
      name: 'Paul Starr',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!',
    },
    {
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80',
      rating: 5,
      name: 'Jane Doe',
      description: 'This is an amazing product! I highly recommend it to everyone.',
    },
    {
      image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80',
      rating: 3,
      name: 'John Smith',
      description: 'The product is good, but the service could be improved.',
    },
    {
      image: 'https://images.unsplash.com/photo-1528763380143-dbcbc510a54d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80',
      rating: 4,
      name: 'Alice Brown',
      description: 'Great value for the price. I would buy again.',
    },
    {
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80',
      rating: 5,
      name: 'Sarah Connor',
      description: 'Absolutely love it! Exceeded my expectations in every way.',
    },
  ];

  return (
    <div className="relative min-h-screen  overflow-hidden">
      <section className="bg-transparent py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                image={review.image}
                rating={review.rating}
                name={review.name}
                description={review.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
