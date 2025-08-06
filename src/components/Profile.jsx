import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import mainPhoto from '../assets/ins.png';
import heartPink from '../assets/pink.png';
import heartRed from '../assets/red.png';

const cardVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.05, rotate: 2, transition: { duration: 0.3, type: 'spring', stiffness: 200 } },
};

const heartVariants = {
  animate: {
    scale: [1, 1.2, 1],
    transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
  },
};

const interestsData = [
  {
    title: 'Golfing',
    description: 'I got into golf because of my mom loves it. I have been golfing for around 10 years (but I am not that good). Even so, it is a sport I will always love! It is not just about hitting shots, I also really enjoy the smell of the fresh cut grass and the feeling of walking around the course',
    icon: '⛳',
  },
  {
    title: 'Cycling',
    description: 'I originally bought my bike just for commuting, but I ended up really enjoying riding it (it has become a new hobby!) I started volunteering to bike repair as well because I want to learn more about bicycles',
    icon: '🚴‍♀️',
  },
  {
    title: 'Learning Mandarin',
    description: 'I think I enjoy studying languages. Mandarin has got a lot in common with Japanese, which makes it super fun to keep studying',
    icon: '📚',
  }
];

const educationData = [
  {
    year: "2022 - expected graduation June 2026",
    school: "University of Victoria (BSc in Computer Science)",
    place: "Victoria, BC",
    description: "Currently studying computer science. Excited to learn more about software development!\nSelected Coursework:",
    coursework: [
      "Data Mining",
      "Data Science",
      "Digital Logic",
      "Software Testing",
      "Database Systems",
      "Computer Modeling",
      "Human Computer Interaction",
      "Software-Defined Networking",
      "Overlay and Peer-to-Peer Networking"]
  },
  {
    year: '2021 - 2022',
    school: 'Camosun College (University Transfer)',
    place: 'Victoria, BC',
    description: 'Took various courses in biology, statistics, business, etc. and found enjoyment in Computer Science!',
  },
];

const biography = `
I grew up in Japan and have both Canadian and Japanese roots. I moved to Victoria in 2020 to begin university, and since then, I have come to really appreciate the city — its mild weather, nearby beaches, and the welcoming atmosphere at the University of Victoria.

I am currently studying Computer Science with a Communications and Networks option. I plan to graduate in June 2026.
`;

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center py-12 px-4 relative"
      style={{
        backgroundImage: `
          linear-gradient(to right, #e5e5e5 1px, transparent 1px),
          linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
      }}
    >
      <motion.img
        src={heartPink}
        alt="pink heart"
        className="absolute top-1/2 right-80 w-28 pointer-events-none"
        variants={heartVariants}
        animate="animate"
      />
      <motion.img
        src={heartRed}
        alt="red heart"
        className="absolute bottom-20 right-20 w-32 pointer-events-none drop-shadow-2xl"
        variants={heartVariants}
        animate="animate"
      />
      <motion.img
        src={heartPink}
        alt="pink heart"
        className="absolute top-1/3 right-10 w-20 pointer-events-none drop-shadow-2xl"
        variants={heartVariants}
        animate="animate"
      />
      <motion.img
        src={heartRed}
        alt="red heart"
        className="absolute top-1/4 left-20 w-28 pointer-events-none"
        variants={heartVariants}
        animate="animate"
      />
      <motion.img
        src={heartPink}
        alt="pink heart"
        className="absolute bottom-1/3 left-10 w-20 pointer-events-none drop-shadow-2xl"
        variants={heartVariants}
        animate="animate"
      />

      <div className="max-w-4xl w-full flex flex-col md:flex-row items-stretch gap-8">
      <div>
        <img
          src={mainPhoto}
          alt="Julia Ishibashi"
          className="w-[260px] h-[340px]"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-[#333] font-['Comic Neue', 'cursive'] mb-6">Julia Ishibashi</h1>
        <p className="text-[#333] text-lg leading-relaxed whitespace-pre-line max-w-2xl font-['Comic Neue', 'cursive']">
          {biography}
        </p>
      </div>
    </div>

      {/* Interests & Education */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Interests */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-[#ff4d94] mb-4 font-['Comic Neue', 'cursive']">My Interests</h2>
          <div className="grid grid-cols-1 gap-4">
            {interestsData.map((interest, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                className="bg-[#ffd1dc] rounded-lg p-4 flex items-start gap-4 cursor-pointer"
              >
                <span className="text-3xl">{interest.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-[#ff4d94] font-['Comic Neue', 'cursive']">{interest.title}</h3>
                  <p className="text-[#333] text-sm">{interest.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Education */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-[#ff4d94] mb-4 font-['Comic Neue', 'cursive']">Education</h2>
          <ul className="space-y-6">
            {educationData.map((edu, idx) => (
              <li key={idx}>
                <div className="text-lg font-semibold text-gray-900">{edu.school}</div>
                <div className="text-sm text-gray-500">{edu.place}</div>
                <div className="text-xs text-gray-400 mb-1">{edu.year}</div>
                <div className="text-base text-gray-700 whitespace-pre-line mb-2">{edu.description}</div>
                {edu.coursework && (
                  <ul className="list-disc list-inside text-gray-700 text-sm pl-4">
                    {edu.coursework.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <motion.button
        onClick={() => navigate('/')}
        className="fixed bottom-6 right-16 bg-[#ff4d94] hover:bg-[#ff3399] text-white px-6 py-2 rounded-full transition flex items-center gap-2 shadow-lg z-50 font-['Comic Neue', 'cursive']"
        aria-label="Back to Home"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span style={{ fontSize: '1.5rem' }}>←</span>
        <span className="hidden md:inline">Back to Home</span>
      </motion.button>
    </div>
  );
};

export default Profile;