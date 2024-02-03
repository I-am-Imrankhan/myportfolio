import "../styles/splashscreen.scss";
import profilePic from "../profilepic.png";

export const SplashScreen = () => {
  return (
    <div class="splash-screen">
      <div class="splash-screen-container">
      <img class="logo" src={profilePic} alt="App logo" />
        <h1 class="title">Muhammad Imran Khan</h1>
        </div>
    </div>
  );
};
