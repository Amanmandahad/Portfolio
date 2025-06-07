import React from 'react';
import styles from './Skills.module.css';

// Import your skill icons
import html from '../Images/html5-badge-h-solo.png';
import cssLogo from '../Images/css.png';
import js from '../Images/JavaScript-logo.png';
import reactLogo from '../Images/React_js-removebg-preview.png';
import bootstrap from '../Images/bootstrap-logo-shadow.png';
import nodejs from '../Images/node-js-symbol-ripa-doyoung.jpg';
import mongodb from '../Images/Mongodb.png';
import expressjs from '../Images/1_q6b32yNdlpyQjDZlAc1QEg.png';
import nextjs from '../Images/nextjs-drupal.jpg';

// Import your tool/library icons
import mui from '../Images/mui.png';
import tailwind from '../Images/Tailwind_CSS_Logo.svg.png';
import sass from '../Images/Sass-Logo-800x500.png';
import git from '../Images/Git.webp';
import redux from '../Images/Redux-removebg-preview.png';

const skillsArray = [
  { name: 'HTML', img: html },
  { name: 'CSS', img: cssLogo },
  { name: 'JavaScript', img: js },
  { name: 'ReactJS', img: reactLogo },
  { name: 'Redux', img: redux },
,
  { name: 'NodeJS', img: nodejs },
  { name: 'ExpressJS', img: expressjs },
  { name: 'MongoDB', img: mongodb },
  { name: 'NextJS', img: nextjs },
];

const toolsArray = [
  { name: 'Material UI', img: mui },
  { name: 'Tailwind CSS', img: tailwind },
  { name: 'Sass', img: sass },
  { name: 'Git', img: git },
   { name: 'Bootstrap', img: bootstrap }
];

const Skills = () => {
  return (
    <div className={styles.contain}>
      {/* --- Languages & Frameworks Section --- */}
      <h2>Languages &amp; Frameworks</h2>
      <p>Here are some of the tools and technologies I work with:</p>

      <div className={styles['skills-grid']}>
        {skillsArray.map((skill, idx) => (
          <div className={styles.skill} key={idx}>
            <img
              src={skill.img}
              alt={`${skill.name} logo`}
              className={styles.skillImg}
            />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

      {/* --- Tools & Libraries Section --- */}
      <h2 style={{ marginTop: '64px' }}>Tools &amp; Libraries</h2>
      <p>These are additional libraries and tools I frequently use:</p>

      <div className={styles['skills-grid']}>
        {toolsArray.map((tool, idx) => (
          <div className={styles.skill} key={idx}>
            <img
              src={tool.img}
              alt={`${tool.name} logo`}
              className={styles.skillImg}
            />
            <h3>{tool.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
