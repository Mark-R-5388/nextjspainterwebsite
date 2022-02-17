import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />

      <section className={styles.home_section}>
        <Image
          priority
          className={styles.home_image}
          src="/images/homepage/home-lg.jpg"
          layout="fill"
          alt="swirling painting"
        />
        <div className={styles.home_hero_text_container}>
          <h1 className={styles.home_hero_text_header}>The Ultimate Painter</h1>
          <p className={styles.home_hero_text_paragraph}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
            voluptas!
          </p>
        </div>
      </section>

      <main className={styles.home_main}>
        <div className={styles.home_main_container}>
          <div className={styles.home_main_image_container}>
            <Image
              className={styles.home_main_image}
              src="/images/homepage/home-image-1.jpg"
              alt="swirling hapiness"
              layout="fill"
            />
          </div>
          <div className={styles.home_main_text_container}>
            <h2 className={styles.home_main_text_header}>Welcome To My Site</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              nihil corporis a sequi voluptates sint amet, delectus, nam ratione
              eos consequatur unde? Accusamus at sint voluptate numquam. Quos,
              iusto tempore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              exercitationem fuga sunt numquam eveniet voluptate repudiandae
              earum voluptatum at enim!
            </p>
          </div>
        </div>
      </main>

      <section className={styles.home_section_2}>
        <div className={styles.home_section_container}>
          <Card image="/images/homepage/home-section-1.jpg" alt="home 1" />
          <Card image="/images/homepage/home-section-2.jpg" alt="home 2" />
          <Card image="/images/homepage/home-section-3.jpg" alt="home 3" />
        </div>
      </section>
      <Footer />
    </>
  );
}
