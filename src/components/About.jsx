import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-65 w-full "
    tiltMaxAngleX={12}
    tiltMaxAngleY={12}
    transitionSpeed={600}
    glareEnable={false}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.25, 0.75)}
      className="green-pink-gradient rounded-card p-px "
    >
      <div className="service-card rounded-card min-h-70 py-8 px-10 flex flex-col items-center justify-evenly">
        <img
          src={icon}
          alt={title}
          className="service-icon w-16 h-16 object-contain"
        />

        <h3 className="text-white-100 text-[22px] font-semibold text-center leading-snug">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>

        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-8 text-secondary"
      >
        Full Stack Developer passionate about building scalable web applications
        and creating intuitive user experiences. Experienced with React,
        Node.js, Express, MongoDB, and modern JavaScript, delivering
        production-ready applications and solving real-world engineering
        problems.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
