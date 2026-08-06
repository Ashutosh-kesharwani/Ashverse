import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--color-timeline-card)",
        color: "var(--color-white-100)",
        borderRadius: "var(--radius-card)",
        border: "1px solid rgba(91,140,255,0.12)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid var(--color-timeline-arrow)",
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg || "var(--color-timeline-icon)",
        border: "2px solid var(--color-black-200)",
        boxShadow: "none",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white-100 text-[24px] font-bold">
          {experience.title}
        </h3>

        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 ml-5 list-disc space-y-3">
        {experience.points.map((point, index) => (
          <li
            key={index}
            className="text-white-100 text-[15px] leading-7 tracking-wide marker:text-accent-2"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>

        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="var(--color-accent)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
