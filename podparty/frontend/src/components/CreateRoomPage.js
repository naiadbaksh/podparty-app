import React, { Component } from "react";
import {
  BlackOutlineButton,
  GreenButton,
  Header,
  Subheading,
  PageWrapper,
  CreateRoomButtonsContainer,
  PageOverlay,
  CreateRoomPageContainer,
  InputField,
  ThoughtGarden,
} from "./Components.styled";

export default class CreateRoomPage extends Component {
  static defaultProps = {
    votesToSkip: 2,
    guestCanPause: true,
    update: false,
    roomCode: null,
    updateCallback: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      guestCanPause: this.props.guestCanPause,
      votesToSkip: this.props.votesToSkip,
      errorMsg: "",
      successMsg: "",
    };

    this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this);
    this.handleVotesChange = this.handleVotesChange.bind(this);
    this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
    this.handleUpdateButtonPressed = this.handleUpdateButtonPressed.bind(this);
  }

  handleVotesChange(e) {
    this.setState({
      votesToSkip: e.target.value,
    });
  }

  handleGuestCanPauseChange(e) {
    this.setState({
      guestCanPause: e.target.value === "true" ? true : false,
    });
  }

  handleRoomButtonPressed() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        votes_to_skip: this.state.votesToSkip,
        guest_can_pause: this.state.guestCanPause,
      }),
    };
    fetch("/api/create-room", requestOptions)
      .then((response) => response.json())
      .then((data) => this.props.history.push("/room/" + data.code));
  }

  handleUpdateButtonPressed() {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        votes_to_skip: this.state.votesToSkip,
        guest_can_pause: this.state.guestCanPause,
        code: this.props.roomCode,
      }),
    };
    fetch("/api/update-room", requestOptions).then((response) => {
      if (response.ok) {
        this.setState({
          successMsg: "Room updated successfully!",
        });
      } else {
        this.setState({
          errorMsg: "Error updating room...",
        });
      }
      this.props.updateCallback();
    });
  }

  renderCreateButtons() {
    return (
      <CreateRoomButtonsContainer>
        <GreenButton onClick={this.handleRoomButtonPressed}>
          CREATE A ROOM
        </GreenButton>
        <BlackOutlineButton href="/">BACK</BlackOutlineButton>
      </CreateRoomButtonsContainer>
    );
  }

  renderUpdateButtons() {
    return (
      <GreenButton onClick={this.handleUpdateButtonPressed}>
        UPDATE ROOM
      </GreenButton>
    );
  }

  render() {
    const title = this.props.update ? "Update Room" : "Create a Room";

    return (
      <CreateRoomPageContainer id="pageContainer">
        <PageOverlay id="pageOverlay"></PageOverlay>
        <PageWrapper id="pageWrapper">
          <ThoughtGarden />
          <Subheading id="subheading">{title}</Subheading>
          {this.props.update
            ? this.renderUpdateButtons()
            : this.renderCreateButtons()}
        </PageWrapper>
      </CreateRoomPageContainer>
    );
  }
}
