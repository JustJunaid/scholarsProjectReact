import React, { useState } from "react"
import Recaptcha from 'react-recaptcha'
import { Container, Button, Form } from 'react-bootstrap'
import Navbar from './Navbar'
import axios from 'axios'

const FeedbackPage = () => {
  const [notVerified, setNotVerified] = useState(true)
  const [formData, setFormData] = useState({})

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post('https://us-central1-scholarproject-8c03a.cloudfunctions.net/widgets/sendFeedbackMail', {
      ...formData
    })
  }

  const verifyCallback = () => {
    setNotVerified(false)
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  return (
    <>
      <Navbar />
      <Container style={{margin: '40px auto auto auto', width: '60%'}}>
        <form onSubmit={onSubmit} method="GET">
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" onChange={handleChange} type="text" placeholder="Enter Name" required />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group controlId="formBasicCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control name="country" onChange={handleChange} type="text" placeholder="Enter country" required />
          </Form.Group>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Enter Your Feedback here!</label>
            <textarea name="feedbackValue" onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="4" required ></textarea>
          </div>
          <Recaptcha
            sitekey={process.env.RECAPTCHA_SITEKEY}
            render="explicit"
            verifyCallback={verifyCallback}
            // onloadCallback={onloadCallback}
          />
          <Button variant="primary" type="submit" disabled={notVerified}>
            Submit
          </Button>
        </form>
      </Container>
    </>
  )
}

export default FeedbackPage
