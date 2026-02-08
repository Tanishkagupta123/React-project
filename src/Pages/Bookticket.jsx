import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookTicket = () => {
  const { movieName } = useParams();
  const navigate = useNavigate();

  // ✅ Login check
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    alert("Please signup or login first to book tickets");
    navigate("/signup");
  }

  const cinemas = [
    { name: "Cinepolis DB Mall", timings: ["10:05 AM", "01:15 PM", "06:25 PM"] },
    { name: "Wave Cinemas Arera Hills", timings: ["11:00 AM", "02:30 PM", "07:15 PM"] },
    { name: "Inox Capital Mall", timings: ["10:30 AM", "01:45 PM", "05:45 PM"] },
    { name: "PVR Bhopal City Mall", timings: ["09:50 AM", "12:50 PM", "04:50 PM"] },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🎬 {movieName} – Bhopal</h1>

      {cinemas.map((cinema, index) => (
        <div key={index} className="bg-white p-4 rounded shadow mb-6">
          <h2 className="font-semibold mb-3">{cinema.name}</h2>
          <div className="flex gap-3 flex-wrap">
            {cinema.timings.map((time, idx) => (
              <button
                key={idx}
                onClick={() =>
                 navigate(`/seats/${movieName}/${cinema.name}/${time}`)

                }

                className="border px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookTicket;
