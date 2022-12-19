import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Index() {
  const list = useLoaderData();

  return (
    <div className="index-page">
      <h1>Welcome</h1>
      <h4 className="fancy-display">
        <h5>
          Today is a very busy day so I decided to build a to-do list of the
          tasks I need to accomplish in order to stay focused.
        </h5>
        <Link to="/list" className="link">
          My To do List
        </Link>
      </h4>
    </div>
  );
}
