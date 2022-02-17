import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <p className={styles.footer_text}>The Ultimate Painter &copy; 2022</p>
        <div className={styles.footer_contact_section}>
          <div className={styles.footer_phone_email_container}>
            <p className={styles.footer_phone_email_text}>(888) 888 - 8888</p>
            <p className={styles.footer_phone_email_text}>email@email.com</p>
          </div>
          <div className={styles.footer_social_container}>
            <Link href="https://instagram.com">
              <a target="_blank" className={styles.footer_social_link}>
                <BsInstagram />
              </a>
            </Link>
            <Link href="https://facebook.com">
              <a target="_blank" className={styles.footer_social_link}>
                <BsFacebook />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
