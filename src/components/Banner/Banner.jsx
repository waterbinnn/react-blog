import "./banner.css";

function Banner({ mainTitle, subTitle, description }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
      }}
    >
      <div className="max-width">
        <div className="banner-contents">
          <p className="sub-text">{subTitle}</p>
          <p className="main-text">{mainTitle}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
