import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlyOutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);
    const showFlyout = open && FlyoutContent;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className='relative h-fit w-fit z-50'>

            <a href={href} className='relative text-white font-medium cursor-pointer'>
                {children}
                <span style={{
                    transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                }} className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-white transition-transform duration-300 ease-out' />
            </a>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ x: "-50%" }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className=' absolute left-1/2 top-14  text-black'>
                        <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default FlyOutLink