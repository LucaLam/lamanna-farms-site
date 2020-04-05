import React, { Component } from "react";

import "./about.scss";

class About extends Component {render() {
    return (
      <div className="about__section">
        <h1 className="heading-1">About Us</h1>
        <div className="about__content-container">
            <img className="about__img" src="" alt="headshot of owner" />
            <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
            lacinia lacus at sagittis. Integer condimentum mattis lorem, sed
            tempus sem ultricies ac. Vestibulum aliquet sodales semper. Sed
            pellentesque, nunc vehicula pulvinar rutrum, dolor risus ultricies
            risus, laoreet ornare velit ligula eu quam. Nunc quis condimentum
            elit, et sagittis orci. Fusce ut tortor quis justo facilisis porttitor
            sed sed quam. Donec hendrerit urna a pulvinar efficitur. Sed vitae
            volutpat ipsum. Vestibulum vulputate augue sed nibh ultrices, eget
            tristique ex maximus. Nulla facilisi.
            </p>
        </div>
    </div>
    );
  }
}

export default About;
