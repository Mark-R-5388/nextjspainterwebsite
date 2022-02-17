import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import styles from "../styles/Gallery.module.css";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Gallery Page</title>
      </Head>
      <Header />

      <div className={styles.gallery_text_container}>
        <h1 className={styles.gallery_text_header}>My Gallery</h1>
        <p className={styles.gallery_text_paragraph}>
          Take a look around at some of my work!
        </p>
      </div>

      <section className={styles.gallery_section}>
        <div className={styles.gallery_grid_container}>
          <div className={styles.gallery_image_container_main}></div>
          <div className={styles.gallery_image_container_medium}></div>
          <div className={styles.gallery_image_container_4}></div>
          <div className={styles.gallery_image_container_5}></div>
          <div className={styles.gallery_image_container_6}></div>
          <div className={styles.gallery_image_container_7}></div>
          <div className={styles.gallery_image_container_8}></div>

          <div className={styles.gallery_image_container_9}></div>
          <div className={styles.gallery_image_container_secondary}></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
