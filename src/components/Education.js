import "../styles/education.scss";
import { educations } from "../utils";

export const Education = () => {
  const myeducations = educations();
  return (
    <div className="educations">
      <h2 className="">Education</h2>
      {myeducations.map((education, index) => (
        <div className="education" key={index}>
          <div className="resume-content">
            <h3 className="title ">{education.title}</h3>
            <div className="subheading">{education.subheading}</div>
            <div className="school">{education.school}</div>
            <p className="p-text">{education.description}</p>
            {education.icons && education.icons.length > 0 && (
              <ul className="list-inline dev-icons">
                {education.icons.map((icon, icon_index) => (
                  <li className="list-inline-item" key={icon_index}>
                    <i className={icon}></i>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="resume-date">
            <span className="text-primary">{education.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
