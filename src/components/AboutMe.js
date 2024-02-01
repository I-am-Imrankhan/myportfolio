import "../styles/about.scss";
import "@fortawesome/fontawesome-free/css/all.css";

export const About = () => (
  <div class="">
    <h1 class="uppercase">
      Muhammad Imran
      <span class="text-primary">Khan</span>
    </h1>
    <div class="subheading uppercase">
      Upplands Väsby Stockholm,
      <a href="mailto:epostimrankhan@gmail.com"> epostimrankhan@gmail.com</a>
    </div>
    <div class="body-text">
      <p>
        <span class="nav-favorite-phrase">
          {" "}
          I love working as a developer.{" "}
        </span>
        As a developer i have several years of experience in mobile app and web
        development. I have recently developed with user auth based a website
        which is a kind of blocket.se. I used React with Firebase in this
        project. I love to learn new things in programming world. I am searching
        for a job preferred as a Flutter developer with a company where i can
        see place for my self to grow and learn new things. I am fast learner,
        have good programming skills, design, UX, and team work. I am always
        upto date and trying to grow my skills with time.
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
