import React from "react";
import Navbar from "./Navbar";
import { Jumbotron } from "react-bootstrap";
import "./component-styles.css";
import Logo from "../assets/logo.svg";
import ReactHtmlParser from "react-html-parser";

export default function Introduction({ introText }) {
  if (!introText) return null;
  const { intro } = introText;
  return (
    <>
      <Navbar />
      <Jumbotron style={{ backgroundColor: "#fff" }}>
        {ReactHtmlParser(intro.html)}
      </Jumbotron>
    </>
  );
}
