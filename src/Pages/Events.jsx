import React from "react";

const Events = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* TOP BAR (simple) */}
      <div className="w-full bg-white shadow-sm">
       </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT FILTERS */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Filters</h2>

            {/* Date */}
            <div className="border rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-gray-800">Date</p>
                <p className="text-sm text-red-500 font-semibold cursor-pointer">
                  Clear
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button className="border px-3 py-1 rounded-md text-sm hover:bg-gray-50">
                  Today
                </button>
                <button className="border px-3 py-1 rounded-md text-sm hover:bg-gray-50">
                  Tomorrow
                </button>
                <button className="border px-3 py-1 rounded-md text-sm hover:bg-gray-50">
                  This Weekend
                </button>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <input type="checkbox" />
                <span className="text-sm text-gray-600">Date Range</span>
              </div>
            </div>

            {/* Languages */}
            <div className="border rounded-lg p-4 mb-4 flex items-center justify-between">
              <p className="font-semibold text-gray-800">Languages</p>
              <p className="text-sm text-red-500 font-semibold cursor-pointer">
                Clear
              </p>
            </div>

            {/* Categories */}
            <div className="border rounded-lg p-4 mb-4 flex items-center justify-between">
              <p className="font-semibold text-gray-800">Categories</p>
              <p className="text-sm text-red-500 font-semibold cursor-pointer">
                Clear
              </p>
            </div>

            {/* More Filters */}
            <div className="border rounded-lg p-4 flex items-center justify-between">
              <p className="font-semibold text-gray-800">More Filters</p>
              <p className="text-sm text-red-500 font-semibold cursor-pointer">
                Clear
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT EVENTS */}
        <div className="lg:col-span-9">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Events In Bhopal
          </h2>

          {/* CATEGORY BUTTONS */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button className="px-4 py-2 rounded-full border border-red-500 text-red-500 font-semibold hover:bg-red-50">
              Comedy Shows
            </button>
            <button className="px-4 py-2 rounded-full border border-red-500 text-red-500 font-semibold hover:bg-red-50">
              Music Shows
            </button>
            <button className="px-4 py-2 rounded-full border border-red-500 text-red-500 font-semibold hover:bg-red-50">
              Workshops
            </button>
            <button className="px-4 py-2 rounded-full border border-red-500 text-red-500 font-semibold hover:bg-red-50">
              Kids
            </button>
            <button className="px-4 py-2 rounded-full border border-red-500 text-red-500 font-semibold hover:bg-red-50">
              Performances
            </button>
          </div>

          {/* EVENT CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">

            {/* CARD 1 */}
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative">
                <img
                  src="/telling lies.jpg"
                  alt="Event"
                  className="w-full h-75 object-cover"
                />
                <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  PROMOTED
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-900">
                  Telling Lies - Standup Show
                </h3>
                <p className="text-sm text-gray-600 mt-1">Fri, 20 Mar</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative">
                <img
                  src="/zakir khan.webp"
                  alt="Event"
                  className="w-full h-75 object-cover"
                />
                <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  PROMOTED
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-900">
                  Zakir Khan  
                </h3>
                <p className="text-sm text-gray-600 mt-1">Sat, 24 Jan onwards</p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="/sanam.jpg"
                alt="Event"
                className="w-full h-75 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-gray-900">Sanam Live Concert</h3>
                <p className="text-sm text-gray-600 mt-1">Sun, 25 Jan</p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="/harsh.jpg"
                alt="Event"
                className="w-full h-75 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-gray-900">Harsh Gujral Live</h3>
                <p className="text-sm text-gray-600 mt-1">Mon, 2 Feb</p>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="/kidss.jpg"
                alt="Event"
                className="w-full h-75 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-gray-900">Kids Fun Carnival</h3>
                <p className="text-sm text-gray-600 mt-1">Sat, 10 Feb</p>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="/workshop.avif"
                alt="Event"
                className="w-full h-75 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-gray-900">
                  Creative Art Workshop
                </h3>
                <p className="text-sm text-gray-600 mt-1">Sun, 18 Feb</p>
              </div>
            </div>

            {/* neww */}

            {/* CARD 1 */}
<div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
  <div className="relative">
    <img
      src="/lough.webp"
      alt="Event"
      className="w-full h-75 object-cover"
    />
    <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
      PROMOTED
    </span>
  </div>
  <div className="p-3">
    <h3 className="font-semibold text-gray-900">
      Comedy Nights - Laugh Riot Show
    </h3>
    <p className="text-sm text-gray-600 mt-1">Fri, 20 Mar</p>
  </div>
</div>

{/* CARD 2 */}
<div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
  <div className="relative">
    <img
      src="/open.jpg"
      alt="Event"
      className="w-full h-75 object-cover"
    />
    <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
      PROMOTED
    </span>
  </div>
  <div className="p-3">
    <h3 className="font-semibold text-gray-900">
      Open Mic Night - Standup & Poetry
    </h3>
    <p className="text-sm text-gray-600 mt-1">Sat, 24 Jan onwards</p>
  </div>
</div>

{/* CARD 3 */}
<div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
  <img
    src="/bollywood.webp"
    alt="Event"
    className="w-full h-75 object-cover"
  />
  <div className="p-3">
    <h3 className="font-semibold text-gray-900">
      Bollywood Beats - Live Music Night
    </h3>
    <p className="text-sm text-gray-600 mt-1">Sun, 25 Jan</p>
  </div>
</div>

{/* CARD 4 */}
<div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
  <img
    src="/drama.webp"
    alt="Event"
    className="w-full h-75 object-cover"
  />
  <div className="p-3">
    <h3 className="font-semibold text-gray-900">
      Drama Theatre - Stage Performance
    </h3>
    <p className="text-sm text-gray-600 mt-1">Mon, 2 Feb</p>
  </div>
</div>

{/* CARD 5 */}
<div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
  <img
    src="/food.webp"
    alt="Event"
    className="w-full h-75 object-cover"
  />
  <div className="p-3">
    <h3 className="font-semibold text-gray-900">
      Food Fest & Fun Carnival
    </h3>
    <p className="text-sm text-gray-600 mt-1">Sat, 10 Feb</p>
  </div>
</div>

{/* CARD 6 */}
<div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
  <img
    src="/photo.jpg"
    alt="Event"
    className="w-full h-75 object-cover"
  />
  <div className="p-3">
    <h3 className="font-semibold text-gray-900">
      Photography Workshop - Beginner Level
    </h3>
    <p className="text-sm text-gray-600 mt-1">Sun, 18 Feb</p>
  </div>
</div>


          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
        © 2026 MovieBook • Events • Fun • Entertainment
      </div>
    </div>
  );
};

export default Events;
