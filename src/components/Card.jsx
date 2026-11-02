
import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import "../assets/css/card.css";
import { Link } from "react-router-dom";

function Card() {
  const [cardClass, setCardClass] = useState("");
  const [isCardOpened, setIsCardOpened] = useState(false);
  const timerRef = useRef(null);

  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");
      setIsCardOpened(true);

      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1000);
    } else {
      setCardClass("close-half");

      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setCardClass("");
        timerRef.current = null;
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden px-4 py-8">

      <div className="w-full max-w-[400px] min-h-[100svh] flex flex-col items-center justify-center">

        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{ duration: 1.2 }}
        >
          <div
            id="card"
            className={cardClass}
            onClick={toggleCard}
          >

            <div id="card-inside">
              <div className="wrap">

                <p>Happy Birthday Sayang</p>

                <p>
                  selamat ulang tahun sayangku cinta ku semoga dengan
                  bertambahnya umur, kamu bisa menjadi pribadi yang
                  lebih baik lagi, sehat selalu, dilancarkan rezekinya,
                  dipermudah segela urusannya.
                </p>

                <p>
                  langkahmu semoga aku selalu ada di setiap prosesmu.
                </p>

                <p>
                  dan terimakasih telah memberiku cinta yang belum
                  pernah aku temui sebelumnya.
                </p>

                <p>
                  tetap menjadi wanita yang tidak berubah dari awal
                  hingga akhir yaa 💕
                </p>

                <p className="signed">Enduy</p>

              </div>
            </div>

            <div id="card-front">
              <div className="wrap">
                <h1>Happy Birthday!</h1>
              </div>
            </div>

          </div>
        </motion.div>

        {isCardOpened && (
          <motion.div
            className="mt-6 flex justify-center w-full"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Link to="/cake">
              <p className="px-7 py-3 bg-customBlue text-white font-medium text-base rounded-full hover:bg-blue-600 text-center">
                Next Page
              </p>
            </Link>
          </motion.div>
        )}

      </div>
    </div>
  );
}

export default Card;
