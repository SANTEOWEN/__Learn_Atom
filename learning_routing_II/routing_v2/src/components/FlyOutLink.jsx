import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";

export const FlyOutLink = ({children, href, Content}) => {
  
  const [open, setOpen] = useState(false);
  const showFlyout = open && Content;
 
  return (
      <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative h-fit Z-50 ">
        <Link to={href} className="text-white text-lg">
          {children}
          <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-white transition-transform duration-300 ease-in" style={{ transform: showFlyout ? "scale(1)" : "scaleX(0)"}}></span>
        </Link>

        <AnimatePresence>
          {showFlyout && (
            <motion.div initial={{opacity: 0, y: 15}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 15}}
                        style={{x: "-50%"}}
                        transition={{duration: 0.3, ease: 'easeOut'}}
                        className="absolute left-1/2 top-14 text-black">
                          <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" /> 
                          <Content />
            </motion.div>
          )}
        </AnimatePresence>
      </div>


  );
}
 
export default FlyOutLink;
