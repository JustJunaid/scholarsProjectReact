import React from "react"
import Navbar from "./Navbar";
import { Container, Row, Col } from 'react-bootstrap'
import './component-styles.css'

const HomePage = ({ scholarsData }) => {
  console.log('scholarsData', scholarsData)
  const final = Object.values(scholarsData)
  return (
    <>
      <Navbar />
      {final.length > 0 ? (
      <Container fluid={true} style={{position: 'fixed'}}>
          <Row>
          <Col xs={2} style={{height: '93vh', overflow: 'scroll', backgroundColor: '#f8f9fa'}}>
          <h4>Centuries</h4>
            {
              final.map((_, i) => <p key={i}><a className="centuryLink" href={`#${i+1}`}>{i+1}</a></p>)
            }
          </Col>
          <Col style={{height: '93vh', overflow: 'scroll'}}>
            {
              final.map((arr, i) => {
                return (
                  <div id={i+1}>
                    <h2><span class="badge badge-light">Century Number : {i+1}</span></h2>
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Scholar Name</th>
                          <th scope="col">More Information</th>
                        </tr>
                      </thead>
                      <tbody>
                        {arr.map(obj => {
                          const { scholarName, moreInfo } = obj
                          return (
                            <>
                              <tr>
                                <td>{scholarName}</td>
                                <td>{moreInfo}</td>
                              </tr>
                            </>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                )
              })
            }
          </Col>
        </Row>
      </Container>
      ) : (
        <div style={{textAlign: 'center'}}>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  )
}

export default HomePage