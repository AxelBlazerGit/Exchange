import React, { useEffect, useRef, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';  
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 

const SellSection = () => {
  const [marqueeItems, setMarqueeItems] = useState([]);
  const [books, setBooks] = useState([]);
  const [instruments, setInstruments] = useState([]);
  const [notes, setNotes] = useState([]);
  const [others, setOthers] = useState([]);

  const booksRef = useRef(null);
  const instrumentsRef = useRef(null);
  const notesRef = useRef(null);
  const utilitiesRef = useRef(null);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('http://localhost:5000/allListings'); 
        const data = await response.json();
        console.log(data);

        // Set marquee listings from first_json
        setMarqueeItems(data.first_json);

        // Set category-based listings
        setBooks(data.second_json);
        setInstruments(data.third_json);
        setNotes(data.fourth_json);
        setOthers(data.fifth_json);
      } catch (error) {
        console.error("Error fetching listings: ", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="relative px-10">
      {/* Marquee Section */}
      <div className="w-full flex flex-row justify-center items-center">
        <Marquee gradient={true} speed={60} pauseOnHover={true} direction="left">
          <div className="flex flex-row gap-0 w-full justify-center items-center">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="rounded-lg border border-teal-500 w-64 h-36 max-w-lg m-2 mt-5 transform transition duration-300 ease-in-out hover:scale-105">
                <Link to={`/product/${item.id}`}> 
                  <div className="flex w-full h-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-1/3 bg-gray-300">
                      <img className="object-cover h-full w-full" src={`data:image/png;base64,${item.image}`} alt="Product" />
                    </div>
                    <div className="w-2/3 p-2">
                      <div className="flex justify-between items-center">
                        <h2 className="text-gray-900 font-bold text-xl">${item.price}</h2>
                      </div>
                      <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-gray-700 text-sm">{item.category}</span>
                        <button className="border hover:border-teal-500 bg-teal-500 text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-teal-500 hover:border transition duration-300 ease-in-out text-center"> 
                          Buy Now 
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Scrollable Sections */}
      {[
        { name: "BOOKS", ref: booksRef, data: books },
        { name: "INSTRUMENTS", ref: instrumentsRef, data: instruments },
        { name: "NOTES", ref: notesRef, data: notes },
        { name: "OTHER UTILITIES", ref: utilitiesRef, data: others },
      ].map((section, idx) => (
        <div key={idx} className="relative w-full my-20">
          {/* Section Heading */}
          <div className="flex justify-center items-center flex-col mb-6">
            <h2 className="text-3xl font-bold text-teal-600">{section.name}</h2>
            <hr className="w-24 border-t-4 border-teal-600 mt-2" />
          </div>

          {/* Scrollable Cards with Left and Right Arrows */}
          <div className="relative">
            {/* Left Arrow */}
            <button onClick={() => scrollLeft(section.ref)} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-teal-600 p-2 rounded-full shadow-md z-10 hover:bg-teal-500 hover:text-white">
              <FaArrowLeft size={24} />
            </button>

            <div className="flex overflow-x-scroll space-x-6 px-8 no-scrollbar" ref={section.ref}>
              {section.data.map((item, index) => (
                <Link to={`/product/${item.id}`} key={index}>
                  <div className="min-w-[300px] max-w-[300px] h-[300px] rounded-lg overflow-hidden shadow-xl bg-white border-4 border-teal-500 transform transition duration-300 ease-in-out hover:scale-105">
                    <div className="relative h-1/2">
                      <img className="w-full h-full object-cover" src={`data:image/png;base64,${item.image}`} alt={`Image of ${item.description}`} />
                    </div>
                    <div className="px-4 py-3">
                      <div className="font-bold text-lg mb-1 text-teal-600">${item.price}</div>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between px-4 pb-4">
                      <span className="w-1/4 bg-gray-200 text-center rounded-sm px-3 py-1 text-xs font-semibold text-gray-700">{item.category}</span>
                      <span className="w-1/2 border hover:border-teal-500 bg-teal-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-teal-500 transition duration-300 ease-in-out text-center">Buy Now</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right Arrow */}
            <button onClick={() => scrollRight(section.ref)} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-teal-600 p-2 rounded-full shadow-md z-10 hover:bg-teal-500 hover:text-white">
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SellSection;
