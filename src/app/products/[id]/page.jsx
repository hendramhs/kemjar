'use client';

import { useState } from "react";

const ProductDetail = ({ params }) => {
  const { id } = params;
  const [product] = useState({
    id: 1,
    name: "Premium Organic Tomatoes",
    description:
      "Sustainably grown, hand-picked organic tomatoes from our local farms. Rich in flavor and nutrients.",
    price: 4.99,
    unit: "kg",
    images: [
      "/images/tomato-hero.jpg",
      "/images/tomato-detail-1.jpg",
      "/images/tomato-detail-2.jpg",
    ],
    details: {
      origin: "Local Farm, Indonesia",
      harvestDate: "2024-03-15",
      certification: "Organic Certified",
      nutritionalInfo: {
        calories: "22 kcal/100g",
        vitamins: "A, C, K",
        minerals: "Potassium, Folate",
      },
    },
  });

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={product.images[selectedImage]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center max-w-4xl">
            {product.name}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Product Details
            </h2>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-8">{product.description}</p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Origin
                  </h3>
                  <p className="text-gray-600">{product.details.origin}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Harvest Date
                  </h3>
                  <p className="text-gray-600">{product.details.harvestDate}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Certification
                  </h3>
                  <p className="text-gray-600">
                    {product.details.certification}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Nutritional Information
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-600">
                    Calories: {product.details.nutritionalInfo.calories}
                  </li>
                  <li className="text-gray-600">
                    Vitamins: {product.details.nutritionalInfo.vitamins}
                  </li>
                  <li className="text-gray-600">
                    Minerals: {product.details.nutritionalInfo.minerals}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Purchase */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="text-gray-600">per {product.unit}</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-gray-700">
                    Quantity ({product.unit})
                  </label>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
                <button className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-900 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg ${
                    selectedImage === index ? "ring-2 ring-green-500" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
