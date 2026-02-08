import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const seatPrices = { V: 400, P: 250, N: 150 };

const CinemaSeats = () => {
  const navigate = useNavigate();
  const { movie, cinema, time } = useParams();

  const [selected, setSelected] = useState([]);

  const toggleSeat = (seat) => {
    setSelected((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const Seat = ({ name }) => (
    <button
      onClick={() => toggleSeat(name)}
      className={`w-10 h-10 border rounded text-sm ${
        selected.includes(name)
          ? "bg-purple-600 text-white"
          : "hover:bg-gray-200"
      }`}>
      {name}
    </button>
  );

  const total = selected.reduce(
    (sum, seat) => sum + seatPrices[seat[0]],
    0
  );

  const handleBooking = async () => {
    try {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

      if (!loggedInUser) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      if (selected.length === 0) {
        alert("Select at least one seat");
        return;
      }

      const bookingData = {
        userEmail: loggedInUser.email,
        movie,
        cinema,
        time,
        seats: selected,
        total,
      };

      const res = await fetch("http://localhost:3001/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (!res.ok) {
        throw new Error("Booking failed");
      }

      alert("🎉 Ticket booked successfully");
      navigate("/mybookings");

    } catch (error) {
      console.error(error);
      alert("Server error! Booking not saved.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-32">
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-xl font-bold text-center mb-4">
          {movie} 🎬 ({time})
        </h1>

        <p className="font-semibold mb-2">VIP – ₹400</p>
        <div className="flex gap-2 mb-6 flex-wrap">
          {["V1","V2","V3","V4","V5","V6","V7","V8","V9","V10"].map(s => (
            <Seat key={s} name={s} />
          ))}
        </div>

        <p className="font-semibold mb-2">PREMIUM – ₹250</p>
        <div className="grid grid-cols-8 gap-2 mb-6">
          {Array.from({ length: 30 }, (_, i) => `P${i + 1}`).map(s => (
            <Seat key={s} name={s} />
          ))}
        </div>

        <p className="font-semibold mb-2">NORMAL – ₹150</p>
        <div className="grid grid-cols-6 gap-2 mb-6">
          {Array.from({ length: 18 }, (_, i) => `N${i + 1}`).map(s => (
            <Seat key={s} name={s} />
          ))}
        </div>

        <p className="text-center text-gray-400 mt-4">
          SCREEN THIS WAY
        </p>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 flex justify-between items-center">
        <div>
          <p className="font-semibold">
            Seats: {selected.join(", ") || "None"}
          </p>
          <p className="font-semibold">Total: ₹{total}</p>
        </div>
        <button
          onClick={handleBooking}
          className="bg-indigo-600 text-white px-6 py-2 rounded"
        >
          Book Seats
        </button>
      </div>
    </div>
  );
};

export default CinemaSeats;
