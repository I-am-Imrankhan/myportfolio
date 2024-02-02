import "../styles/education.scss";

export const Education = () => {
  return (
    <div class="educations">
      <h2 class="">Education</h2>

      <div class="education">
        <div class="resume-content">
          <h4 class="title ">Frontend - Development</h4>
          <div class="subheading">Yrkeshögskolan examen</div>
          <div className="school">EC Utbildning</div>
          <p className="p-text">
            Javascript, React, Angular, HTML, CSS, Bootstrap UI , UX och
            Graphical design Node.js, npm,Express, JSON, json-server, MongoDB,
            .net Project management Agil methedology Scrum Process Kanban
          </p>
          <ul class="list-inline dev-icons">
            <li class="list-inline-item">
              <i class="fab fa-html5"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-css3-alt"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-js-square"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-vuejs"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-react"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-node-js"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-npm"></i>
            </li>
          </ul>
        </div>
        <div class="resume-date">
          <span class="text-primary">September 2018 - June 2020</span>
        </div>
      </div>

      <div class="education">
        <div class="resume-content">
          <h3 class="mb-0">Mobil app development</h3>
          <div class="subheading mb-3">Yrkeshögskolan</div>
          <div>NEWTON YH – APPLICATION DEVELOPMENT 400 YHP, STOCKHOLM</div>
          <p className="p-text">
            Android, Java, xCode, Swift, , JavaScript, HTML, CSS, Bootstrap UI ,
            UX och graphic design Firebse, Firestore, Realtime
            database(Firebase), SQL, SQLLite, Ionic app development. Project
            management Agil methedology Scrum Process Kanban,
          </p>
          <ul class="list-inline dev-icons">
            <li class="list-inline-item">
              <i class="fab fa-html5"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-css3-alt"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-js-square"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-android"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-apple"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-java"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-npm"></i>
            </li>
          </ul>
        </div>
        <div class="resume-date">
          <span class="text-primary">August 2016 – June 2018</span>
        </div>
      </div>

      <div class="education">
        <div class="resume-content">
          <h3 class="mb-0">Mathematics</h3>
          <div class="subheading">BS(HONS)</div>
          <div>Bachelor of Mathematics 4 years</div>
          <div className="subjects">
            <p className="p-text">● Mathematics A, B.</p>
            <p className="p-text">● Abstract Algebra I, II, Real Analysis.</p>
            <p className="p-text">● Topology I, II</p>
            <p className="p-text">
              ● Topology I, II. Complex Analysis I, II Economics, Statistics
            </p>
            <p className="p-text">● Introduction programming, introduction to C++</p>
            <p className="p-text">
              ● Functional analysis I, II. Partial differential equation. Number
              theory.
            </p>
            <p className="p-text">● Physics I, II</p>
          </div>
        </div>
        <div class="resume-date">
          <span class="text-primary">2003 – 2007</span>
        </div>
      </div>
    </div>
  );
};
