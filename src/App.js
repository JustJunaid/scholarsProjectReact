import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/index";
import FeedbackPage from "./components/Feedback";
import Stats from "./components/Stats";
import Introduction from "./components/Introduction";
import References from "./components/References";
import { firestore } from "./firebase";

import { sortedData as scholarsDataObj } from "./data";

const App = () => {
  const [scholarsData, setScholarsData] = useState({});
  const [data, setData] = useState([]);

  const getIntroductionText = async () => {
    const snapshot = await firestore.collection("staticText").get();
    let allText = [];
    snapshot.docs.map((doc, i) => {
      allText = [
        ...allText,
        { [`${i === 0 ? "biblio" : "intro"}`]: doc.data() }
      ];
    });
    setData(allText);
    return;
  };

  useEffect(() => {
    setScholarsData(scholarsDataObj);
    getIntroductionText();
  }, []);

  return (
    <div>
      <Route
        exact
        path="/"
        component={() => <HomePage scholarsData={scholarsData} />}
      />
      <Route
        exact
        path="/stats"
        component={() => <Stats scholarsData={scholarsData} />}
      />
      <Route exact path="/feedback" component={FeedbackPage} />
      <Route
        exact
        path="/bibliography"
        component={() => <References biblioText={data[0]} />}
      />
      <Route
        exact
        path="/introduction"
        component={() => <Introduction introText={data[1]} />}
      />
    </div>
  );
};

export default App;
