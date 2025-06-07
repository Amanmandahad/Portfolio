import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [state, setState] = useState({
    from_name: '',
    from_email: '',
    textarea: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_25pkvur";
    const templateId = "template_jjexkkk";
    const publicKey = "t_3WE3kwWXcIS99ls";

    if (!state.from_name || !state.from_email || !state.textarea) {
      toast.error('All fields are required');
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        toast.success("Form submitted successfully!");
        setState({ from_name: '', from_email: '', textarea: '' });
      })
      .catch((error) => {
        console.error("Failed to send email:", error.text);
        toast.error("Failed to send message. Please try again later.");
      });
  };

  return (
    <div>
      <div className={styles.contain}>
        <h1 style={{ fontSize: '33px' }}>
          Let's get in touch <i className="bi bi-arrow-down-circle-fill"></i>
        </h1>
      </div>

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
          <p><i className="bi bi-envelope-at-fill"></i> mandahadaman2002@gmail.com</p>
          <p><i className="bi bi-telephone-fill"></i> 9152621981</p>
          <p><i className="bi bi-geo-alt-fill"></i> Malad(East), Mumbai-400097</p>
        </motion.div>

        <motion.div className={styles.divider} />

        <motion.div 
          className={styles.form}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <form ref={form} onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
              type="text" 
              name="from_name" 
              value={state.from_name} 
              onChange={handleChange} 
              placeholder="Enter your name" 
              required 
            />

            <label>Email Address:</label>
            <input 
              type="email" 
              name="from_email" 
              value={state.from_email} 
              onChange={handleChange} 
              placeholder="Enter your email" 
              required 
            />

            <label>Message:</label>
            <textarea 
              name="textarea" 
              value={state.textarea} 
              onChange={handleChange} 
              placeholder="Enter your message" 
              rows="4"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </motion.div>
      </motion.div>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Contact;
