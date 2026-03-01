
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! This is a demo.');
  };

  return (
    <section id="contact" className="py-20">
      <div className="text-center mb-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-20 h-20 rounded-full border-2 border-purple-500 p-1 mb-6"
        >
          <img
            src="profile.jpg"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </motion.div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Contact</h2>
        <p className="text-gray-400 text-lg">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-[#110D2D]/40 border border-purple-500/20 rounded-3xl p-8 lg:p-12 backdrop-blur-sm shadow-2xl"
      >
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          Email Me 🚀
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#030014] border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#030014] border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-[#030014] border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full bg-[#030014] border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-purple-500/20 active:scale-[0.98]"
          >
            Send
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
