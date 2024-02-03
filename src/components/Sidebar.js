import {
  Link,
  useMatch,
} from "react-router-dom";
import profilePic from "../profilepic.png";
export const Sidebar = () => {
  const match1 = useMatch("/about");
  const match2 = useMatch("/education");
  const match3 = useMatch("/experience");
  const match4 = useMatch("/skills");
  return (
    <div className="sidebar">
      <img
        className="profilepic"
        src={profilePic}
        alt="logo"
        allt="profile picture"
      />

      <ul>
        <li className={match1 ? "active" : "inactive"}>
          <Link to="/about">About me</Link>
        </li>
        <li className={match2 ? "active" : "inactive"}>
          <Link to="/education">Education</Link>
        </li>
        <li className={match3 ? "active" : "inactive"}>
          <Link to="/experience">Experience </Link>
        </li>
        <li className={match4 ? "active" : "inactive"}>
          <Link to="/skills">Skills</Link>
        </li>
      </ul>
    </div>
  );
};
