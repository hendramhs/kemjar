'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import PlantForm from "../../components/forms/PlantForm";
import DeleteConfirmation from "../../components/common/DeleteConfirmation";

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

  // State untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentPlant, setCurrentPlant] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    status: "Healthy",
    plantedDate: "",
    nextWatering: "",
    location: "",
  });

  // Open modal for adding new plant
  const openAddModal = () => {
    setCurrentPlant(null);
    setFormData({
      name: "",
      status: "Healthy",
      plantedDate: "",
      nextWatering: "",
      location: "",
    });
    setIsModalOpen(true);
  };

  // Open modal for editing plant
  const openEditModal = (plant) => {
    setCurrentPlant(plant);
    setFormData({
      name: plant.name,
      status: plant.status,
      plantedDate: plant.plantedDate,
      nextWatering: plant.nextWatering,
      location: plant.location,
    });
    setIsModalOpen(true);
  };

  // Open delete confirmation modal
  const openDeleteModal = (plant) => {
    setCurrentPlant(plant);
    setIsDeleteModalOpen(true);
  };

  // Handle form submission
  const handleFormSubmit = (data) => {
    if (currentPlant) {
      // Update existing plant
      const updatedPlants = plants.map((plant) =>
        plant.id === currentPlant.id ? { ...plant, ...data } : plant
      );
      setPlants(updatedPlants);
    } else {
      // Add new plant
      const newPlant = {
        id: plants.length > 0 ? Math.max(...plants.map(p => p.id)) + 1 : 1,
        ...data,
      };
      setPlants([...plants, newPlant]);
    }
    
    // Close modal and reset form
    setIsModalOpen(false);
    setCurrentPlant(null);
  };

  // Handle plant deletion
  const handleDelete = () => {
    if (currentPlant) {
      const updatedPlants = plants.filter((plant) => plant.id !== currentPlant.id);
      setPlants(updatedPlants);
      setIsDeleteModalOpen(false);
      setCurrentPlant(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center mt-32">
            <h1 className="text-2xl font-semibold text-gray-900">My Plants</h1>
            <button 
              onClick={openAddModal}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
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
                  <tr key={plant.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {plant.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${plant.status === "Healthy"
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
                      <button 
                        onClick={() => openEditModal(plant)}
                        className="text-green-600 hover:text-green-900 mr-3 flex items-center gap-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                      </button>
                      <button 
                        onClick={() => openDeleteModal(plant)}
                        className="text-red-600 hover:text-red-900 flex items-center gap-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
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

      {/* Komponen Form */}
      <AnimatePresence>
        <PlantForm 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFormSubmit}
          currentPlant={currentPlant}
          formData={formData}
          setFormData={setFormData}
        />
      </AnimatePresence>

      {/* Komponen Delete Confirmation */}
      <AnimatePresence>
        <DeleteConfirmation 
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDelete}
          itemName={currentPlant?.name || ""}
        />
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
