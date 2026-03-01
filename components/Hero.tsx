
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['UI/UX Designer', 'Data Analyst', 'Data Scientist', 'Programmer'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: any;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentRole) {
      setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="about" className="pt-32 pb-16 lg:pt-48 lg:pb-32">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Hi, I am <br />
            <span className="text-4xl lg:text-6xl text-white">Chandu Tamada</span>
          </h2>
          <div className="text-2xl lg:text-3xl font-semibold mb-6 flex justify-center lg:justify-start">
            <span className="mr-2 text-gray-400">I am a</span>
            <span className="text-purple-500 font-bold border-r-4 border-purple-500 animate-pulse min-w-[1ch]">
              {text}
            </span>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
            I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
          </p>
          <a
            href="https://drive.google.com/file/d/1CyR79yFQfP8xHEOGsAd6NAa4XrLiKT1x/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20"
          >
            Check Resume
          </a>
        </div>

        <div className="relative w-64 h-64 lg:w-[450px] lg:h-[450px]">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse blur-2xl opacity-20"></div>
          <div className="relative w-full h-full rounded-full border-4 border-purple-500/30 p-2 overflow-hidden bg-[#030014]">
            <img
              src="profile.jpg"
              alt="Chandu Tamada"
              className="w-full h-full object-cover rounded-full hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
