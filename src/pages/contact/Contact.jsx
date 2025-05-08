import React from 'react';
import { Link } from "react-router-dom";
import styles from "./styles/contact.module.css"; // CSS module

const Contact = () => {
  return (
    <>
      <nav className='' style={{ display: 'flex', gap: '0.5em' }}>
        <Link className={styles.button} to="/">Home</Link>
        <Link className={styles.button} to="/aboutme">About me</Link>
      </nav>
      <div className="background">
        <div className='background_gird'>
          <div className='form grid_element'>
            <form>

              <button className='' type="submit">submit</button>
            </form>
          </div>
          <div className='image grid_element'>

          </div>
        </div>
      </div>
    </>

  );
};

export default Contact;
