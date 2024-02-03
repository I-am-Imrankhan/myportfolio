import "../styles/experience.scss";
import { getExperiences } from "../utils.js";

export const Experience = () => {
  const experiences = getExperiences();
  return (
    <div className="experience">
      <h1>Experience</h1>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-card">
          <h2 className="linear-gradient-background">{experience.name}</h2>
          <div>
            <strong>Type:</strong> {experience.type}
          </div>
          <div>
            <strong>Title:</strong> {experience.purpose}
          </div>
          <div>
            <strong>About:</strong> {experience.about}
          </div>
          <div>
            <strong>Description:</strong> {experience.description}
          </div>
          <div>
            <strong>Period:</strong> {experience.period}
          </div>
          {experience.projectDetails.githubUrl && (
            <div>
              <strong>Github: </strong>{" "}
              <a href={experience.projectDetails.githubUrl}>
                {experience.projectDetails.name}
              </a>
            </div>
          )}

          <div>
            <strong>Keypoints: </strong> {experience.projectDetails.keyPoints}
          </div>
          {experience.projectDetails.url && (
            <div>
              <strong> Visit: </strong>
              <a href={experience.projectDetails.url}>Visit</a>{" "}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
