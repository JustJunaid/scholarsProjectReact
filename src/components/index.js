import React from "react"
import Navbar from "./Navbar";
import { Container, Row, Col } from 'react-bootstrap'
import './component-styles.css'

const HomePage = ({ scholarsData }) => {
  const special = ['zeroth','first', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth', 'Thirteenth', 'Fourteenth', 'Fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
  const deca = ['twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];

  const stringifyNumber = n => {
    if (n < 20) return special[n];
    if (n%10 === 0) return deca[Math.floor(n/10)-2] + 'ieth';
    return deca[Math.floor(n/10)-2] + 'y-' + special[n%10];
  }
  const final = Object.values(scholarsData)
  return (
    <>
      <Navbar />
      <div className="introHeading">
        <h4>Shii Dates</h4> <p>~collected, arranged and managed by Kumail Rajani</p>
      </div>
      {final.length > 0 ? (
      <Container fluid={true} style={{position: 'fixed'}}>
          <Row>
          <Col xs={2} className="centuriesColumn">
          <h4>Centuries</h4>
            {
              final.map((_, i) => <p key={i}><a className="centuryLink" href={`#${i+2}`}>{i+2}/{i+8}</a></p>)
            }
          </Col>
          <Col style={{height: 'calc(100vh - 115px)', overflow: 'scroll'}}>
            {
              final.map((arr, i) => {
                return (
                  <div id={i+2}>
                    <h2><span className="badge badge-light">{stringifyNumber(i+2)}/{stringifyNumber(i+8)} century</span></h2>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Death</th>
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
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  )
}

export default HomePage