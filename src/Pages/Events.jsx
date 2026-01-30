import React from "react";

const Events = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">

      <div className="w-full px-8 py-12">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Events In Bhopal
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <div className="relative">
              <img src="/telling lies.jpg" className="w-full h-64 object-cover" />
              <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                PROMOTED
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">
                Telling Lies - Standup Show
              </h3>
              <p className="text-sm text-gray-600 mt-1">Fri, 20 Mar</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <div className="relative">
              <img src="/zakir khan.webp" className="w-full h-64 object-cover" />
              <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                PROMOTED
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Zakir Khan Live</h3>
              <p className="text-sm text-gray-600 mt-1">Sat, 24 Jan onwards</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <img src="/sanam.jpg" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">
                Sanam Live Concert
              </h3>
              <p className="text-sm text-gray-600 mt-1">Sun, 25 Jan</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <img src="/harsh.jpg" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">
                Harsh Gujral Live
              </h3>
              <p className="text-sm text-gray-600 mt-1">Mon, 2 Feb</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <img src="/kidss.jpg" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">
                Kids Fun Carnival
              </h3>
              <p className="text-sm text-gray-600 mt-1">Sat, 10 Feb</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <img src="/workshop.avif" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">
                Creative Art Workshop
              </h3>
              <p className="text-sm text-gray-600 mt-1">Sun, 18 Feb</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <div className="relative">
              <img src="/lough.webp" className="w-full h-64 object-cover" />
              <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                PROMOTED
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">
                Comedy Nights - Laugh Riot
              </h3>
              <p className="text-sm text-gray-600 mt-1">Fri, 20 Mar</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <div className="relative">
              <img src="/open.jpg" className="w-full h-64 object-cover" />
              <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                PROMOTED
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">
                Open Mic Night - Standup & Poetry
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Sat, 24 Jan onwards
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <img src="/bollywood.webp" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">
                Bollywood Beats - Live Music Night
              </h3>
              <p className="text-sm text-gray-600 mt-1">Sun, 25 Jan</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <img src="/drama.webp" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">
                Drama Theatre Performance
              </h3>
              <p className="text-sm text-gray-600 mt-1">Mon, 2 Feb</p>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-gray-900 text-gray-300 text-center py-6 mt-16">
        © 2026 MovieBook • Events • Fun • Entertainment
      </div>
    </div>
  );
};

export default Events;
