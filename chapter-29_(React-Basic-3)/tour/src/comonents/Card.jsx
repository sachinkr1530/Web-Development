



import { useState } from "react";

function Card({ id, info, image, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 150)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 border">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded" />
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-bold text-gray-800">{name}</h4>
          <h4 className="text-lg font-semibold text-green-600">{price}</h4>
        </div>
        <p className="text-gray-700 text-sm">
          {description}
          <span
            className="text-blue-500 cursor-pointer ml-1"
            onClick={readmoreHandler}
          >
            {readmore ? "show less" : "read more"}
          </span>
        </p>
        <button
          className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Card;
