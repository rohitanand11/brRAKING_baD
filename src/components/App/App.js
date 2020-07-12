import React, { Component} from "react";
import FirstScreen from "../../Screens/firstScreen/FirstScreen";
import DialogueScreen from "../../Screens/dialogueScreen/DialogueScreen";

import Classes from "./App.module.css";
import Logo from "../../assets/images/logo.png";
import Title from "../../assets/images/title.png";


const APP_NAME = "BREAKING BAD";

class App extends Component {
  render() {
    return (
      <div className={Classes.App}>
        <FirstScreen appName={APP_NAME} TitleImg={Title} mainImage={Logo} />
        <DialogueScreen />
      </div>
    );
  }
}

export default App;
