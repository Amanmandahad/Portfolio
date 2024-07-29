import React from 'react'
import styles from './Projects.module.css'
import porfolio from '../Images/portfolio.img.png'
import gemini from '../Images/gemini.pic.png';
import ecommer from '../Images/Ecommerce-pic.png';


const Projects = () => {
  return (
    <div>
      <div className={styles.container}>
      <div className="container" >
        <div className="row  justify-content-around" >
          <div className="col-md-4" style={{margin:"15px"}} >
            <img src={porfolio} className='img-fluid'  alt="" />
            <div className={styles.cards}>
            <button>Code</button>
            <button>Demo</button>
          </div>
          </div>
          <div className="col-md-4" style={{margin:"15px"}}>
            <img src={gemini} className='img-fluid' alt="" />
            <div className={styles.cards}>
            <button><a href="https://github.com/Amanmandahad/Google-gemini" style={{color:'black'}}>Code</a></button>
            <button><a href="https://google-gemini-nu-lilac.vercel.app/" style={{color:'black'}}>Demo</a></button>

          </div>
          </div>
          
        </div>
      </div> 
      <br />
      <br />


      <div className="container">
        <div className="row  justify-content-around" >
          <div className="col-md-4" style={{margin:"15px"}}>
            <img src={ecommer} className='img-fluid' alt="" />
            <div className={styles.cards}>
            <button> <a href="https://github.com/Amanmandahad/Travel-website" style={{color:'black'}}>Code</a></button>
            <button><a href="https://travel-website-nine-iota.vercel.app/" style={{color:'black'}}>Demo</a></button>
          </div>
          </div>
          <div className="col-md-4" style={{margin:"15px"}}>
            <img src={gemini} className='img-fluid' alt="" />
            <div className={styles.cards}>
            <button>Code</button>
            <button>Demo</button>
          </div>
          </div>
          
        </div>
      </div> 

      </div>
     
    </div>
  )
}

export default Projects
