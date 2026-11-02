
import React from "react";
import { motion } from "framer-motion";

const SectionWrapper = ({ children }) => {
  return (
    <div className="min-h-screen min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden px-4">
      <div className="w-full max-w-[450px] min-h-screen min-h-[100svh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="w-[min(300px,85vw)] aspect-square relative mx-auto"
          initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{ duration: 1.2 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper;
