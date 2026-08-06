import { motion } from 'framer-motion';
import { styles } from '../styles.js';
import { staggerContainer } from '../utils/motion.js';
/*

Section Wrapper : It is a higher order component , which takes another component as a arg
> It is generally used for when we want to proivide a same type of behaviour to diff component , whether its styling ,motion etc then we use this type of component

> Here we do two things
> 1st we add a motion styles staggerContainer into all the component which we wrap here and also a same padding from x and y
> 2nd we also provide a span below , which onClick move use two this span tag
*/
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
