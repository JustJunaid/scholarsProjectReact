import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/index'
import FeedbackPage from './components/Feedback';
import Stats from './components/Stats';
import Introduction from './components/Introduction';
import References from './components/References';
import { firestore } from './firebase'

const isEqual = require('lodash.isequal')

export const getFirebaseData = async () => {
  let scholarsDataObj = {}
    for (let century=2; century<=15; century++) {
      const colRef = firestore.collection(`${century}`).orderBy("moreInfo")
      const snapshot = await colRef.get()
      let scholarDataPerCentury = []
      snapshot.docs.map(doc => {
        scholarDataPerCentury = [...scholarDataPerCentury, doc.data()]
      });
      scholarsDataObj[century] = scholarDataPerCentury
    }
    return scholarsDataObj
}


const App = () => {
  const [scholarsData, setScholarsData] = useState({})
  
  const populateData = async () => {
    const localStorageData = localStorage.getItem('scholarsDataObj')
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData)
      setScholarsData(parsedData)
      const newScholarsDataObj = await getFirebaseData()
      if (isEqual(newScholarsDataObj, parsedData)) return
      setScholarsData(newScholarsDataObj)
      return
    }

    const scholarsDataObj = await getFirebaseData()
    setScholarsData(scholarsDataObj)
    localStorage.setItem('scholarsDataObj', JSON.stringify(scholarsDataObj))
  }

  useEffect(() => {
    populateData()
  }, [])

  return (
    <div> 
      <Route exact path='/' component={() => <HomePage scholarsData={scholarsData} />} />
      <Route exact path='/stats' component={() => <Stats scholarsData={scholarsData} />} />
      <Route exact path='/feedback' component={FeedbackPage} />
      <Route exact path='/bibliography' component={References} />
      <Route exact path='/introduction' component={Introduction} />
    </div>
  );
}

export default App
