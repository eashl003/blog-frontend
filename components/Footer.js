import React, { Component } from "react"
import Subscribe from "./Subscribe"

const Footer = () => {
  return (
    <footer>
      <section className="ft-main">
        <div className="ft-main-item">
          <h2 className="ft-title">Shop</h2>
          <ul className="footer-list">
            <li>
              <a href="#">Shop All</a>
            </li>
            <li>
              <a href="#">Stationary</a>
            </li>
            <li>
              <a href="#">Digital</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">About</h2>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Mission</a>
            </li>
            {/*<li><a href="#">Press</a></li>8*/}
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">Help</h2>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <Subscribe />

          {/* 
               <form onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="Enter email address"/>
                    <input type="submit" value="Send"/>
                </form>
                */}
        </div>
      </section>
      {/* Footer social */}
      <section className="ft-social">
        <ul className="ft-social-list">
          {/*<li><a href="#"><i className="fab fa-facebook"></i></a></li>*/}
          {/*<li><a href="#"><i className="fa fa-twitter"></i></a></li>*/}
          {/*<li><a href="#"><i className="fab fa-instagram"></i></a></li>*/}
          {/*<li><a href="#"><i className="fa fa-youtube"></i></a></li>*/}

          <li>
            <a href="#">
              <i className="fab fa-medium fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </li>
        </ul>
      </section>

      {/* Footer legal */}
      <section className="ft-legal">
        <ul className="ft-legal-list">
          <li>
            <a href="#">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
