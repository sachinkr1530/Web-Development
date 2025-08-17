



import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center my-8">Plan with Sachin</h2>
      <div className="flex flex-wrap justify-center">
        {tours.map((tour) => (
          <Card key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </div>
  );
}

export default Tours;
