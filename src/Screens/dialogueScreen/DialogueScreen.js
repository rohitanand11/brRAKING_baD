import React from "react";
import Classes from "./DialogueScreen.module.css";

const DialogueScreen = (props) => {
  return (
    <div className={Classes.DialogueScreen}>
      <div className={Classes.pinkMan}>
        "hey hey hey ...one ,4,3";
      </div>

      <div className={Classes.heisenberg}>
        hi i am walter white
      </div>
    </div>
  );
};

export default DialogueScreen;
