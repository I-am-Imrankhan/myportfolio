import "../styles/about.scss";
import "@fortawesome/fontawesome-free/css/all.css";

export const About = () => (
  <div class="about">
    <h1 class="uppercase">
      Muhammad Imran
      <span class="text-primary"> Khan</span>
    </h1>
    <div class="subheading uppercase">
      Upplands Väsby Stockholm,
      <a href="mailto:epostimrankhan@gmail.com"> epostimrankhan@gmail.com</a>
    </div>
    <div class="body-text">
      <p>
        <span class="nav-favorite-phrase">
          {" "}
          I am passionate about my role as a developer{" "}
        </span>
        , with several years of experience in both mobile app and web
        development. Recently, I developed a user authentication-based website
        similar to blocket.se, utilizing React and Firebase. I have an
        insatiable curiosity for learning new concepts in the programming world.
        Currently, I am seeking a position as a Flutter developer within a
        company that offers opportunities for growth and continuous learning. I
        pride myself on being a quick learner, possessing strong programming
        skills, a keen eye for design and UX, and the ability to work
        effectively in a team. I am committed to staying current with industry
        trends and continually expanding my skill set.
      </p>
    </div>
    <div class="social">
      <ul>
        <li>Social, careful, confident, flexible.</li>
        <li>Keen to learn, Creating and curious.</li>
        <li>Problem solver, a good team player.</li>
      </ul>
    </div>

    <div class="social-icons">
      <a href="https://www.linkedin.com/in/muhammad-imran-khan-42b1a328/">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="https://github.com/I-am-Imrankhan">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
);
