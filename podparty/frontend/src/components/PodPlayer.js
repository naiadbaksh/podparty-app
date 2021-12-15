import React, { useEffect, useState, useRef } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import {
  AudioPlayer,
  ForwardButton,
  BackButton,
  PlayPause,
  CurrentTime,
  ProgressBar,
  Duration,
  Subheading,
  RoomCode,
  TrackInfo,
  Artist,
  Title,
  AudioControls,
  Artwork,
} from "./Components.styled";

export const PodPlayer = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  const calculateTime = (props) => {
    const minutes = Math.floor(props.duration / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(props.duration % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const pauseSong = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "applications.json" },
    };
    fetch("/spotify/pause", requestOptions);
  };

  const playSong = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "applications.json" },
    };
    fetch("/spotify/play", requestOptions);
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  };

  const songProgress = (props.time / props.duration) * 100;
  const songInSeconds = props.time;
  const currentPercentage = `{songProgress}%`;
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  return (
    <AudioPlayer>
      <TrackInfo>
        {/* <Artwork>{props.image_url}</Artwork> */}
        <Title>{props.title}</Title>
        <Artist>{props.artist}</Artist>
        <AudioControls>
          <BackButton>
            <BsArrowLeftShort /> 30
          </BackButton>
          <PlayPause
            onClick={() => {
              props.is_playing ? pauseSong() : playSong();
            }}
          >
            {props.is_playing ? <FaPause /> : <FaPause />}
          </PlayPause>
          <ForwardButton>
            30 <BsArrowRightShort />
          </ForwardButton>
        </AudioControls>
        <ProgressBar
          type="range"
          value={songProgress}
          step="1"
          min="0"
          //   onChange={(e) => onScrub(e.target.value)}
          //   onMouseUp={onScrubEnd}
          //   onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
        <CurrentTime>C:UR</CurrentTime>
        <Duration>{props.duration}</Duration>
      </TrackInfo>
    </AudioPlayer>
  );
};

export default PodPlayer;
