"use client";
import React from "react";
import "./Skills.css";
import Github from "./Github";
import GitHubCalendar from "react-github-calendar";


const backendSkills = [
  {
    name: "Java",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Spring Framework",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Spring Boot",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Hibernate",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg",
  },
  {
    name: "REST APIs",
    image: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
  },
  {
    name: "Maven",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
  },
  {
    name: "MySQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Node Js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express Js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  }
];

const frontendSkills = [
  {
    name: "React Js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Redux",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Next Js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
  },
  {
    name: "HTML",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  }
];

const deploymentSkills = [
  {
    name: "Netlify",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
  },
  {
    name: "Vercel",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  {
    name: "Firebase Hosting",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "AWS Amplify",
    image: "https://images.seeklogo.com/logo-png/42/1/aws-amplify-logo-png_seeklogo-426696.png", // Amplify official logo
  },
  {
    name: "AWS EC2",
    image: "https://images.seeklogo.com/logo-png/27/1/aws-ec2-elastic-compute-cloud-logo-png_seeklogo-272851.png",
  },
  {
    name: "AWS RDS",
    image: "https://igorjovanovic.com/wp-content/uploads/2022/11/amazon-rds-logo.png",
  },
  {
    name: "AWS S3",
    image: "https://images.seeklogo.com/logo-png/27/1/aws-amazon-web-services-logo-png_seeklogo-272842.png",
  },
];

const skills = [
  // Backend (Java + Frameworks + DBs)
  {
    name: "Java",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Spring Framework",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Spring Boot",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Hibernate",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg",
  },
  {
    name: "MySQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Maven",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
  },
  {
    name: "REST APIs",
    image: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
  },

  // DevOps + Deployment
  {
    name: "Docker",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "NGINX",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  {
    name: "SonarQube",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/SonarQube-logo.png",
  },
  {
    name: "Jenkins",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  },

  // Frontend (React + Styling)
  {
    name: "React Js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Redux",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Next Js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
  },
  {
    name: "HTML",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  // Backend (JS Stack)
  {
    name: "Node Js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express Js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  // Web Communication
  {
    name: "Web Sockets",
    image: "https://cdn-icons-png.flaticon.com/512/10271/10271323.png",
  },
  {
    name: "Socket.io",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },

  // Tools & Utilities
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "AWS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    name: "JUnit",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", // No specific icon, used Java as a fallback
  }
];

const otherSkills = [
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Postman",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Swagger",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
  },
  {
    name: "Chakra UI",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", // fallback used as Chakra doesn't have a dedicated one
  },
  {
    name: "Bootstrap",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Material UI",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "VS Code",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "SSL Certification",
    image: "https://cdn-icons-png.flaticon.com/512/747/747376.png", // a common lock icon
  },
  {
    name: "SonarQube",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sonarqube/sonarqube-original.svg", // valid fallback from Devicon
  },
];


const ImageAnimate = {
  offscreen: { y: 0, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    viewport: { once: false, amount: 1 },
    transition: { duration: 1 },
  },
};
// console.log("first")
export default function Skills() {
  return (
    <div id="skills">
      <h1 style={{ fontWeight: 500 }}>Skills</h1>
      <div id="skill_section">
        <h2>Backend Skills</h2>
        <div className="skills-card">
          {backendSkills.map((e) => {
            return (
              <div className="skill_box" key={e.name}>
                <img src={`${e.image}`} alt="" className="skills-card-img" />
                <span className="skills-card-name">{e.name}</span>
              </div>
            );
          })}
        </div>
        <span className="break-line-span"></span>
        <h2>Frontend Skills</h2>
        <div className="skills-card">
          {frontendSkills.map((e) => {
            return (
              <div className="skill_box" key={e.name}>
                <img src={`${e.image}`} alt="" className="skills-card-img" />
                <span className="skills-card-name">{e.name}</span>
              </div>
            );
          })}
        </div>
        <span className="break-line-span"></span>
        <h2>Deployment Skills</h2>
        <div className="skills-card">
          {deploymentSkills.map((e) => {
            return (
              <div className="skill_box" key={e.name}>
                <img src={`${e.image}`} alt="" className="skills-card-img" />
                <span className="skills-card-name">{e.name}</span>
              </div>
            );
          })}
        </div>
        <span className="break-line-span"></span>
        <h2>Other Skills and Tools</h2>
        <div className="skills-card">
          {otherSkills.map((e) => {
            return (
              <div className="skill_box" key={e.name}>
                <img src={`${e.image}`} alt="" className="skills-card-img" />
                <span className="skills-card-name">{e.name}</span>
              </div>
            );
          })}
        </div>

      </div>
      <h1 style={{ fontWeight: 500 }}>My Github Activity</h1>
      <div className="githubConatiner">
        {/* <div> */}
        <img
          id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com?user=RamR3R&theme=buefy-dark&hide_border=true&background=191924&border=854CE6&ring=854CE6&currStreakNum=854CE6&sideLabels=854CE6&currStreakLabel=854CE6&stroke=854CE6"
          alt="GitHub Streak"
        />
        {/* <div className="react-activity-calendar">
          <Github />
        </div> */}
        {/* </div> */}
        <div>
          <a href="https://git.io/streak-stats">
            <img
              id="github-streak-stats"
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=RamR3R&theme=shades_of_purple"
              alt="GitHub Streak"
            />
          </a>
        </div>

        <div style={{ height: "0px" }}>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=RamR3R&layout=compact&theme=dark"
            alt=""
            id="github-top-langs"
            style={{ height: "0px" }}
          />
        </div>
        <div style={{ height: "0px" }}>
          <img
            src="https://github-readme-stats.vercel.app/api?username=RamR3R&show_icons=true&theme=transparent"
            id="github-stats-card"
            alt=""
            style={{ height: "0px" }}
          />
        </div>
      </div>
    </div>
  );
}
