import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import charts from '../Images/homeimg2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faPlus} from '@fortawesome/free-solid-svg-icons'
export default class AllLatestWork extends Component {
    render() {
        
        return (
            <div>
                

                <Container>
                    <Row className="mt-5">
                        <Col sm={12} md={4} lg={4}>
                            <div className="imgReppar">
                               <img className="imageStyle" src={charts} alt="img"/>
                           
                                <div className="overlay">
                              <h3 className="textIcon">  <FontAwesomeIcon icon={faPlus}/> </h3>
                                   <div className="text">BUSINESS WEBSAITE
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col   sm={12} md={4} lg={4}>
                        <div className="imgReppar">
                               <img className="imageStyle" src={charts} alt="img"/>
                           
                                <div className="overlay">
                              <h3 className="textIcon">  <FontAwesomeIcon icon={faPlus}/> </h3>
                                   <div className="text">BUSINESS WEBSAITE
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col   sm={12} md={4} lg={4}>
                        <div className="imgReppar">
                               <img className="imageStyle" src={charts} alt="img"/>
                           
                                <div className="overlay">
                              <h3 className="textIcon">  <FontAwesomeIcon icon={faPlus}/> </h3>
                                   <div className="text">BUSINESS WEBSAITE
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col   sm={12} md={4} lg={4} className="mt-2">
                        <div className="imgReppar">
                               <img className="imageStyle" src={charts} alt="img"/>
                           
                                <div className="overlay">
                              <h3 className="textIcon">  <FontAwesomeIcon icon={faPlus}/> </h3>
                                   <div className="text">BUSINESS WEBSAITE
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col   sm={12} md={4} lg={4} className="mt-2">
                        <div className="imgReppar">
                               <img className="imageStyle" src={charts} alt="img"/>
                           
                                <div className="overlay">
                              <h3 className="textIcon">  <FontAwesomeIcon icon={faPlus}/> </h3>
                                   <div className="text">BUSINESS WEBSAITE
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col   sm={12} md={4} lg={4} className="mt-2">
                        <div className="imgReppar">
                               <img className="imageStyle" src={charts} alt="img"/>
                           
                                <div className="overlay">
                              <h3 className="textIcon">  <FontAwesomeIcon icon={faPlus}/> </h3>
                                   <div className="text">BUSINESS WEBSAITE
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
