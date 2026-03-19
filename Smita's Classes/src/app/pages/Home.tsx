import Header from "../components/Header";
import Footer from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, BookOpen, Users, Target, Trophy, Star, MapPin, CircleCheck as CheckCircle, GraduationCap, TrendingUp, FlaskConical } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import heroImg from "../../assets/Class.jpg";
import tplust from "../../assets/black.jpg";
import manasi from "../../assets/Manasi.png";
import ora from "../../assets/Loading.png";
import iimc from "../../assets/IIMC.jpg";
import doctor from "../../assets/doctor.png";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);
  setSuccess(false);

  const form = e.currentTarget as HTMLFormElement;
  const formData = {
    studentName: (form.studentName as HTMLInputElement).value,
    class: (form.class as HTMLSelectElement).value,
    phone: (form.phone as HTMLInputElement).value,
    board: (form.board as HTMLSelectElement).value,
    message: (form.message as HTMLTextAreaElement).value,
  };

  try {
    await fetch("https://script.google.com/macros/s/AKfycbyp0YHLo_CL6zUR5KCDZndETuHW8tTAM6VSaVY8vCzFNvvoPnD6bv6d-vZQZpjw3WxR/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setSuccess(true);
    form.reset();
  } catch (error) {
    alert("❌ Something went wrong");
  }

  setLoading(false);
};
  const boards = [
    { name: "IB", fullName: "International Baccalaureate" },
    { name: "IGCSE", fullName: "International GCSE" },
    { name: "CBSE", fullName: "Central Board of Secondary Education" },
    { name: "ICSE", fullName: "Indian Certificate of Secondary Education", featured: true },
    { name: "11th & 12th NEET", fullName: "Complete NEET preparation" },
    { name: "Math Foundation", fullName: "5th - 7th grades" },
    { name: "Scholarship Exams", fullName: "4th & 7th grade prep" },
    { name: "Homi Bhabha Science", fullName: "6th & 9th grade exams" },
  ];

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Faculty",
      description: "Highly qualified and experienced teachers dedicated to student success",
    },
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: "Fully Functional Science Lab",
      description: "Regular hands-on experiments.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Personalized Attention",
      description: "Small batch sizes ensuring individual focus on each student",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Proven Results",
      description: "#1 ranking in Pune for ICSE board with consistent toppers",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Free Library Support",
      description: "Unlimited access to books and study materials, all year round.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Regular Progress Tracking",
      description: "Continuous monitoring and parent-teacher meetings",
    },
  ];

  const branches = [
    {
      name: "Anand Nagar Branch",
      address: "5th floor, Vasant Vaishali, Sinhgad Rd, next to Santosh Hall, Anand Nagar, Pune, Maharashtra 411051",
      timing: "Mon-Sat: 8:00 AM - 8:00 PM",
    },
    {
      name: "Sinhagad Road Branch",
      address: "6th floor, Vasant Vaishali, Sinhgad Rd, next to Santosh Hall, Anand Nagar, Pune, Maharashtra 411051",
      timing: "Mon-Sat: 9:00 AM - 8:00 PM",
      mapLink: "https://maps.app.goo.gl/AfasNJuDNLAFAVDi9",
    },
  ];

  const testimonials = [
    {
      name: "Gururaj Zunjarwad",
      class: "Class 10 ICSE",
      text: "Frankly speaking, absolutely NO words to speak about Smita's classes !! My daughter Sharvi Zunjarwad joined this class for just 10th standard ISCE board coaching and secured 99.6% and stood FIRST in her School and FIRST in Pune City. Big Salute to Smita Mam for your wonderful coaching and your patience and cooperation made my daughter a very friendly and homly atmosphere.",
      rating: 5,
    },
    {
      name: "Santosh Patil",
      class: "Class 9 CBSE",
      text: "Classes are taking science practicals this is great commitment towards quality education. Students future is definitely bright here. Well done Smita Ma'am",
      rating: 5,
    },
    {
      name: "Harsh Yadav",
      class: "Class 10 ICSE",
      text: "It was a very wonderful experience at Smita's classes. I joined this class in 10th std and scored 96.7℅ (icse) securing rank 7th in my school. I really enjoyed and liked the way of teaching. The class environment is also very joyful. I highly recommend Smita's classes for ICSE students.. Trust me you will like it 👍 …",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-[#022442] px-4 py-2 rounded-full mb-6">
                <Award className="h-5 w-5" />
                <span className="font-semibold">#1 in Pune for ICSE Board</span>
              </div>
              <h2 className="text-5xl font-bold text-[#022442] mb-6">
                Welcome to
                <span className="text-[#027E6F]"> Smita's Classes</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Excellence in education for classes 5-10. We accept IB, IGCSE, CBSE, and
                ICSE boards with a proven track record of outstanding results.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-[#027E6F] text-white px-8 py-3 rounded-lg hover:bg-[#02695D] transition-colors inline-flex items-center gap-2"
                >
                  <GraduationCap className="h-5 w-5" />
                  Enroll Now
                </a>
                <a
                  href="#courses"
                  className="bg-white text-[#027E6F] border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-[#E6F4F2] transition-colors"
                >
                  View Courses
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={heroImg}
                  alt="Students in classroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#027E6F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">16+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">1500+</div>
              <div className="text-blue-100">Students Enrolled</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-blue-100">Branches in Pune</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-4xl font-bold mb-2">95%+</div>
              <div className="text-blue-100">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src={tplust}
                alt="Teacher teaching students"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#022442] mb-6">
                About Smita's Classes
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Since 2010, SMITA’S CLASSES has been dedicated to nurturing excellence in students, fostering a fearless and logical
                approach to studies. We specialize in coaching students from CBSE, ICSE, IGCSE, and IB boards, helping them excel in
                Mathematics, Physics, Chemistry, and Biology. 
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our program not only covers the school syllabus but also builds a
                strong foundation in mathematics, ensuring students are well-prepared for future academic challenges.
                Our experienced faculty and comprehensive teaching methodology have
                consistently produced top results.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Structured curriculum aligned with board requirements
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Regular tests and performance tracking
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Small, Focused Batches (15–20 Students)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Free Library Support
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Fully Functional Science Lab
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Interactive teaching methods and doubt clearing sessions
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-gradient-to-br from-[#E6F4F2] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#022442] mb-4">
              What We Teach
            </h2>
            <p className="text-xl text-gray-700">
              Comprehensive coaching for Classes 5-10 across multiple boards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {boards.map((board, index) => (
              <motion.div
                key={board.name}
                className={`bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${
                  board.featured ? "ring-2 ring-yellow-400" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {board.featured && (
                  <div className="inline-flex items-center gap-1 bg-yellow-400 text-[#022442] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    <Trophy className="h-3 w-3" />
                    #1 in Pune
                  </div>
                )}
                <h3 className="text-lg font-bold text-[#022442] mb-1">
                  {board.name}
                </h3>
                <p className="text-sm text-gray-700">{board.fullName}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#022442] mb-6 text-center">
              Classes Offered
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[5, 6, 7, 8, 9, 10].map((classNum) => (
                <div
                  key={classNum}
                  className="bg-[#E6F4F2] p-4 rounded-lg text-center"
                >
                  <BookOpen className="h-8 w-8 text-[#027E6F] mx-auto mb-2" />
                  <div className="font-bold text-[#022442]">Class {classNum}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#022442] mb-4">
              Why Choose Smita's Classes?
            </h2>
            <p className="text-xl text-gray-700">
              What makes us the preferred choice for students and parents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#E6F4F2] to-white p-6 rounded-xl hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-[#027E6F] text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#022442] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#022442] mb-6">
                Leaders in Their Domains
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We don't just coach; we create an environment that fosters the
                holistic cognitive development of each of our students. The
                mindset and diligence we instill propel our students to world-
                renowned institutions, where they evolve into leaders in their
                domains.
              </p>
              <div className="w-full h-full object-contain">
                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ImageWithFallback
                    src={iimc}
                    alt="University graduate"
                    className="w-full h-auto aspect-square object-contain bg-gray-100"
                  />
                </motion.div>
                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <ImageWithFallback
                    src={manasi}
                    alt="College student achievement"
                    className="w-full h-auto aspect-square object-contain bg-gray-100"
                  />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full h-full object-contain">
                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ImageWithFallback
                    src={doctor}
                    alt="Young professional"
                    className="w-full h-auto aspect-square object-contain bg-gray-100"
                  />
                </motion.div>
                <motion.div
                  className="rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <ImageWithFallback
                    src={ora}
                    alt="Graduate student"
                    className="w-full h-auto aspect-square object-contain bg-gray-100"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-16 bg-gradient-to-br from-[#E6F4F2] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#022442] mb-4">
              Our Branches
            </h2>
            <p className="text-xl text-gray-700">
              Two conveniently located branches in Pune
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#027E6F] text-white p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#022442] mb-2">
                      {branch.name}
                    </h3>
                    <p className="text-gray-700 mb-2">{branch.address}</p>
                    <p className="text-[#027E6F] font-semibold">{branch.timing}</p>
                    {branch.mapLink && (
                      <a
                        href={branch.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#027E6F] underline"
                      >
                        View on Map
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#022442] mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-700">
              Success stories from our students and parents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#E6F4F2] to-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-[#022442]">{testimonial.name}</div>
                  <div className="text-sm text-gray-700">{testimonial.class}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#027E6F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join Pune's #1 coaching institute for ICSE and experience excellence in
            education
          </p>
          <div className="bg-white p-8 rounded-xl shadow-2xl">
  <form onSubmit={handleSubmit} className="space-y-6">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        type="text"
        name="studentName"
        placeholder="Student Name"
        required
        className="px-4 py-3 rounded-lg border border-gray-300 text-[#022442]"
      />

      <select
        name="class"
        required
        className="px-4 py-3 rounded-lg border border-gray-300 text-[#022442]"
      >
        <option value="">Class</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
      </select>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        className="px-4 py-3 rounded-lg border border-gray-300 text-[#022442]"
      />

      <select
        name="board"
        required
        className="px-4 py-3 rounded-lg border border-gray-300 text-[#022442]"
      >
        <option value="">Select Board</option>
        <option value="ib">IB</option>
        <option value="igcse">IGCSE</option>
        <option value="cbse">CBSE</option>
        <option value="icse">ICSE</option>
      </select>
    </div>

    <textarea
      name="message"
      placeholder="Message (Optional)"
      rows={4}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-[#022442]"
    ></textarea>
    <button
  type="submit"
  disabled={loading}
  className="w-full bg-[#027E6F] text-white px-8 py-4 rounded-lg"
>
  {loading ? "Submitting..." : "Submit Enquiry"}
</button>
    {success && (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="flex items-center gap-3 bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-lg shadow-md"
  >
    <CheckCircle className="h-6 w-6 text-green-600 animate-bounce" />
    <span className="font-semibold">
      Enquiry submitted successfully!
    </span>
  </motion.div>
)}

  </form>
</div>
        </div>
      </section>

      <Footer />
      <a
  href="https://wa.me/919970090592"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 left-6 z-50 group"
>
  <div className="relative flex items-center">
    
    {/* Text */}
    <span
  className="absolute left-12 bg-green-500 text-white text-sm px-4 py-2 rounded-full shadow-md
             opacity-0 scale-x-0 origin-left
             group-hover:opacity-100 group-hover:scale-x-100
             transition-all duration-300 ease-out whitespace-nowrap"
>
  Contact us on WhatsApp
</span>

    {/* WhatsApp Icon */}
    <div className="relative z-10 bg-green-500 p-4 rounded-full shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-6 w-6 fill-white"
      >
        <path d="M16.04 2.002c-7.732 0-14 6.268-14 14 0 2.472.646 4.89 1.872 7.02L2 30l7.207-1.88a13.93 13.93 0 006.833 1.744h.006c7.732 0 14-6.268 14-14s-6.268-14-14.006-14zm7.83 19.663c-.33.928-1.928 1.768-2.68 1.888-.688.108-1.56.154-2.516-.152-.58-.184-1.324-.432-2.292-.848-4.028-1.736-6.655-5.99-6.86-6.268-.2-.28-1.63-2.168-1.63-4.136 0-1.968 1.032-2.936 1.4-3.34.368-.408.8-.512 1.064-.512.264 0 .528.004.76.012.244.008.572-.092.896.684.332.8 1.128 2.768 1.228 2.968.1.2.168.44.032.72-.136.28-.204.456-.4.7-.2.244-.42.544-.6.732-.2.2-.408.416-.176.816.232.4 1.032 1.704 2.216 2.76 1.524 1.36 2.808 1.78 3.208 1.98.4.2.632.168.864-.104.232-.28.996-1.16 1.264-1.556.264-.4.532-.336.896-.2.368.136 2.324 1.096 2.72 1.296.4.2.664.3.76.468.1.168.1.98-.232 1.908z"/>
      </svg>
    </div>

  </div>
</a>
    </div>
  );
}