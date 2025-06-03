'use client';

import { useState } from "react";
import Link from "next/link";

const Dashboard = () => {
  const [plants, setPlants] = useState([
    {
      id: 1,
      name: "Tomato Plant",
      status: "Healthy",
      plantedDate: "2024-03-15",
      nextWatering: "2024-03-20",
      location: "Field A",
    },
    // Add more sample plants here
  ]);

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
          <div className="flex justify-between items-center mt-32">
            <h1 className="text-2xl font-semibold text-gray-900">My Plants</h1>
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              Add New Plant
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900">Total Plants</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {plants.length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900">
              Healthy Plants
            </h3>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {plants.filter((p) => p.status === "Healthy").length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900">
              Needs Attention
            </h3>
            <p className="text-3xl font-bold text-yellow-600 mt-2">
              {plants.filter((p) => p.status !== "Healthy").length}
            </p>
          </div>
        </div>

        {/* Plants List */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plant Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Planted Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Next Watering
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {plants.map((plant) => (
                  <tr key={plant.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {plant.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          plant.status === "Healthy"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {plant.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {plant.plantedDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {plant.nextWatering}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {plant.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-green-600 hover:text-green-900 mr-3">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
