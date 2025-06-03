import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Pak Budi Santoso",
      role: "Petani Padi - Subang",
      content:
        "AgriTech benar-benar mengubah cara saya bertani. Hasil panen meningkat 150% dan saya bisa memantau sawah dari rumah.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
    },
    {
      name: "Bu Sari Dewi",
      role: "Petani Sayuran - Bandung",
      content:
        "Sistem monitoring yang canggih membantu saya mengoptimalkan penggunaan air dan pupuk. Sangat efisien!",
      rating: 5,
      avatar: "/api/placeholder/60/60",
    },
    {
      name: "Pak Joko Widodo",
      role: "Petani Buah - Malang",
      content:
        "Marketplace AgriTech memudahkan saya menjual hasil panen langsung ke konsumen dengan harga yang lebih baik.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
    },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Apa Kata <span className="text-green-600">Petani</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman nyata dari ribuan petani yang telah merasakan
            manfaat teknologi AgriTech.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} direction="up" delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-green-500 mb-6" />

                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-lg">
                      {testimonial.name.split(" ")[1][0]}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
