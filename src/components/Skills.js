import "../variables.scss";
import "../styles/skills.scss";

export const Skills = () => {
  return (
    <div className="skills">
      <h2 className="title">IT Skills</h2>
      <ul className="">
        <li>
          <i className="fa-li fa fa-check"></i>
          Development envornments: vsCode, xCode, Android Studio, Figma,
          Balsamiq, Trello, Github, Bitbucket.
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          Operation systems: Mac, Windows , Android, iOS.
        </li>
        <li>
          <i className="fa-li fa fa-check"></i>
          Softwares: MS Office, Google (Drive,Docs, Sheets), Microsoft Teams.
        </li>
      </ul>
    </div>
  );
};
