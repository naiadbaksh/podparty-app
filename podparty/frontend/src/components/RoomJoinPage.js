import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  BlackOutlineButton,
  GreenButton,
  Header,
  Subheading,
  PageWrapper,
  RoomJoinButtonsContainer,
  PageOverlay,
  RoomJoinPageContainer,
  InputField,
  ThoughtGarden,
} from "./Components.styled";

export default class RoomJoinPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: "",
      error: "",
    };
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.roomButtonPressed = this.roomButtonPressed.bind(this);
  }

  render() {
    return (
      <>
        <RoomJoinPageContainer>
          <PageOverlay></PageOverlay>
          <PageWrapper id="homePageWrapper">
            <ThoughtGarden />
            <Subheading>Join a Room</Subheading>
            <InputField
              placeholder="Enter a room code"
              onChange={this.handleTextFieldChange}
            />
            <RoomJoinButtonsContainer>
              <GreenButton onClick={this.roomButtonPressed}>
                ENTER ROOM
              </GreenButton>
              <BlackOutlineButton href="/">BACK</BlackOutlineButton>
            </RoomJoinButtonsContainer>
          </PageWrapper>
        </RoomJoinPageContainer>
      </>
    );
  }

  handleTextFieldChange(e) {
    this.setState({
      roomCode: e.target.value,
    });
    console.log(e.target.value);
  }

  roomButtonPressed() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: this.state.roomCode,
      }),
    };
    fetch("/api/join-room", requestOptions)
      .then((response) => {
        if (response.ok) {
          this.props.history.push(`/room/${this.state.roomCode}`);
        } else {
          this.setState({ error: "Room not found." });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
