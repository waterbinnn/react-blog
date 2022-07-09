import "./banner.css";
import "../../database/data.json";
import { useParams } from "react-router";

export default function PostBanner({ data }) {
  const { id } = useParams();
  const post = data.posts.find((x) => x.id == id);
  const backgroundImage = post.mainBg;
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})`,
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
