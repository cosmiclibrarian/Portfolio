import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import ContactMe from "./ContactMe";
const Skill = () => {
  const socials = [
    {
      name: "linkedin",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/adeniranibrahim1/",
    },
    {
      name: "github",
      icon: <FaGithub />,
      link: "https://github.com/ibrahim735",
    },
    {
      name: "twitter/X",
      icon: <FaXTwitter />,
      link: "https://x.com/ad_ibrahiim",
    },
    {
      name: "email",
      icon: <HiOutlineMailOpen />,
      link: "mailto:adeniranadekunle152@gmail.com",
    },
  ];
  // console.log(socials);
  return (
    <section className="">
      <article className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center  gap-8 max-w-6xl mx-auto text-white ">
        <div>
          <div className="flex items-end gap-x-2 mb-5">
            <h1 className="text-5xl tracking-tighter font-black rubik-dirt-regular">
              My Skills
            </h1>
            <div className="w-4 h-4 bg-green-500 rounded-full mb-1" />
          </div>{" "}
          <p className="font-semibold text-gray-400">
            These are the tools I used on my frontend journey to write clean,
            efficient code, build responsive and dynamic user interfaces,
            optimize performance for faster loads, manage state
            seamlessly, secure user interactions, integrating with APIs, and ensuring everything looks and feels smooth while mainatining user experience.
          </p>
        </div>
        <ShuffleGrid />
      </article>
      <ContactMe />
      <article className=" mx-auto w-[50vw] text-center">
        {/* <p className="text-base font-bold text-gray-400">
          Reach out to me today and let's discuss how i ca help you achieve your
          goals.
        </p> */}
        {/* <p className="text-gray-400 text-lg font-bold rubik-dirt-regular">Connect with me.</p> */}
        <div className="flex justify-center items-center gap-x-4">
          {socials.map((data, index) => {
            return (
              <a key={index} href={`${data.link} `} target="blank">
                <div
                  className="flex items-end gap-1 justify-center group cursor-pointer duration-300"
                  id="contactme"
                >
                  <p className="text-2xl text-gray-400 group-hover:text-green-500 duration-300 cursor-pointer ">
                    {data.icon}
                  </p>
                  <p className="text-gray-400 text-xs font-bold group-hover:text-gray-200 duration-300 capitalize">
                    {data.name}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </article>
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 8,
    src: "/Typescript.png",
  },
 
  {
    id: 12,
    src: "/html-5.png",
  },
  {
    id: 14,
    src: "/cssbbb.png",
  },
  {
    id: 16,
    src: "/js.png",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.img
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-[110px] h-[85px] max-md:w-[90px] max-md:h-[70px] object-contain object-center"
      src={sq.src}
    />
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4  grid-rows-4 h-[400px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Skill;
