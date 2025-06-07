import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import portfolio from '../Images/porfolio.png';
import netflix from '../Images/netflix.png';
import skillup from '../Images/skillup.png'
import ecommer from '../Images/travel.png';
import estate from '../Images/real estate.png'
import tomato from '../Images/tomato.png'
const Projects = () => {
  // Define animation variants with more effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 20, scale: 0.9, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  };

  const buttonHover = {
    rest: { scale: 1, backgroundColor: '#fff' },
    hover: {
      scale: 1.1,
      backgroundColor: '#f0f0f0',
      transition: { duration: 0.3 }
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <motion.div
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="row justify-content-around">
            <motion.div
              className="col-lg-4 col-md-5"
              style={{ margin: "2px",marginTop: '25px' }}
              variants={fadeInUp}
            >
              <img src={portfolio} className='img-fluid' alt="Portfolio" />
              <div className={styles.cards}>
                <div><h4>My Portfolio</h4></div>
                <div className={styles.btn}>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a href="https://github.com/Amanmandahad/Portfolio" style={{ color: "black" }}>Code</a>
                  </motion.button>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a href="https://portfolio-pearl-xi-51.vercel.app/" style={{ color: 'black' }}>Demo</a>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-4 col-md-5"
              style={{ margin: "px",marginTop: '25px'}}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <img src={netflix} className='img-fluid' alt="Netflix" />
              <div className={styles.cards}>
                <div><h4>Netflix</h4></div>
                <div className={styles.btn}>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a href="https://github.com/Amanmandahad/Netflix" style={{ color: 'black' }}>Code</a>
                  </motion.button>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a href="https://netflix-oho2.onrender.com/" style={{ color: 'black' }}>Demo</a>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <br />
        <motion.div
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="row justify-content-around">
            <motion.div
              className="col-lg-4 col-md-5"
              style={{ margin: "2px",marginTop: '25px' }}
              variants={fadeInUp}
            >
              <img src={ecommer} className='img-fluid' alt="Portfolio" />
              <div className={styles.cards}>
                <div><h4>Travel website</h4></div>
                <div className={styles.btn}>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a href="https://github.com/Amanmandahad/Travel-website" style={{ color: "black" }}>Code</a>
                  </motion.button>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a href="https://travel-website-nine-iota.vercel.app/" style={{ color: 'black' }}>Demo</a>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-4 col-md-5"
              style={{ margin: "px",marginTop: '25px'}}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <img src={estate} className='img-fluid' alt="Real estate" />
              <div className={styles.cards}>
                <div><h4>Real estate</h4></div>
                <div className={styles.btn}>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a href="https://github.com/Amanmandahad/React-real-estate-project" style={{ color: 'black' }}>Code</a>
                  </motion.button>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a href="https://react-real-estate-project-xi.vercel.app/" style={{ color: 'black' }}>Demo</a>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
       
       <br />
         <motion.div
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="row justify-content-around">
            <motion.div
              className="col-lg-4 col-md-5"
              style={{ margin: "2px",marginTop: '25px' }}
              variants={fadeInUp}
            >
              <img src={skillup} className='img-fluid' alt="Skillup" />
              <div className={styles.cards}>
                <div><h4>Skill up</h4></div>
                <div className={styles.btn}>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a href="https://github.com/Amanmandahad/Skillup" style={{ color: "black" }}>Code</a>
                  </motion.button>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a href="https://skilluphub.vercel.app/" style={{ color: 'black' }}>Demo</a>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-4 col-md-5"
              style={{ margin: "px",marginTop: '25px'}}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <img src={tomato} className='img-fluid' alt="tomato" />
              <div className={styles.cards}>
                <div><h4>Tomato</h4></div>
                <div className={styles.btn}>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a href="https://github.com/Amanmandahad/Tomato" style={{ color: 'black' }}>Code</a>
                  </motion.button>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a href="https://tomato-seven-snowy.vercel.app/" style={{ color: 'black' }}>Demo</a>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Projects;
