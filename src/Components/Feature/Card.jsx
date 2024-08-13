import React from "react";

function Card({ title, description, heading, buttonText, color }) {
  return (
    <fieldset className="border border-gray-300 rounded-md p-4 relative m-2 sm:m-4 lg:m-5">
      <legend className="mx-auto px-2 text-center font-bold font-serif text-xl sm:text-2xl md:text-3xl" style={{ color }}>
        {title}
      </legend>
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{heading}</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 px-3 py-2">
          {description}
        </p>
        <button className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3" style={{ backgroundColor: color }}>
          {buttonText}
        </button>
      </div>
    </fieldset>
  );
}

export default Card;
