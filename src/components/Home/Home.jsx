import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import img from '../Images/Homemainlogo.jpeg';
import resume from '../Images/first resume (3) (1) (1).pdf';

const Home = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const texts = ['A Web Developer', 'A React Developer', 'A Front End Developer'];
  const colors = ['gold', '#33FF57', 'red'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const ContactPage = () => {
    navigate('/contact');
  };

  // 

  return (
    <div>
    <div className={styles.contain}>
      <div className="container mt-10">
        <div className="row align-items-center justify-content-between">
          <motion.div
            className="col-md-5 col-sm-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <motion.h1 className='text-primary' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
              Hi, I'm Aman Mandahad
            </motion.h1>
            <motion.h1
              className={styles.animatedText}
              style={{ color: colors[index] }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              {texts[index]}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
              A passionate frontend developer dedicated to crafting exceptional web experiences. With a solid foundation in HTML, CSS, and JavaScript, I excel at building responsive, user-friendly interfaces that engage and captivate. My expertise spans modern frameworks like React allowing me to create dynamic and interactive web applications. I focus on blending design aesthetics with technical precision to deliver sites that are not only visually appealing but also optimized for performance and cross-browser compatibility. Whether you're looking to launch a new project or enhance an existing one.
            </motion.p>
            <motion.a href={resume} download="resume" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <button><i className="bi bi-arrow-down-circle"></i>My Resume</button>
            </motion.a>
            <motion.button onClick={ContactPage} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <i className="bi bi-telephone-outbound"></i>Contact Me
            </motion.button>
          </motion.div>
          <motion.div
            className="col-md-5 col-sm-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <motion.img
              src={img}
              className={`${styles.image} img-fluid`}
              alt="Placeholder"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
{/* goals */}

<div className={styles.goal}>
       <div><h1>My goals:-</h1></div>
      </div>

      <div className={styles.mission}>
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className={`col-md-6 text-center ${styles.mission_content}`}>
        <h1>User Experience (UX)</h1>
        <p>
          My Goal is too Design and Develop interfaces that are intuitive, easy to navigate, and accessible to all users, including those with disabilities. Ensuring a positive user experience (UX) is crucial for the success of any application or website. Accessible design also broadens the user base and complies with legal standards and Create designs that work well on various devices and screen sizes (mobile, tablet, desktop).
        </p>
      </div>
    </div>
  </div>
</div>

<div className={`container ${styles.main}`}>
  <div className="row justify-content-between align-items-center">
    <div className={`col-md-4 col-sm-12 text-center ${styles.mission_content}`}>
    <h1>Performance</h1>
    <p> I Ensure the application loads quickly and runs smoothly across all devices. This involves optimizing assets (images, CSS, JavaScript), minimizing load times, and ensuring smooth interactions and transitions.It is critical to keep users engaged and to prevent them from leaving due to slow or unresponsive interfaces.
</p>
    </div>
    <div className={`col-md-4 col-sm-12 text-center ${styles.mission_content}`}>
    <h1>Up-to-Date</h1>
    <p>
      I stay up-to-date with the latest web technologies and best practices. I am always evaluating and implementing new features and improvements to ensure that my applications remain efficient, user-friendly, and secure. I also collaborate with other developers to ensure that our code is well-documented, maintainable, and adheres to best practices.
    </p>

    </div>
  </div>
</div>

      
</div>


  );
};

export default Home;











