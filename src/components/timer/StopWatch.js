import React, { useState } from "react";
import "./StopWatch.css";
import Timer from "./Timer";
import {Box, Button, Grid, InputAdornment, Typography} from "@material-ui/core";

function StopWatch() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    
    React.useEffect(() => {
      let interval = null;
    
      if (isActive && isPaused === false) {
        interval = setInterval(() => {
          setTime((time) => time + 10);
        }, 10);
      } else {
        clearInterval(interval);
      }
      return () => {
        clearInterval(interval);
      };
    }, [isActive, isPaused]);
    
    const handleStart = () => {
      setIsActive(true);
      setIsPaused(false);
    };
    
    const handlePauseResume = () => {
      setIsPaused(!isPaused);
    };
    const handleReset = () => {
      setIsActive(false);
      setTime(0);
    };
    const StartButton = (
      <Button
        variant="contained"
        color="primary"
        onClick={handleStart}>
        Start
    </Button>
    );
    const ActiveButtons = (
      <div className="btn-grp">
        <Button
        variant="contained"
        color="primary"
        style={{marginRight:"10px"}}
        onClick={handleReset}>
        Reset
    </Button>
  
    <Button
        variant="contained"
        color="primary"
        onClick={handlePauseResume}>
          {isPaused ? "Resume" : "Pause"}
    </Button>
      </div>
    );
    
    return (
      <div className="stop-watch">
        <Timer time={time} />
        <div className="Control-Buttons">
            <div>{isActive ? ActiveButtons : StartButton}</div>
        </div>
      </div>
    );
  }
    
  export default StopWatch;
  