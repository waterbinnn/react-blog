import "./banner.css";

export default function PostBanner({ background }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/post-background6.jpg)`,
      }}
    >
      <div className="max-width">
        <div className="banner-contents">
          <p className="today">
            May <em>25</em> Wednesday
          </p>
        </div>
      </div>
    </div>
  );
}
