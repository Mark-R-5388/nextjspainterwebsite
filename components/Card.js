import Image from "next/image";
import styles from "../styles/Card.module.css";

const Card = ({ image, alt }) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_image_container}>
        <Image
          priority
          className={styles.card_image}
          src={image}
          alt={alt}
          layout="fill"
        />
      </div>
      <div className={styles.card_text_container}>
        <h3 className={styles.card_text_header}>Header 3</h3>
        <p className={styles.card_text_paragraph}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
          molestiae, adipisci pariatur aspernatur sit porro?
        </p>
      </div>
    </div>
  );
};

export default Card;
