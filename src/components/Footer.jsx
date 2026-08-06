import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-black-200 bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black text-white-100">AshVerse</h2>
            <p className="mt-4 leading-7 text-secondary">
              Building scalable, user-focused web experiences with modern
              technologies and interactive 3D experiences.
            </p>
            <a
              href="/Ashutosh_Kesharwani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent
              px-5 py-3 font-semibold text-white-100 transition-all duration-300
              hover:bg-accent-2"
            >
              <FaDownload />
              <span>Resume</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white-100">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {["about", "experience", "projects", "highlights", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="capitalize text-secondary transition-colors hover:text-accent-2"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white-100">Connect</h3>

            <div className="mt-5 flex flex-col gap-4">
              <a
                href="https://github.com/Ashutosh-kesharwani/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-secondary transition-colors hover:text-accent-2"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ashutosh1406/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-secondary transition-colors hover:text-accent-2"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/ashutoshkesharwani20021406/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-secondary transition-colors hover:text-accent-2"
              >
                <SiLeetcode />
                LeetCode
              </a>

              <a
                href="mailto:ashutoshkesharwani20021406@gmail.com"
                className="flex items-center gap-3 break-all text-secondary transition-colors hover:text-accent-2"
              >
                <MdEmail />
                Email
              </a>
            </div>
          </div>

          {/* Credits */}
          <div>
            <h3 className="text-lg font-semibold text-white-100">Credits</h3>

            <div className="mt-5 space-y-4 text-sm leading-6 text-secondary">
              <p>
                3D PC model by{" "}
                <a
                  href="https://sketchfab.com/Yolala1232"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:text-accent-2"
                >
                  Yolala1232
                </a>{" "}
                via Sketchfab
                <span className="block text-xs">CC BY 4.0</span>
              </p>

              <p>
                Planet model by{" "}
                <a
                  href="https://sketchfab.com/cmzw"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:text-accent-2"
                >
                  cmzw
                </a>{" "}
                via Sketchfab
                <span className="block text-xs">CC BY 4.0</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black-200 pt-8 text-center text-sm text-secondary md:flex-row">
          <p>
            © {year} AshVerse. Designed & Developed by{" "}
            <span className="font-semibold text-white-100">
              Ashutosh Kesharwani
            </span>
          </p>

          <p>Built with React, Three.js, Framer Motion & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
