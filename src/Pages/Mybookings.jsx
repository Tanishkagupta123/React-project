import React from "react";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    return (
      <p className="text-center mt-10">
        Please login to view your bookings
      </p>
    );
  }

  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  // 🔥 ONLY LOGGED-IN USER BOOKINGS
  const myBookings = bookings.filter(
    (b) => b.userEmail === loggedInUser.email
  );

  if (myBookings.length === 0) {
    return <p className="text-center mt-10">No bookings yet</p>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">
        My Bookings
      </h1>

      {myBookings.map((b, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded shadow mb-4"
        >
          <h2 className="font-semibold text-lg">
            {b.movie}
          </h2>
          <p>{b.cinema}</p>
          <p>{b.time}</p>
          <p>
            Seats: <strong>{b.seats.join(", ")}</strong>
          </p>
          <p className="font-semibold">
            Total Paid: ₹{b.total}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
