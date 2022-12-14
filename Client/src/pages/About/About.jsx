import React from "react";
import "./about.css";
import man from "../../images/man.jpg";
function About(props) {
  return (
    <div>
      <>
        {/* WRAPPER ALL */}
        <div
          className="cavani_tm_all_wrap"
          data-magic-cursor="show"
          data-enter="fadeInUp"
          data-exit=""
        >
          {/* MODALBOX */}
          <div className="cavani_tm_modalbox">
            <div className="box_inner">
              <div className="close">
                <a href="#">
                  <img className="svg" src={man} alt="" />
                </a>
              </div>
              <div className="description_wrap" />
            </div>
          </div>
          {/* /MODALBOX */}
          {/* HEADER */}
          <div className="cavani_tm_header">
            <div className="logo">
              <a href="#">
                <img src="img/logo/dark.png" alt="" />
              </a>
            </div>
            <div className="menu">
              <ul className="transition_link">
                <li className="active">
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#news">News</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <span className="ccc" />
            </div>
          </div>
          {/* /HEADER */}
          <div className="cavani_tm_left_border" />
          <div className="cavani_tm_right_border" />
          {/* MOBILE MENU */}
          <div className="cavani_tm_topbar">
            <div className="topbar_inner">
              <div className="logo">
                <a href="#">
                  <img src="img/logo/dark.png" alt="" />
                </a>
              </div>
              <div className="trigger">
                <div className="hamburger hamburger--slider">
                  <div className="hamburger-box">
                    <div className="hamburger-inner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cavani_tm_mobile_menu">
            <div className="inner">
              <div className="wrapper">
                <div className="avatar">
                  <div className="image" data-img-url="img/about/1.jpg" />
                </div>
                <div className="menu_list">
                  <ul className="transition_link">
                    <li className="active">
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                      <a href="#news">News</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="social">
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          className="svg"
                          src="img/svg/social/facebook.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="svg"
                          src="img/svg/social/twitter.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="svg"
                          src="img/svg/social/instagram.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="svg"
                          src="img/svg/social/dribbble.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="svg"
                          src="img/svg/social/tik-tok.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="copyright">
                  <p>Copyright © 2021</p>
                </div>
              </div>
            </div>
          </div>
          {/* /MOBILE MENU */}
          {/* MAINPART */}
          <div className="cavani_tm_mainpart">
            <div className="author_image">
              <div className="main" data-img-url="img/about/1.jpg" />
            </div>
            <div className="main_content">
              {/* HOME */}
              <div className="cavani_tm_section animated" id="home">
                <div className="cavani_tm_home">
                  <div className="content">
                    <h3 className="name">Alan Walker</h3>
                    <span className="line" />
                    <h3 className="job">
                      <span className="cd-headline clip">
                        {" "}
                        {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                        <span className="blc">Creative</span>
                        <span className="cd-words-wrapper">
                          <b className="is-visible">Designer</b>
                          <b>Developer</b>
                          <b>Freelancer</b>
                        </span>
                      </span>
                    </h3>
                    <div className="cavani_tm_button transition_link">
                      <a href="#contact">Get in Touch</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* HOME */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default About;
