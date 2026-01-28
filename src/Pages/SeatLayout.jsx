import React, { useState } from "react";

const CinemaSeats = () => {
  const [selected, setSelected] = useState([]);

  const toggleSeat = (seat) => {
    if (selected.includes(seat)) {
      setSelected(selected.filter(s => s !== seat));
    } else {
      setSelected([...selected, seat]);
    }
  };

  const Seat = ({ name }) => (
    <button
      onClick={() => toggleSeat(name)}
      className={`w-10 h-10 border rounded text-sm
        ${selected.includes(name)
          ? "bg-purple-600 text-white"
          : "hover:bg-gray-200"}
      `}
    >
      {name}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-full max-w-xl">

        <h1 className="text-xl font-bold text-center mb-6">
          Select Your Seats 🎬
        </h1>

        {/* VIP */}
        <p className="font-semibold mb-2">VIP – ₹400</p>
        <div className="flex gap-2 mb-6">
          <Seat name="V1" />
          <Seat name="V2" />
          <Seat name="V3" />
          <Seat name="V4" />
          <Seat name="V5" />

          <Seat name="V6" />

          <Seat name="V7" />

          <Seat name="V8" />

          <Seat name="V9" />


          <Seat name="V10" />



        </div>

        {/* PREMIUM */}
        <p className="font-semibold mb-2">PREMIUM – ₹250</p>
        <div className="grid grid-cols-8 gap-2 mb-6">
          <Seat name="P1" /><Seat name="P2" /><Seat name="P3" /><Seat name="P4" />
          <Seat name="P5" /><Seat name="P6" /><Seat name="P7" /><Seat name="P8" />
          <Seat name="P9" /><Seat name="P10" /><Seat name="P11" /><Seat name="P12" />
          <Seat name="P13" /><Seat name="P14" /><Seat name="P15" /><Seat name="P16" />
          <Seat name="P17" /><Seat name="P18" /><Seat name="P19" /><Seat name="P20" />

          <Seat name="P21" /><Seat name="P22" /><Seat name="P23" /><Seat name="P24" />

          <Seat name="P25" /><Seat name="P26" /><Seat name="P27" /><Seat name="P28" />
          <Seat name="P29" /><Seat name="P30" />

        </div>

        {/* NORMAL */}
        <p className="font-semibold mb-2">NORMAL – ₹150</p>
        <div className="grid grid-cols-6 gap-2 mb-6">
          <Seat name="N1" /><Seat name="N2" /><Seat name="N3" />
          <Seat name="N4" /><Seat name="N5" /><Seat name="N6" />
          <Seat name="N7" /><Seat name="N8" /><Seat name="N9" />
          <Seat name="N10" /><Seat name="N11" /><Seat name="N12" />
          <Seat name="N13" /><Seat name="N14" /><Seat name="N15" />

          <Seat name="N16" /><Seat name="N17" /><Seat name="N18" />

        </div>

        <p className="text-center text-gray-400 mt-4">
          SCREEN THIS WAY
        </p>

      </div>
    </div>
  );
};

export default CinemaSeats;
