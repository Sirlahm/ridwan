import React from "react";
import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      href={props.mail}
      className={` ${props.className} mt-7 inline-block `}
      onClick={props.onClick}
    >
      <p
        className={` mt-2 border-2 border-primary md:border-[#333333] text-xl font-mosk text-primary md:text-[#333333] py-3  px-12 cursor-pointer md:hover:bg-[#333333] rounded md:hover:text-white transition-all duration-500 `}
      >
        {props.children}
      </p>
    </motion.a>
  );
};

export default Button;

{
  /* <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" class="bow-arrow"><path fill="none" stroke="#4831d4" stroke-width="2" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg> */
}
