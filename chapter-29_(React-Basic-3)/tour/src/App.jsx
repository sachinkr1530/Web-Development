import React, { useState } from "react";
import data from "./comonents/data.jsx";

import Tours from "./comonents/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {tours.length > 0 ? (
        <Tours tours={tours} removeTour={removeTour} />
      ) : (
        <div className="text-center mt-20 text-2xl text-gray-700">
          No Tours Left
        </div>
      )}
    </div>
  );
};

export default App;
