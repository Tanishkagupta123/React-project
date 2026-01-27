import React from "react";
import { useParams } from "react-router-dom";

const BookTicket = () => {
  const { movieName } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">
        Book Tickets for 🎬 {movieName}
      </h1>

      <div className="bg-white p-4 rounded shadow">
        <p className="mb-3 font-semibold">Select Show Time</p>

        <div className="flex gap-3 flex-wrap">
          <button className="border px-4 py-2 rounded">10:00 AM</button>
          <button className="border px-4 py-2 rounded">01:00 PM</button>
          <button className="border px-4 py-2 rounded">06:00 PM</button>
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
