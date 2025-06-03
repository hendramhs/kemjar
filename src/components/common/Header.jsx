'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Beranda", to: "/" },
    { name: "Dashboard", to: "/dashboard" },
    { name: "Tentang", to: "/about" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => router.push('/')}
            style={{ cursor: "pointer" }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              AgriTech
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={item.to}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    scrolled
                      ? "text-gray-700 hover:text-green-600"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <motion.div
            className="hidden lg:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/auth/login')}
              className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-300"
            >
              Masuk
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/auth/register')}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Daftar
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.to}
                className="block text-gray-700 hover:text-green-600 font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <div className="space-y-2">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => {
                router.push("/auth/login"); {/* Ubah navigate menjadi router.push */}
                setIsOpen(false);
              }}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-full font-medium"
            >
              Masuk
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => {
                router.push("/auth/register"); {/* Ubah navigate menjadi router.push */}
                setIsOpen(false);
              }}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-full font-medium shadow-lg"
            >
              Daftar
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
