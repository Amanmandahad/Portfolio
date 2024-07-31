import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import portfolio from '../Images/portfolio.img.png';
import gemini from '../Images/gemini.pic.png';
import ecommer from '../Images/Ecommerce-pic.png';

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
              className="col-md-4"
              style={{ margin: "15px" }}
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
                    <a href="" style={{ color: 'black' }}>Demo</a>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-md-4"
              style={{ margin: "15px" }}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <img src={gemini} className='img-fluid' alt="Google Gemini" />
              <div className={styles.cards}>
                <div><h4>Google Gemini</h4></div>
                <div className={styles.btn}>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a href="https://github.com/Amanmandahad/Google-gemini" style={{ color: 'black' }}>Code</a>
                  </motion.button>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a href="https://google-gemini-nu-lilac.vercel.app/" style={{ color: 'black' }}>Demo</a>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <br />
        <br />

        <motion.div
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="row justify-content-around">
            <motion.div
              className="col-md-5"
              style={{ margin: "15px" }}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <img src={ecommer} className='img-fluid' alt="Travel Website" />
              <div className={styles.cards}>
                <div><h4>Travel Website</h4></div>
                <div className={styles.btn}>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <a href="https://github.com/Amanmandahad/Travel-website" style={{ color: 'black' }}>Code</a>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
