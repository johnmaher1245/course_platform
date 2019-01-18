import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = props => {
  
    return (
  
      
      <Link to={"/boost/" + props.courseId + "/" + props.name + '/1'} className="main-frame-grid-item">
        <img src={props.picture} className="boost-one-img" alt="course card" />
        <div className="Gradient" />
        <div className="main-frame-grid-item-bottom">
          <div className="main-frame-grid-inner-item">
            <div className="main-frame-grid-item-pic">
              <img className="main-frame-grid-item-ppic" src={props.authorPicture} alt="author card" />
            </div>
            <div className="main-frame-grid-inner-child-text">
              <span className="main-frame-inner-item-text">{props.name}</span>
              <span className="main-frame-inner-item-text-sm">{props.time + " boost"} </span>
            </div>
          </div>
        </div>
      </Link>
    );
  };

export default CourseCard;