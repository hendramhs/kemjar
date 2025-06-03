"use client";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import Button from "../common/Button";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Beras Organik Premium",
      price: "Rp 25.000",
      originalPrice: "Rp 30.000",
      rating: 4.8,
      reviews: 124,
      image: "/api/placeholder/300/200",
      category: "Beras",
      farmer: "Pak Budi - Subang",
      discount: 17,
    },
    {
      id: 2,
      name: "Sayuran Hidroponik Segar",
      price: "Rp 15.000",
      originalPrice: "Rp 18.000",
      rating: 4.9,
      reviews: 89,
      image: "/api/placeholder/300/200",
      category: "Sayuran",
      farmer: "Bu Sari - Bandung",
      discount: 16,
    },
    {
      id: 3,
      name: "Buah Lokal Berkualitas",
      price: "Rp 35.000",
      originalPrice: "Rp 40.000",
      rating: 4.7,
      reviews: 156,
      image: "/api/placeholder/300/200",
      category: "Buah",
      farmer: "Pak Joko - Malang",
      discount: 12,
    },
    {
      id: 4,
      name: "Rempah Tradisional",
      price: "Rp 12.000",
      originalPrice: "Rp 15.000",
      rating: 4.6,
      reviews: 67,
      image: "/api/placeholder/300/200",
      category: "Rempah",
      farmer: "Bu Rina - Yogyakarta",
      discount: 20,
    },
    {
      id: 5,
      name: "Kopi Arabika Specialty",
      price: "Rp 85.000",
      originalPrice: "Rp 100.000",
      rating: 4.9,
      reviews: 203,
      image: "/api/placeholder/300/200",
      category: "Kopi",
      farmer: "Pak Ahmad - Aceh",
      discount: 15,
    },
    {
      id: 6,
      name: "Madu Hutan Asli",
      price: "Rp 65.000",
      originalPrice: "Rp 75.000",
      rating: 4.8,
      reviews: 91,
      image: "/api/placeholder/300/200",
      category: "Madu",
      farmer: "Pak Dedi - Sumatra",
      discount: 13,
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Produk Terbaik
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Produk Segar Langsung dari
            <span className="block text-green-600">Petani Lokal</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dapatkan produk pertanian berkualitas tinggi dengan harga terbaik
            langsung dari petani terpercaya di seluruh Indonesia.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <FadeIn
              key={product.id}
              direction="up"
              delay={index * 0.1}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center"
                  >
                    <div className="text-green-600 text-6xl font-bold opacity-20">
                      {product.category[0]}
                    </div>
                  </motion.div>

                  {/* Discount Badge */}
                  {product.discount && (
                    <motion.div
                      initial={{ scale: 0, rotate: -12 }}
                      animate={{ scale: 1, rotate: -12 }}
                      className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold"
                    >
                      -{product.discount}%
                    </motion.div>
                  )}

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors duration-300"
                    >
                      <Heart className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-blue-500 transition-colors duration-300"
                    >
                      <Eye className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500 mb-4">{product.farmer}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-green-600">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors duration-300"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-12">
          <Button size="lg" className="bg-green-500 hover:bg-green-600">
            Lihat Semua Produk
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Products;
