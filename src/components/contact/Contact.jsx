import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    textarea: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.name || !state.email || !state.textarea) {
      alert('All fields are required');
    } else {
      alert('Form submitted successfully');
      setState({ name: '', email: '', textarea: '' });
    }
  };

  return (
    <div>
      <div className={styles.contain}>
        <div>
          <h1 style={{ fontSize: '33px' }}>
            Let's get in touch <i className="bi bi-arrow-down-circle-fill"></i>
          </h1>
        </div>
      </div>

      {/* Contact me */}
      <motion.div 
        className={styles.contact}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className={styles.info}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <div>
            <p><i className="bi bi-envelope-at-fill"> mandahadaman2002@gmail.com</i></p>
            <p><i className="bi bi-telephone-fill"> 9152621981</i></p>
            <p><i className="bi bi-geo-alt-fill"> Malad(East), Mumbai-400097</i></p>
          </div>
        </motion.div>
        <motion.div
          className={styles.divider}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.div 
          className={styles.form}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <h4>Name:-</h4>
          <input 
            type="text" 
            name='name' 
            value={state.name} 
            onChange={handleChange} 
            placeholder='Enter your name..' 
          />
          <h4>Email address:-</h4>
          <input 
            type="email" 
            name='email' 
            value={state.email} 
            onChange={handleChange} 
            placeholder='Enter your email address..' 
          />
          <h4>Message:-</h4>
          <textarea 
            placeholder='Enter your message..'  
            value={state.textarea} 
            onChange={handleChange} 
            name='textarea' 
            rows='4' 
            cols='50'
          ></textarea>
          <div>
            <button type='submit' onClick={handleSubmit}>Submit</button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
