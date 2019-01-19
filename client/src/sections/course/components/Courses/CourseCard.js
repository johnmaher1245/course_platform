import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = props => {
  
    return (
  
      
      // <Link to={"/boost/" + props.courseId + "/" + props.name + '/1'} className="main-frame-grid-item">
      <Link to={props.link} className="main-frame-grid-item">
        <img src={props.picture} className="boost-one-img" alt="course card" />
        <div className="Gradient" />
        <div className="main-frame-grid-item-bottom">
          <div className="main-frame-grid-inner-item">
            {(props.authorPicture) ? <div className="main-frame-grid-item-pic">
              <img className="main-frame-grid-item-ppic" src={props.authorPicture} alt="author card" />
            </div> : ''}
           
              <span className="main-frame-inner-item-text">{props.name}</span>
               {(props.author) ? <div className="main-frame-grid-inner-child-text">
              <span className="main-frame-inner-item-text-sm">{props.time + " boost"} </span>
            </div> : ''}
          </div>
        </div>
      </Link>
    );
  };

export default CourseCard;