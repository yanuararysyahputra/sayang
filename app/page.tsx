"use client";

import { useState, useEffect } from "react";
import { Delete, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [page, setPage] = useState(1);
  const [shake, setShake] = useState(false);
  const [typedText, setTypedText] = useState("");
const [isPlaying, setIsPlaying] = useState(false);
  // PASSWORD
  const correctPassword = "230598";

  // INPUT NUMBER
  const handleNumber = (num: string) => {
    if (password.length < 6) {
      const newPassword = password + num;
      setPassword(newPassword);

      if (newPassword.length === 6) {
        if (newPassword === correctPassword) {
          setTimeout(() => {
            setUnlocked(true);
          }, 300);
        } else {
          setShake(true);

          setTimeout(() => {
            setPassword("");
            setShake(false);
          }, 500);
        }
      }
    }
  };

  // DELETE NUMBER
  const handleDelete = () => {
    setPassword(password.slice(0, -1));
  };
  const fullText =
  "thank you for always being here for me, thank you for making my days happier, and thank you for being the best part of my life ✨ enjoyy your birthday my love, all the best for you ever ❤️";

useEffect(() => {
  if (page === 8) {
    setTypedText("");

    let index = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));

      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }
}, [page]);

const [audio] = useState(
  typeof Audio !== "undefined"
    ? new Audio("/music/1.mp3")
    : null
);

    const toggleMusic = () => {
  if (!audio) return;

  if (isPlaying) {
    audio.pause();
    setIsPlaying(false);
  } else {
    audio.loop = true;
    audio.play();
    setIsPlaying(true);
  }
};

// AUTO PLAY MUSIC SAAT WEBSITE DIBUKA
useEffect(() => {
  if (audio) {
    audio.loop = true;
    audio.volume = 0.5;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.log("Autoplay blocked:", err);
      });
  }
}, []);

// AUTO STOP MUSIC SAAT MASUK PAGE 9
useEffect(() => {
  if (page === 9 && audio) {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  }
}, [page, audio]);
  
// =========================
  // PAGE 9
  // =========================
  if (unlocked && page === 9) {
    return (
  <AnimatePresence mode="wait">
    <motion.main
      key={page}
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 1.05,
        y: -40,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="min-h-screen bg-[#f3f4f8] flex items-center justify-center relative overflow-hidden px-5"
    >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >


          {/* Video Frame */}
<motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="
    relative
    w-[260px]
    h-[460px]
    mx-auto
    rounded-[35px]
    overflow-hidden
    border-[6px]
    border-white
    shadow-2xl
    bg-black
  "
>

  {/* Video */}
  <video
    src="/video/surprisee.mp4"
    autoPlay
    loop
    controls
    className="w-full h-full object-cover"
  />

  {/* Glow */}
  <div
    className="
      absolute
      inset-0
      rounded-[35px]
      ring-4
      ring-[#7ea6ff]/30
      pointer-events-none
    "
  />
</motion.div>

          <h2 className="mt-4 text-[25px] font-black text-[#18489b]">
            Surprisee !! 🎉 🥳
          </h2>
          

          {/* BUTTON */}
          <div className="relative mt-8 flex justify-center items-center">

            {/* Ripple */}
            <motion.div
              animate={{
                scale: [1, 1.5],
                opacity: [0.4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="
                absolute
                w-[170px]
                h-[65px]
                rounded-full
                bg-[#7ea6ff]
                blur-md
              "
            />

            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                w-[165px]
                h-[60px]
                rounded-full
                bg-[#4f7fff]
                blur-xl
              "
            />

            {/* Button */}
            <motion.button
             onClick={() => window.location.reload()}
              whileTap={{
                scale: 0.88,
              }}
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                },
                scale: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
              className="
                relative
                z-10
                px-10
                py-3
                rounded-full
                bg-[#18489b]
                text-white
                text-sm
                font-bold
              "
            >
              i love you so much sayang 💖🥰
            </motion.button>
          </div>
        </motion.div>
          </motion.main>
  </AnimatePresence>
    );
  }

// =========================
// PAGE 8
// =========================
if (unlocked && page === 8) {
  return (
  <AnimatePresence mode="wait">
    <motion.main
      key={page}
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 1.05,
        y: -40,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="min-h-screen bg-[#f3f4f8] flex items-center justify-center relative overflow-hidden px-5"
    >

{/* Music Button */}
<motion.button
  onClick={toggleMusic}
  whileTap={{ scale: 0.9 }}
  animate={{
    scale: isPlaying ? [1, 1.1, 1] : 1,
  }}
  transition={{
    repeat: Infinity,
    duration: 1.5,
  }}
  className="
    absolute
    top-5
    right-5
    z-50
    w-14
    h-14
    rounded-full
    bg-white
    shadow-xl
    flex
    items-center
    justify-center
    text-[#18489b]
  "
>
  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
</motion.button>
      {/* Falling Hearts */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: -100,
            x: Math.random() * 400 - 200,
            opacity: 0,
            rotate: Math.random() * 180,
          }}
          animate={{
            y: 900,
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: 6 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute text-2xl"
        >
          💙
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-[320px]"
      >

        {/* GIF */}
        <img
          src="/gif/love.gif"
          alt="gif"
          className="w-[170px] mx-auto mb-5"
        />

        {/* Title */}
        <h1 className="text-[28px] font-black text-[#18489b] leading-tight">
          Happy Birthday ❤️
        </h1>

        {/* Typing Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
          className="
  mt-6
  border-l-4
  border-[#3b82f6]
  pl-4
  min-h-[90px]
"
        >

          <p className="text-[#18489b] text-[16px] leading-relaxed font-medium">
  {typedText}
  <span className="animate-pulse">|</span>
</p>

          <p className="mt-4 text-[#18489b] text-[16px] font-bold">
            i love you so much 🤍
          </p>
        </motion.div>

        {/* Floating Button */}
        <div className="relative mt-8 flex justify-center items-center">

          {/* Ripple */}
          <motion.div
            animate={{
              scale: [1, 1.5],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="
              absolute
              w-[170px]
              h-[65px]
              rounded-full
              bg-[#7ea6ff]
              blur-md
            "
          />

          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              w-[165px]
              h-[60px]
              rounded-full
              bg-[#4f7fff]
              blur-xl
            "
          />

          {/* Button */}
          <motion.button
          onClick={() => setPage(9)}
            whileTap={{
              scale: 0.88,
            }}
            animate={{
              y: [0, -5, 0],
              scale: [1, 1.04, 1],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              },
              scale: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              },
            }}
            className="
              relative
              z-10
              px-10
              py-3
              rounded-full
              bg-[#18489b]
              text-white
              text-sm
              font-bold
            "
          >
            selesai ♡
          </motion.button>
        </div>
      </motion.div>
        </motion.main>
  </AnimatePresence>
  );
}


// =========================
  // PAGE 7
  // =========================
  if (unlocked && page === 7) {
    return (
  <AnimatePresence mode="wait">
    <motion.main
      key={page}
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 1.05,
        y: -40,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="min-h-screen bg-[#f3f4f8] flex items-center justify-center relative overflow-hidden px-5"
    >
{/* Music Button */}
<motion.button
  onClick={toggleMusic}
  whileTap={{ scale: 0.9 }}
  animate={{
    scale: isPlaying ? [1, 1.1, 1] : 1,
  }}
  transition={{
    repeat: Infinity,
    duration: 1.5,
  }}
  className="
    absolute
    top-5
    right-5
    z-50
    w-14
    h-14
    rounded-full
    bg-white
    shadow-xl
    flex
    items-center
    justify-center
    text-[#18489b]
  "
>
  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
</motion.button>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <img
            src="/gif/gift.gif"
            alt="gif"
            className="w-[150px] mx-auto"
          />

          <h2 className="mt-4 text-[25px] font-black text-[#18489b]">
            Ok last one, i made something for you with fully love hehe, enjoyyy ❤️
          </h2>
          

          {/* BUTTON */}
          <div className="relative mt-8 flex justify-center items-center">

            {/* Ripple */}
            <motion.div
              animate={{
                scale: [1, 1.5],
                opacity: [0.4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="
                absolute
                w-[170px]
                h-[65px]
                rounded-full
                bg-[#7ea6ff]
                blur-md
              "
            />

            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                w-[165px]
                h-[60px]
                rounded-full
                bg-[#4f7fff]
                blur-xl
              "
            />

            {/* Button */}
            <motion.button
              onClick={() => setPage(8)}
              whileTap={{
                scale: 0.88,
              }}
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                },
                scale: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
              className="
                relative
                z-10
                px-10
                py-3
                rounded-full
                bg-[#18489b]
                text-white
                text-sm
                font-bold
              "
            >
              liat donggg 👀
            </motion.button>
          </div>
        </motion.div>
          </motion.main>
  </AnimatePresence>
    );
  }


  // =========================
  // PAGE 6
  // =========================
  if (unlocked && page === 6) {
    return (
  <AnimatePresence mode="wait">
    <motion.main
      key={page}
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 1.05,
        y: -40,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="min-h-screen bg-[#f3f4f8] flex items-center justify-center relative overflow-hidden px-5"
    >
{/* Music Button */}
<motion.button
  onClick={toggleMusic}
  whileTap={{ scale: 0.9 }}
  animate={{
    scale: isPlaying ? [1, 1.1, 1] : 1,
  }}
  transition={{
    repeat: Infinity,
    duration: 1.5,
  }}
  className="
    absolute
    top-5
    right-5
    z-50
    w-14
    h-14
    rounded-full
    bg-white
    shadow-xl
    flex
    items-center
    justify-center
    text-[#18489b]
  "
>
  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
</motion.button>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <img
            src="/gif/love.gif"
            alt="gif"
            className="w-[150px] mx-auto"
          />

          <h2 className="mt-4 text-[25px] font-black text-[#18489b]">
            Happy birthday to my most beautiful, and my love 🫶🏻
          </h2>
          <h6>I love you so much 💖</h6>

          {/* BUTTON */}
          <div className="relative mt-8 flex justify-center items-center">

            {/* Ripple */}
            <motion.div
              animate={{
                scale: [1, 1.5],
                opacity: [0.4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="
                absolute
                w-[170px]
                h-[65px]
                rounded-full
                bg-[#7ea6ff]
                blur-md
              "
            />

            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                w-[165px]
                h-[60px]
                rounded-full
                bg-[#4f7fff]
                blur-xl
              "
            />

            {/* Button */}
            <motion.button
              onClick={() => setPage(7)}
              whileTap={{
                scale: 0.88,
              }}
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                },
                scale: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
              className="
                relative
                z-10
                px-10
                py-3
                rounded-full
                bg-[#18489b]
                text-white
                text-sm
                font-bold
              "
            >
              i have something for you 💌
            </motion.button>
          </div>
        </motion.div>
          </motion.main>
  </AnimatePresence>
    );
  }

  // =========================
  // PAGE 5
  // =========================
  if (unlocked && page === 5) {
    return (
  <AnimatePresence mode="wait">
    <motion.main
      key={page}
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 1.05,
        y: -40,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="min-h-screen bg-[#f3f4f8] flex items-center justify-center relative overflow-hidden px-5"
    >
{/* Music Button */}
<motion.button
  onClick={toggleMusic}
  whileTap={{ scale: 0.9 }}
  animate={{
    scale: isPlaying ? [1, 1.1, 1] : 1,
  }}
  transition={{
    repeat: Infinity,
    duration: 1.5,
  }}
  className="
    absolute
    top-5
    right-5
    z-50
    w-14
    h-14
    rounded-full
    bg-white
    shadow-xl
    flex
    items-center
    justify-center
    text-[#18489b]
  "
>
  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
</motion.button>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >

          <img
            src="/gif/sad.gif"
            alt="sad"
            className="w-[170px] mx-auto"
          />

          <h1 className="mt-4 text-3xl font-black text-[#18489b]">
            yahh kok no 🥺
          </h1>

          <p className="mt-2 text-sm text-[#18489b]">
            coba pencet yes dongg 😠
          </p>
          <br />

          <motion.button
                onClick={() => setPage(2)}
                whileTap={{
                  scale: 0.88,
                }}
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut",
                  },
                  scale: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  },
                }}
                className="
                  relative
                  z-10
                  px-8
                  py-3
                  rounded-full
                  bg-[#18489b]
                  text-white
                  text-sm
                  font-bold
                "
              >
                balik lagiii 😠
              </motion.button>
        </motion.div>
          </motion.main>
  </AnimatePresence>
    );
  }

  // =========================
  // PAGE 4
  // =========================
  if (unlocked && page === 4) {
    return (
  <AnimatePresence mode="wait">
    <motion.main
      key={page}
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 1.05,
        y: -40,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="min-h-screen bg-[#f3f4f8] flex items-center justify-center relative overflow-hidden px-5"
    >
{/* Music Button */}
<motion.button
  onClick={toggleMusic}
  whileTap={{ scale: 0.9 }}
  animate={{
    scale: isPlaying ? [1, 1.1, 1] : 1,
  }}
  transition={{
    repeat: Infinity,
    duration: 1.5,
  }}
  className="
    absolute
    top-5
    right-5
    z-50
    w-14
    h-14
    rounded-full
    bg-white
    shadow-xl
    flex
    items-center
    justify-center
    text-[#18489b]
  "
>
  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
</motion.button>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <img
            src="/gif/birthday.gif"
            alt="gif"
            className="w-[150px] mx-auto"
          />

          <h2 className="mt-4 text-[25px] font-black text-[#18489b]">
            today, this pretty girl birthday ! yeayyy happy birthday, my love 🫶🏻
          </h2>

          {/* BUTTON */}
          <div className="relative mt-8 flex justify-center items-center">

            {/* Ripple */}
            <motion.div
              animate={{
                scale: [1, 1.5],
                opacity: [0.4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="
                absolute
                w-[170px]
                h-[65px]
                rounded-full
                bg-[#7ea6ff]
                blur-md
              "
            />

            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                w-[165px]
                h-[60px]
                rounded-full
                bg-[#4f7fff]
                blur-xl
              "
            />

            {/* Button */}
            <motion.button
              onClick={() => setPage(6)}
              whileTap={{
                scale: 0.88,
              }}
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                },
                scale: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
              className="
                relative
                z-10
                px-10
                py-3
                rounded-full
                bg-[#18489b]
                text-white
                text-sm
                font-bold
              "
            >
              open it {"<3"}
            </motion.button>
          </div>
        </motion.div>
          </motion.main>
  </AnimatePresence>
    );
  }

  // =========================
  // PAGE 2
  // =========================
  if (unlocked && page === 2) {
    return (
  <AnimatePresence mode="wait">
    <motion.main
      key={page}
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 1.05,
        y: -40,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="min-h-screen bg-[#f3f4f8] flex items-center justify-center relative overflow-hidden px-5"
    >
{/* Music Button */}
<motion.button
  onClick={toggleMusic}
  whileTap={{ scale: 0.9 }}
  animate={{
    scale: isPlaying ? [1, 1.1, 1] : 1,
  }}
  transition={{
    repeat: Infinity,
    duration: 1.5,
  }}
  className="
    absolute
    top-5
    right-5
    z-50
    w-14
    h-14
    rounded-full
    bg-white
    shadow-xl
    flex
    items-center
    justify-center
    text-[#18489b]
  "
>
  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
</motion.button>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <img
            src="/gif/ready.gif"
            alt="gif"
            className="w-[150px] mx-auto"
          />

          <h2 className="mt-4 text-[25px] font-black text-[#18489b]">
            are you ready to open this ?
          </h2>

          {/* BUTTON YES NO */}
          <div className="flex justify-center gap-4 mt-8">

            {/* YES */}
            <div className="relative flex justify-center items-center">

              {/* Ripple */}
              <motion.div
                animate={{
                  scale: [1, 1.5],
                  opacity: [0.4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  w-[120px]
                  h-[55px]
                  rounded-full
                  bg-[#7ea6ff]
                  blur-md
                "
              />

              {/* Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  w-[115px]
                  h-[50px]
                  rounded-full
                  bg-[#4f7fff]
                  blur-xl
                "
              />

              {/* Button */}
              <motion.button
                onClick={() => setPage(4)}
                whileTap={{
                  scale: 0.88,
                }}
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut",
                  },
                  scale: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  },
                }}
                className="
                  relative
                  z-10
                  px-8
                  py-3
                  rounded-full
                  bg-[#18489b]
                  text-white
                  text-sm
                  font-bold
                "
              >
                yes 💖
              </motion.button>
            </div>

            {/* NO */}
            {/* NO */}
<div className="relative flex justify-center items-center">

  {/* Ripple */}
  <motion.div
    animate={{
      scale: [1, 1.5],
      opacity: [0.3, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeOut",
    }}
    className="
      absolute
      w-[120px]
      h-[55px]
      rounded-full
      bg-[#ffb3c7]
      blur-md
    "
  />

  {/* Glow */}
  <motion.div
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.2, 0.4, 0.2],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      w-[115px]
      h-[50px]
      rounded-full
      bg-pink-300
      blur-xl
    "
  />

  {/* Button */}
  <motion.button
    onClick={() => setPage(5)}
    whileTap={{
      scale: 0.88,
    }}
    animate={{
      y: [0, -5, 0],
      scale: [1, 1.04, 1],
    }}
    transition={{
      y: {
        repeat: Infinity,
        duration: 2.5,
        ease: "easeInOut",
      },
      scale: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    }}
    className="
      relative
      z-10
      px-8
      py-3
      rounded-full
      bg-white
      border-2
      border-pink-300
      text-pink-400
      text-sm
      font-bold
      shadow-[0_10px_30px_rgba(255,182,193,0.45)]
      overflow-hidden
    "
  >

    {/* Shine */}
    <motion.div
      animate={{
        x: ["-150%", "250%"],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        top-0
        left-0
        w-10
        h-full
        bg-white/40
        skew-x-12
      "
    />

    <span className="relative z-10">
      no 🥺
    </span>
  </motion.button>
</div>
          </div>
        </motion.div>
          </motion.main>
  </AnimatePresence>
    );
  }

  // =========================
  // PAGE 1
  // =========================
  if (unlocked && page === 1) {
    return (
  <AnimatePresence mode="wait">
    <motion.main
      key={page}
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 1.05,
        y: -40,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="min-h-screen bg-[#f3f4f8] flex items-center justify-center relative overflow-hidden px-5"
    >
{/* Music Button */}
<motion.button
  onClick={toggleMusic}
  whileTap={{ scale: 0.9 }}
  animate={{
    scale: isPlaying ? [1, 1.1, 1] : 1,
  }}
  transition={{
    repeat: Infinity,
    duration: 1.5,
  }}
  className="
    absolute
    top-5
    right-5
    z-50
    w-14
    h-14
    rounded-full
    bg-white
    shadow-xl
    flex
    items-center
    justify-center
    text-[#18489b]
  "
>
  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
</motion.button>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <img
            src="/gif/hello.gif"
            alt="gif"
            className="w-[150px] mx-auto"
          />

          <h2 className="mt-4 text-[34px] font-black text-[#18489b]">
            hi, sayangkuu 🫶🏻👋🏻
          </h2>

          {/* BUTTON */}
          <div className="relative mt-8 flex justify-center items-center">

            {/* Ripple */}
            <motion.div
              animate={{
                scale: [1, 1.5],
                opacity: [0.4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="
                absolute
                w-[170px]
                h-[65px]
                rounded-full
                bg-[#7ea6ff]
                blur-md
              "
            />

            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                w-[165px]
                h-[60px]
                rounded-full
                bg-[#4f7fff]
                blur-xl
              "
            />

            {/* Button */}
            <motion.button
              onClick={() => setPage(2)}
              whileTap={{
                scale: 0.88,
              }}
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                },
                scale: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
              className="
                relative
                z-10
                px-10
                py-3
                rounded-full
                bg-[#18489b]
                text-white
                text-sm
                font-bold
              "
            >
              tap disini yah {"<3"}
            </motion.button>
          </div>
        </motion.div>
          </motion.main>
  </AnimatePresence>
    );
  }

  // =========================
  // LOCK SCREEN
  // =========================
  return (
  <AnimatePresence mode="wait">
    <motion.main
      key={page}
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 1.05,
        y: -40,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="min-h-screen bg-[#f3f4f8] flex items-center justify-center relative overflow-hidden px-5"
    >
      {/* Music Button */}
<motion.button
  onClick={toggleMusic}
  whileTap={{ scale: 0.9 }}
  animate={{
    scale: isPlaying ? [1, 1.1, 1] : 1,
  }}
  transition={{
    repeat: Infinity,
    duration: 1.5,
  }}
  className="
    absolute
    top-5
    right-5
    z-50
    w-14
    h-14
    rounded-full
    bg-white
    shadow-xl
    flex
    items-center
    justify-center
    text-[#18489b]
  "
>
  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
</motion.button>
      <div className="w-full max-w-[270px]">

        <motion.div
          animate={shake ? { x: [-5, 5, -5, 5, 0] } : {}}
          className="text-center"
        >

          <img
            src="/gif/bubu1.gif"
            alt="gif"
            className="w-[90px] mx-auto mb-4 rounded-2xl"
          />

          <h1 className="text-[15px] font-bold text-[#18489b] leading-snug">
            Hi love, ayo tebak passwordnya,
            <br />
            I bet u know!!
          </h1>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-5 mb-5">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full border-2 border-[#18489b]
                ${password[i] ? "bg-[#18489b]" : "bg-transparent"}`}
              />
            ))}
          </div>

          {/* KEYPAD */}
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3,4,5,6,7,8,9,"",0,"delete"].map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (item === "delete") {
                    handleDelete();
                  } else if (item !== "") {
                    handleNumber(item.toString());
                  }
                }}
                className="
                  aspect-square
                  rounded-[16px]
                  bg-white
                  shadow-sm
                  text-base
                  font-bold
                  text-[#18489b]
                  active:scale-95
                  transition
                  flex
                  items-center
                  justify-center
                "
              >
                {item === "delete" ? (
                  <Delete size={16} />
                ) : (
                  item
                )}
              </button>
            ))}
          </div>

          <p className="mt-5 text-[10px] text-[#18489b] opacity-70">
            clue : your birthday
          </p>
        </motion.div>
      </div>
        </motion.main>
  </AnimatePresence>
  );
}