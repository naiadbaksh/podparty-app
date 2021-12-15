import styled from "styled-components";
import overlay from "./images/overlay.png";
import HubermanLab from "./images/HubermanLab.png";
import MichelleObama from "./images/MichelleObama.png";
import CallHerDaddy from "./images/CallHerDaddy.png";
import ArmchairExpert from "./images/ArmchairExpert.png";

export const HomePageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url(${CallHerDaddy});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const RoomJoinPageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url(${HubermanLab});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CreateRoomPageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url(${ArmchairExpert});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const RoomPageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #000;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const PageOverlay = styled.div`
  position: fixed;
  background-image: url(${overlay});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const PageWrapper = styled.div`
  width: 80%vw;
  height: 50%vh;
  margin: 400px 100px 100px 100px;
`;

export const ButtonsContainer = styled.div`
  width: 80%;
  height: 50%vh;
  margin: 50px 200px 100px 200px;
`;

export const RoomJoinButtonsContainer = styled.div`
  width: 50%;
  height: 50%vh;
  margin: 50px 200px 100px 330px;
`;

export const CreateRoomButtonsContainer = styled.div`
  width: 50%;
  height: 50%vh;
  margin: 50px 200px 100px 330px;
`;

export const RoomButtonsContainer = styled.div`
  width: 50%;
  height: 50%vh;
  margin: 50px 200px 100px 330px;
`;

export const Header = styled.div`
  color: #1db954;
  display: block;
  font-size: 70px;
  line-height: 1.3;
  margin: 10px;
  padding: 0px;
  text-align: center;
  font-family: "Avenir", "Helvetica";
  font-weight: 900;
  justify-content: center;
  text-shadow: #111 2px 2px 40px;
`;

export const Subheading = styled.div`
  color: #1db954;
  display: block;
  font-size: 70px;
  line-height: 1.3;
  margin: 10px;
  padding: 0px;
  text-align: center;
  font-family: "Avenir", "Helvetica";
  font-weight: 500;
  justify-content: center;
  ${"" /* text-shadow: #fff 2px 2px 40px; */}
`;

export const GreenButton = styled.a`
  display: inline block;
  width: 182px;
  height: 42px;
  margin: 0px;
  font-weight: bold;
  font-family: "Avenir", "Helvetica";
  justify-content: center;
  vertical-align: center;
  coursor: pointer;
  color: #fff;
  background-color: #1db954;
  &:hover {
    background-color: #1ed760;
    coursor: pointer;
  }
  transition-property: background-color;
  transition-duration: 0.3s;
  border-radius: 50px;
  font-size: 14px;
  letter-spacing: 2px;
  padding: 18px 48px 16px;
  text-decoration: none;
  margin: 10px;
`;

export const BlackOutlineButton = styled.a`
  display: inline block;
  width: 182px;
  height: 42px;
  margin: 0px;
  font-weight: bold;
  font-family: "Avenir", "Helvetica";
  font-size: 14px;
  justify-content: center;
  vertical-align: middle;
  coursor: pointer;
  color: #000;
  border: 1px solid #000;
  background-color: #fff;
  &:hover {
    background-color: #000;
    color: #fff;
  }
  transition-property: background-color;
  transition-duration: 0.3s;
  border-radius: 50px;
  font-size: 14px;
  letter-spacing: 2px;
  padding: 18px 48px 16px;
  text-decoration: none;
  margin: 10px;
`;

export const InputField = styled.input`
   {
    display: inline block;
    font-family: "Avenir", "Helvetica";
    margin: 0px 200px 0px 410px;
    width: 20%;
    height: 40px;
    padding: 6px 12px;
    font-size: 16px;
    line-height: 1.5;
    color: #222326;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9dadc;
    border-radius: 10px;
    justify-content: center;
    vertical-align: middle;
  }
`;

// Podplayer

export const AudioPlayer = styled.div`
  max-width: 550px;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 28px 28px rgba(0, 0, 0, 0.2);
  margin: auto;
  color: #fff;
`;

export const TrackInfo = styled.div`
  text-align: center;
  z-index: 1;
  position: relative;
`;

export const ForwardButton = styled.button`
  width: 35px;
  height: 35px;
  font-size: 10px;
  cursor: pointer;
`;

export const BackButton = styled.button`
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-size: 10px;
`;

export const PlayPause = styled.button`
  height: 40px;
  width: 40px;
`;

export const CurrentTime = styled.div`
  font-family: monospace;
  font-size: 16px;
  margin-left: 25px;
`;

export const Duration = styled.div`
  font-size: 16px;
`;

export const RoomCode = styled.div`
  color: #1db954;
  display: block;
  font-size: 30px;
  line-height: 1.3;
  margin: 10px;
  padding: 0px;
  text-align: center;
  font-family: "Avenir", "Helvetica";
  font-weight: 500;
  justify-content: center;
  ${"" /* text-shadow: #fff 2px 2px 40px; */}
`;

export const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 4px;
`;

export const Artist = styled.h3`
  font-weight: 300;
  margin-top: 0;
`;

export const Artwork = styled.img`
  border-radius: 120px;
  display: block;
  margin: auto;
  height: 200px;
  width: 200px;
`;

export const AudioControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 0 auto 15px;
`;

export const ProgressBar = styled.input`
  height: 5px;
  -webkit-appearance: none;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 8px;
  background: #3b7677;
  transition: background 0.2s ease;
  cursor: pointer;
`;
