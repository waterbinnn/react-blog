import styles from "./banner.module.css";

function Banner({ mainTitle, subTitle, description }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
      }}
    >
      <div className={styles["max-width"]}>
        <div className={styles["banner-contents"]}>
          <p className={styles["sub-text"]}>{subTitle}</p>
          <p className={styles["main-text"]}>{mainTitle}</p>
          <p className={styles["description"]}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
