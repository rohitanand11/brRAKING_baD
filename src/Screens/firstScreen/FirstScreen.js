import React from "react";
import Classes from "./FirstScreen.module.css";

const FirstScreen = (props) => {
  return (
    <div className={Classes.firstScreen}>
      <div className={Classes.mainImage}>
        {/* for image flex 50% width in laptop view , 50% height in mobile view*/}
        <img src={props.mainImage} alt="main logo" />
      </div>

      <div className={Classes.BrandAttr}>{/* for the image attributes */}
      <img src={props.TitleImg} alt="main logo" />
      </div>
    </div>
  );
};

export default FirstScreen;
