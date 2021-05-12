import Component from "./components/component";
import Image from "./components/image";
import Logo from "./images/medium.jpg";
// import "./styles/styles.css"
// import "./styles/styles.scss"
import "./styles/styles.less";

document.body.append(Component("Hello World!"));
document.body.append(Image(Logo));
