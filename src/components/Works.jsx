import { useState, useEffect } from 'react';
import { data } from "../data/data.js";
import { useNavigate } from 'react-router-dom';

const cardColors = [
  '#dcff10', // lime
  '#ffb13b', // orange
  '#4a6cf7', // blue
  '#ffa5ff', // pink
  '#ffe066', // yellow
];

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };
    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const getVisibleCards = () => {
    let cards = [];
    for (let i = 0; i < cardsPerPage; i++) {
      let index = (currentIndex + i) % data.length;
      cards.push({ ...data[index], index });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#9e98f7] py-10">
      <div className="w-full max-w-6xl mb-8">
        <p className='text-2xl font-bold text-white'>EXPLORE MY</p>
        <p className='text-6xl font-serif text-white mb-4'>Projects</p>
      </div>
      <div className="relative w-full max-w-6xl flex items-center justify-center">
        {/* Left arrow */}
        <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-[70%] z-10 bg-white/70 rounded-full p-2 hover:bg-white transition shadow-lg">
          <span className="text-2xl">&#60;</span>
        </button>
        {/* Card display area */}
        <div className="flex justify-center items-center gap-8 perspective-1000">
          {visibleCards.map((item, idx) => {
            const isCenter = idx === 1;
            const isLeft = idx === 0;
            const isRight = idx === 2;

            return (
              <div
                key={item.index}
                className={`flex flex-col rounded-2xl shadow-xl overflow-hidden border-4 border-black min-w-[300px] max-w-[340px] h-[520px] bg-white transition-all duration-500 transform-gpu ${isCenter ? 'scale-100 z-20' :
                    isLeft ? 'scale-75 -translate-x-20 rotate-y-45 z-10' :
                      isRight ? 'scale-75 translate-x-20 -rotate-y-45 z-10' : ''
                  }`}
                style={{
                  backgroundColor: cardColors[item.index % cardColors.length],
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  transform: isCenter ? 'translateZ(0)' :
                    isLeft ? 'translateZ(-300px)' :
                      'translateZ(-300px)'
                }}
              >
                <img src={item.image} alt={item.name} className="w-full h-72 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm font-bold mb-2">PROJECT {item.index + 1}</p>
                  <h3 className="text-3xl font-serif mb-2">{item.name}</h3>
                  <p className="mb-4 text-base">{item.description || 'No description.'}</p>
                  <button
                    onClick={() => navigate(`/projects/${item.id}`)}
                    className="mt-auto bg-black text-white rounded-full px-6 py-2 font-semibold flex items-center gap-2 hover:bg-gray-800 transition"
                  >
                    READ MORE <span>&#8594;</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* Right arrow */}
        <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-[70%] z-10 bg-white/70 rounded-full p-2 hover:bg-white transition shadow-lg">
          <span className="text-2xl">&#62;</span>
        </button>
      </div>
      {/* Pagination dots */}
      <div className="flex gap-2 mt-6">
        {data.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-black' : 'bg-white border border-black'} inline-block`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Works;
