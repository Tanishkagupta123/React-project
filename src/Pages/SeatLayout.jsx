import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const seatPrices = { V: 400, P: 250, N: 150 };

const CinemaSeats = ({ movie, cinema, time }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const toggleSeat = (seat) => {
    if (selected.includes(seat)) {
      setSelected(selected.filter((s) => s !== seat));
    } else {
      setSelected([...selected, seat]);
    }
  };

  const Seat = ({ name }) => (
    <button
      onClick={() => toggleSeat(name)}
      className={`w-10 h-10 border rounded text-sm ${
        selected.includes(name) ? "bg-purple-600 text-white" : "hover:bg-gray-200"
      }`}
    >
      {name}
    </button>
  );

  const total = selected.reduce((sum, seat) => sum + seatPrices[seat[0]], 0);

  const handleBooking = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      alert("Please login first to book seats");
      return navigate("/login");
    }

    if (selected.length === 0) {
      alert("Please select at least 1 seat");
      return;
    }

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push({
      userEmail: loggedInUser.email,
      movie,
      cinema,
      time,
      seats: selected,
      total,
    });
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert(`Successfully booked ${selected.length} seat(s) for ${movie}`);
    navigate("/mybookings");
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-32"> {/* padding bottom for fixed footer */}
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-xl font-bold text-center mb-6">
          Select Your Seats 🎬
        </h1>

        {/* VIP */}
        <p className="font-semibold mb-2">VIP-400₹</p>
        <div className="flex gap-2 mb-6">
          {["V1","V2","V3","V4","V5","V6","V7","V8","V9","V10"].map(s => (
            <Seat key={s} name={s} />
          ))}
        </div>

        {/* PREMIUM */}
        <p className="font-semibold mb-2">PREMIUM-250₹</p>
        <div className="grid grid-cols-8 gap-2 mb-6">
          {Array.from({ length: 30 }, (_, i) => `P${i+1}`).map(s => (
            <Seat key={s} name={s} />
          ))}
        </div>

        {/* NORMAL */}
        <p className="font-semibold mb-2">NORMAL-150₹</p>
        <div className="grid grid-cols-6 gap-2 mb-6">
          {Array.from({ length: 18 }, (_, i) => `N${i+1}`).map(s => (
            <Seat key={s} name={s} />
          ))}
        </div>

        <p className="text-center text-gray-400 mt-4">SCREEN THIS WAY</p>
      </div>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50 border-t">
        <div>
          <p className="font-semibold">Selected: {selected.join(", ") || "None"}</p>
          <p className="font-semibold">Total: ₹{total}</p>
        </div>
        <button
          onClick={handleBooking}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Book Selected Seats
        </button>
      </div>
    </div>
  );
};

export default CinemaSeats;
