import React from 'react'
import styles from './Projects.module.css'
import porfolio from '../Images/portfolio.img.png'
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
            <img src={porfolio} className='img-fluid' alt="" />
            <div className={styles.cards}>
            <button>Code</button>
            <button>Demo</button>
          </div>
          </div>
          
        </div>
      </div> 
      <br />
      <br />


      <div className="container">
        <div className="row  justify-content-around" >
          <div className="col-md-4" style={{margin:"15px"}}>
            <img src={porfolio} className='img-fluid' alt="" />
            <div className={styles.cards}>
            <button>Code</button>
            <button>Demo</button>
          </div>
          </div>
          <div className="col-md-4" style={{margin:"15px"}}>
            <img src={porfolio} className='img-fluid' alt="" />
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
