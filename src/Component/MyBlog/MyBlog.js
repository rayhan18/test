import React, { Component,Fragment } from 'react'
import { Container,Row,Col,Card ,Button} from 'react-bootstrap'
import charts from '../Images/homeimg2.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faHeart,faComment,faUserEdit} from '@fortawesome/free-solid-svg-icons'
 import '../../App.css';
export default class MyBlog extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <div className="text-center">
                    <h3>{this.props.name}</h3>
                    <p>Professionally harness next-generation internal</p>
                    </div>
                   
                    <Row>
                    <Col xs={12} sm={12} md={4} lg={4} className="fuchearcart">
                            <Card style={{ width: '21rem',marginLeft:" 8px"}}className="img-hover-zoom--colorize img">
                            <Card.Img variant="top  " src={charts} />
                            <Card.Body>
                                <a href="/"><Card.Title >Upper portion Apartment for sale</Card.Title></a>
                                <p style={{color:'lightslategray'}}><FontAwesomeIcon icon={faUserEdit}/>Rayhan <FontAwesomeIcon icon={faHeart}/>115 <FontAwesomeIcon icon={faComment}/>7 July 2021</p>


                                <div>
                                   <p>
                                   Credibly customize stand-alone total linkage through orthogonal intellectual capital. Phosfluorescently formulate backend e-markets whereas equiinvested materials. Seamlessly foster world-class internal or "organic" sourthrough cross-unit meta-services.
                                   </p>
                               </div>
                               <Button variant="outline-warning">Read More</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                      
                        <Col xs={12} sm={12} md={4} lg={4} className="fuchearcart">
                            <Card style={{ width: '21rem',marginLeft:" 8px"}}className="img-hover-zoom--colorize img">
                            <Card.Img variant="top  " src={charts} />
                            <Card.Body>
                                <a href="/"><Card.Title >Upper portion Apartment for sale</Card.Title></a>
                                <p style={{color:'lightslategray'}}><FontAwesomeIcon icon={faUserEdit}/>Rayhan <FontAwesomeIcon icon={faHeart}/>115 <FontAwesomeIcon icon={faComment}/>7 July 2021</p>


                                <div>
                                   <p>
                                   Credibly customize stand-alone total linkage through orthogonal intellectual capital. Phosfluorescently formulate backend e-markets whereas equiinvested materials. Seamlessly foster world-class internal or "organic" sourthrough cross-unit meta-services.
                                   </p>
                               </div>
                               <Button variant="outline-warning">Read More</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                      
                        <Col xs={12} sm={12} md={4} lg={4} className="fuchearcart">
                            <Card style={{ width: '21rem',marginLeft:" 8px"}}className="img-hover-zoom--colorize img">
                            <Card.Img variant="top  " src={charts} />
                            <Card.Body>
                                <a href="/"><Card.Title >Upper portion Apartment for sale</Card.Title></a>
                                <p style={{color:'lightslategray'}}><FontAwesomeIcon icon={faUserEdit}/>Rayhan <FontAwesomeIcon icon={faHeart}/>115 <FontAwesomeIcon icon={faComment}/>7 July 2021</p>


                                <div>
                                   <p>
                                   Credibly customize stand-alone total linkage through orthogonal intellectual capital. Phosfluorescently formulate backend e-markets whereas equiinvested materials. Seamlessly foster world-class internal or "organic" sourthrough cross-unit meta-services.
                                   </p>
                               </div>
                               <Button variant="outline-warning">Read More</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                      
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
