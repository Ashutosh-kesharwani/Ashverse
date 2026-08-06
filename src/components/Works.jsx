import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, image, description, tags, live_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="h-full"
    >
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-card w-full h-full min-h-[455px] border border-black-200"
      >
        <article className="h-full flex flex-col">
          {/* Project Header */}
          <div className="relative h-48 w-full overflow-hidden rounded-card">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />

            <h3 className="absolute bottom-5 left-5 right-5 text-xl font-bold text-white-100 blue-text-gradient">
              {name}
            </h3>
          </div>

          {/* Description */}
          <p className="mt-5 text-secondary text-[14px] leading-6 min-h-[96px]">
            {description}
          </p>

          {/* Tags */}
          <div className="mt-4 min-h-[56px] flex flex-wrap content-start gap-x-3 gap-y-1.5">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          {/* Button */}
          <div className="mt-auto pt-5 h-[68px]">
            {live_link && (
              <a
                href={live_link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border border-accent px-4 py-2 text-sm font-semibold text-white-100 transition-colors duration-300 hover:bg-accent"
              >
                View Live Project
              </a>
            )}
          </div>
        </article>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-7.5 text-secondary"
        >
          A selection of full-stack, frontend, and machine-learning projects
          that demonstrate my ability to build useful, production-ready web
          experiences and solve practical problems.
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
