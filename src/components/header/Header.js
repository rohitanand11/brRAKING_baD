import React from "react";
import Classes from "./Header.module.css";

const Header = (props) => {

    const renderLinks = () => {
        if(props.links){
            return props.links.map((elem,index)=><div key={index}>{elem}</div>);
        } else {
            return null;
        }
    }
  return (
    <div className={Classes.Header}>
      <div className={Classes.leftHeader}>
        <div className={Classes.Logo}>
            <img src={props.logo_path} alt="logo"/>
        </div>
        <div className={Classes.app_name}>
            {props.appName}
        </div>
      </div>

        <div className={Classes.links}>
            {renderLinks()}
        </div>

    </div>
  );
};

export default Header;
