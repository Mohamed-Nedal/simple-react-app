import styles from "./footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const socialLinks = [
  { icon: FaFacebook, url: "/" },
  { icon: FaTwitter, url: "/" },
  { icon: FaLinkedinIn, url: "/" },
  { icon: AiOutlineGlobal, url: "/" },
];

const FooterInfo = () => {
  return (
    <div className="bg-mainColor text-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-8">
          <div className="col-span-1 text-center">
            <h3 className={styles.heading}>location</h3>
            <p className={styles.desc}>
              2215 John Daniel Drive Clark, MO 65243
            </p>
          </div>

          <div className="col-span-1 text-center">
            <h3 className={styles.heading}>around the web</h3>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  href={link.url}
                  key={link.icon}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 text-white"
                >
                  {<link.icon />}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 text-center">
            <h3 className={styles.heading}>about freelancer</h3>
            <p className={styles.desc}>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
