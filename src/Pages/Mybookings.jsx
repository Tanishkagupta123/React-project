import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const navigate = useNavigate();
  const [myBookings, setMyBookings] = useState([]);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    return (
      <p className="text-center mt-10">
        Please login to view your bookings
      </p>
    );
  }

  useEffect(() => {
    fetch("http://localhost:3001/bookings")
      .then((res) => res.json())
      .then((data) => {
        const userBookings = data.filter(
          (b) => b.userEmail === loggedInUser.email
        );
        setMyBookings(userBookings);
      });
  }, []);

  const cancelBooking = (id) => {
    if (!window.confirm("Are you sure you want to cancel this ticket?")) {
      return;
    }

    fetch(`http://localhost:3001/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Delete failed");
        }
    
        setMyBookings((prev) => prev.filter((b) => b.id !== id));
        alert("Ticket cancelled successfully");
      })
      .catch(() => {
        alert("Error cancelling ticket");
      });
  };


  if (myBookings.length === 0) {
    return <p className="text-center mt-10">No bookings yet</p>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">
        My Bookings
      </h1>

      {myBookings.map((b) => (
        <div
          key={b.id}
          className="bg-white p-4 rounded shadow mb-4"
        >
          <h2 className="font-semibold text-lg">{b.movie}</h2>
          <p>{b.cinema}</p>
          <p>{b.time}</p>
          <p>
            Seats: <strong>{b.seats.join(", ")}</strong>
          </p>
          <p className="font-semibold">
            Total Paid: ₹{b.total}
          </p>

          <button
            onClick={() => cancelBooking(b.id)}
            className="mt-2 bg-red-600 text-white px-4 py-1 rounded"
          >
            Cancel Ticket
          </button>

        </div>
      ))}
    </div>
  );
};

export default MyBookings;
