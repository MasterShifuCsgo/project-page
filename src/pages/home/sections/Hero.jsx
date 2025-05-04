import React from "react";
import styles from "./styles/hero.module.css";
import {Link} from 'react-router-dom';


function Hero(){
  return (
    <section className="flex justify-center">    
    <div className="flex justify-center items-center h-[100%]">
      <img 
      className={styles.background_img}
      src="/backworld.jpg"
      alt="Background"
      draggable="false"/>      

      <div className="absolute text-white text-center 
      flex flex-col items-center
      ">
        <h1 className="text-6xl">Hello, my name is Kaspar</h1>
        <p className="text-3xl mt-10 opacity-80">This is my project's page</p>
        <menu className="mt-16">
          <Link className={styles.button} to="/contact">Contact</Link>
        </menu>
      </div>
      </div>
    </section>
  )
}

export default Hero