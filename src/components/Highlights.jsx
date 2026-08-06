import { motion } from "framer-motion";

import { achievements, certifications, education } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const DetailCard = ({ title, items, index }) => (
  <motion.article
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="h-full rounded-card border border-black-200 bg-black-200 p-8"
  >
    <h3 className="text-[22px] font-bold text-white-100">{title}</h3>

    <ul className="mt-5 space-y-3 text-[15px] leading-7 text-secondary">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-5 before:absolute before:left-0 before:text-accent before:content-['•']"
        >
          {item}
        </li>
      ))}
    </ul>
  </motion.article>
);

const Highlights = () => {
  return (
    <section className="mt-12">
      {/* Outer Wrapper */}
      <div className="rounded-card bg-black-100">
        {/* Header */}
        <div
          className={`section-header rounded-card ${styles.padding} min-h-[240px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Beyond the code</p>

            <h2 className={styles.sectionHeadText}>Highlights.</h2>
          </motion.div>
        </div>

        {/* Floating Cards */}
        <div
          className={`-mt-14 ${styles.paddingX} pb-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7`}
        >
          <DetailCard title="Achievements" items={achievements} index={0} />

          <DetailCard title="Certifications" items={certifications} index={1} />

          <DetailCard
            title="Education"
            items={education.map(
              ({ institution, detail }) => `${institution} — ${detail}`
            )}
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Highlights, "highlights");
