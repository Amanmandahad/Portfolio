import React from 'react'
import  styles from './Footer.module.css'


const Footer = () => {
  return (
    <div>
    <div className={styles.contain}>

    
     <div className="container" >
      <div className="row align-iteam-center  justify-content-between">
        <div className="col-md-4" >
        <h2>Contact me:-</h2>
          <p ><i className="bi bi-envelope-at-fill" >  mandahadaman2002@gmail.com</i></p>
          <p><i className="bi bi-telephone-fill"> 9152621981</i></p>
          <p><i className="bi bi-geo-alt-fill"> Malad(East),Mumbai-400097</i></p>
  </div>
  <div className="col-md-4" >
        <h2>Social Media:-</h2>
        <p><a href="https://github.com/Amanmandahad"><i className="bi bi-github"style={{color:'white'}} ></i> Github</a></p>
        <p><a href="https://www.instagram.com/amxnnnnn.___?igsh=MWUyOGNyNmZqdHBhcA=="><i className="bi bi-instagram" style={{color:'#C13584'}}></i> Instagram</a></p>
        <p><a href="https://www.linkedin.com/in/aman-mandahad"> <i className="bi bi-linkedin" style={{color:'royalblue'}}></i> LinkedIn</a></p>
        </div>       
      </div>
     </div>
</div>
    </div>
  )
}

export default Footer
