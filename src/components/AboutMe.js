import "../styles/about.scss";
import "@fortawesome/fontawesome-free/css/all.css";

export const About = () => (
  <div className="about">
    <h1 className="uppercase">
      Muhammad Imran
      <span className="text-primary"> Khan</span>
    </h1>
    <div className="subheading uppercase">
      Upplands Väsby Stockholm,
      <a href="mailto:epostimrankhan@gmail.com"> imrankhanswati@gmail.com</a>
    </div>
    <div className="body-text">
      <p>
        <span className="nav-favorite-phrase">
          {" "}
          I am passionate about my role as a developer{" "}
        </span>
        , with several years of experience in both mobile app and web
        development. Recently, I developed a user authentication-based website
        similar to blocket.se, utilizing React and Firebase. I have an
        insatiable curiosity for learning new concepts in the programming world.
        Currently, I am seeking a position within a
        company that offers opportunities for growth and continuous learning. I
        pride myself on being a quick learner, possessing strong programming
        skills, a keen eye for design and UX, and the ability to work
        effectively in a team. I am committed to staying current with industry
        trends and continually expanding my skill set.
      </p>
    </div>
    <div className="social">
      <ul>
        <li>Social, careful, confident, flexible.</li>
        <li>Keen to learn, Creating and curious.</li>
        <li>Problem solver, a good team player.</li>
      </ul>
    </div>

    <div className="social-icons">
      <a href="https://www.linkedin.com/in/muhammad-imran-khan-42b1a328/">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://github.com/I-am-Imrankhan">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </div>
);
