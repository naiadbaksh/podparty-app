import styled from "styled-components";
import overlay from "./images/overlay.png";
import HubermanLab from "./images/HubermanLab.png";
import MichelleObama from "./images/MichelleObama.png";
import CallHerDaddy from "./images/CallHerDaddy.png";

export const PageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url(${CallHerDaddy});
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
  text-shadow: #fff 2px 2px 40px;
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
