import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/About.module.css";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <main className={styles.about_main}>
        <div className={styles.about_container}>
          <div className={styles.about_main_text_container}>
            <h1 className={styles.about_main_header}>The Ultimate Painter</h1>
            <p className={styles.about_main_paragraph}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis quam officiis quisquam, veritatis recusandae eos
              quasi fuga ea molestiae, earum, ipsa sequi nisi odit consequatur
              dicta ipsam natus! Atque, quae.
            </p>
          </div>
          <div className={styles.about_image_container}>
            <Image
              className={styles.about_image}
              src="/images/about/about-main.jpg"
              alt="ultimate painter outside"
              layout="fill"
            />
          </div>
        </div>
      </main>

      <section className={styles.about_section_1}>
        <div className={styles.about_container}>
          <div className={styles.about_section_image_container}>
            <Image
              className={styles.about_image}
              src="/images/about/about-2.jpg"
              alt="ultimate painter outside"
              layout="fill"
            />
          </div>
          <div className={styles.about_section_text_container}>
            <h2 className={styles.about_section_header}>What I Do</h2>
            <p className={styles.about_section_paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              illum nihil explicabo ut ducimus impedit. At tenetur rerum
              voluptas est?
            </p>
            <p className={styles.about_section_paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              vitae unde dolorum, soluta consequatur numquam quo nisi dolore
              deserunt quidem, neque iure placeat, ipsum blanditiis!
            </p>
          </div>
        </div>
      </section>

      <section className={styles.about_section_2}>
        <div className={styles.about_container}>
          <div className={styles.about_section_text_container}>
            <h2 className={styles.about_section_header_2}>Why I Do It</h2>
            <p className={styles.about_section_paragraph_2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              illum nihil explicabo ut ducimus impedit. At tenetur rerum
              voluptas est?
            </p>
            <p className={styles.about_section_paragraph_2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              vitae unde dolorum, soluta consequatur numquam quo nisi dolore
              deserunt quidem, neque iure placeat, ipsum blanditiis!
            </p>
          </div>
          <div className={styles.about_section_image_container}>
            <Image
              className={styles.about_image}
              src="/images/about/about-3.jpg"
              alt="ultimate painter outside"
              layout="fill"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
