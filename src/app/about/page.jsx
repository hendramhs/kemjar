export default function About() {
    const stats = [
      { label: "Years of Experience", value: "15+" },
      { label: "Partner Farmers", value: "1,000+" },
      { label: "Products Delivered", value: "500K+" },
      { label: "Hectares Managed", value: "5,000+" },
    ];
  
    const values = [
      {
        title: "Sustainability",
        description:
          "We believe in sustainable farming practices that protect our environment for future generations.",
        icon: "🌱",
      },
      {
        title: "Innovation",
        description:
          "Leveraging cutting-edge technology to revolutionize traditional farming methods.",
        icon: "💡",
      },
      {
        title: "Community",
        description:
          "Supporting local farmers and building strong agricultural communities across Indonesia.",
        icon: "🤝",
      },
    ];
  
    return (
      <div className="about-page">
        <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.jpg"
            alt="About Us"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl font-bold text-white mb-6">
              Revolutionizing Agriculture for a Sustainable Future
            </h1>
            <p className="text-xl text-gray-200">
              We're on a mission to transform agriculture through technology and
              innovation
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600">
            Founded in 2009, we started with a simple mission: to empower
            farmers with technology and create a sustainable agricultural
            ecosystem. Today, we're proud to be at the forefront of agricultural
            innovation in Indonesia.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We envision a future where agriculture is sustainable,
                efficient, and profitable for farmers. Through our innovative
                solutions and commitment to excellence, we're working to make
                this vision a reality.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-gray-600">
                    Empowering farmers with modern technology
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-gray-600">
                    Promoting sustainable farming practices
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-gray-600">
                    Building strong agricultural communities
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-96">
              <img
                src="/images/vision.jpg"
                alt="Our Vision"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us in Transforming Agriculture
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Whether you're a farmer, investor, or enthusiast, there's a place
            for you in our story.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-green-50 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
      </div>
    );
  }