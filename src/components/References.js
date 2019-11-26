import React from "react";
import Navbar from "./Navbar";
import { Jumbotron } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

export default function References({ biblioText }) {
  if (!biblioText) return null;
  const { biblio } = biblioText;
  return (
    <>
      <Navbar />
      <Jumbotron style={{ backgroundColor: "#fff" }}>
        {ReactHtmlParser(biblio.html)}
      </Jumbotron>
    </>
  );
}
