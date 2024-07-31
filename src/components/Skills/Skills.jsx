import React from 'react'; // Import useState
import { motion } from 'framer-motion';
import styles from './Skills.module.css'; // Make sure the path is correct
import html from '../Images/html5-badge-h-solo.png';
import css from '../Images/css.png';
import js from '../Images/JavaScript-logo.png';
import reactLogo from '../Images/react js.svg';
import bootstrap from '../Images/bootstrap-logo-shadow.png';
import sass from '../Images/Sass-Logo-800x500.png';
import tailwind from '../Images/Tailwind_CSS_Logo.svg.png';
import git from '../Images/Git.webp';
import mui from '../Images/mui.png';
import redux from '../Images/newwwwwwwwww.jpg';
import github from '../Images/realgithub.png';
import mysql from '../Images/realMySQL-Logo.png';
import { GiProgression } from "react-icons/gi";

const Skills = () => {
  const progressBarData = [
    { label: 'HTML', percentage: 100, bgColor: 'text-bg-warning' },
    { label: 'CSS, Bootstrap, Sass', percentage: 90, bgColor: 'text-bg-primary' },
    { label: 'JavaScript', percentage: 85, bgColor: 'text-bg-danger' },
    { label: 'React JS ', percentage: 95, bgColor: 'text-bg-success' }
  ];

  return (
    <>
      <div className={styles.contain}>
        <h1>Languages & Frameworks <i className="bi bi-tools" style={{ color: '' }}></i></h1>

        <div className={`${styles.first} container`}>
          <div className="row align-items-center justify-content-evenly" style={{ gap: '40px' }}>
            {[
              { name: 'HTML', img: html },
              { name: 'CSS', img: css },
              { name: 'JavaScript', img: js },
              { name: 'React JS', img: reactLogo },
              { name: 'Bootstrap', img: bootstrap },
            ].map((skill, index) => (
              <div className="col-md-2 col-sm-12" key={index}>
                <motion.div
                  className={styles.skill}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <h3>{skill.name}</h3>
                  <motion.img
                    src={skill.img}
                    alt={`${skill.name} logo`}
                    className={styles.skillImg}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.second} container`}>
          <div className="row align-items-center justify-content-between">
            {[
              { name: 'Material UI', img: mui },
              { name: 'Tailwind CSS', img: tailwind },
              { name: 'Sass', img: sass },
              { name: 'Git', img: git },
              { name: 'Redux', img: redux },
            ].map((skill, index) => (
              <div className="col-md-2 col-sm-12" key={index}>
                <motion.div
                  className={styles.skill}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <h3>{skill.name}</h3>
                  <motion.img
                    src={skill.img}
                    alt={`${skill.name} logo`}
                    className={styles.skillImg}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    style={skill.name === 'Github' ? { width: '130px', backgroundColor: 'white' } : {}}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.third} container`}>
          <div className="row align-items-center justify-content-between">
            {[
              { name: 'Github', img: github },
              { name: 'MySQL', img: mysql },
            ].map((skill, index) => (
              <div className="col-md-6 col-sm-12" key={index}>
                <motion.div
                  className={styles.skill}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <h3>{skill.name}</h3>
                  <motion.img
                    src={skill.img}
                    alt={`${skill.name} logo`}
                    className={styles.skillImg}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    style={skill.name === 'Github' ? { width: '130px', backgroundColor: 'white' } : {}}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skill Progress Bars */}
      <div className={styles.progress}><h1>Progress bars <GiProgression style={{marginBottom:'15px'}} /></h1></div>

      <div className={styles.skill_container}>
      <div className="container">
        <div className="row">
          {progressBarData.map((skill, index) => (
            <div key={index} className="col-12 mb-4">
              <h4>{skill.label}</h4>
              <div className={`progress ${styles.progressbar}`} role="progressbar" aria-valuenow={skill.percentage} aria-valuemin="0" aria-valuemax="100">
                <motion.div
                  className={`progress-bar ${skill.bgColor}`}
                  style={{ width: `${skill.percentage}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1 }}
                >
                  {skill.percentage}%
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </>
  );
};

export default Skills;
