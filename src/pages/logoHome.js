import React from "react";
import imageurl from "../images/chat.png";
import classes from "./HomeLogo.module.css";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HomeLogo = () => {
  const navigate = useNavigate();
  const chatHandler = () => {
    navigate("/chats");
  };
  return (
    <div>
      <img
        src={imageurl}
        alt="chat logo"
        height="200px"
        width="200px"
        className={classes.homeLogo}
      />
      <Button onClick={chatHandler}>
        <h1 className={classes.heading}>Chat App</h1>
      </Button>
    </div>
  );
};

export default HomeLogo;
