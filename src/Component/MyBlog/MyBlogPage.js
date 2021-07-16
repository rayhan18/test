import React, { Component } from 'react'
import { Container,Button,Row,Col, Card } from 'react-bootstrap'
import charts from '../Images/homeimg2.jpg'
import star from '../Images/charts.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faUserEdit ,faHeart,faComment,faSearch} from '@fortawesome/free-solid-svg-icons'
 import '../../App.css';
export default class MyBlogPage extends Component {
    render() {
        return (
            <div>
                <Container fluid="true" >
                {/* className="fucherbgimg" */}
                <div className="fucherbgimg">
                    <div className="topbannerTex">
                    <h2> CREDIBLY CUSTOMIZE STAND-ALONE TOTAL LINKAGE THROUGH</h2>
                       <p>CREDIBLY CUSTOMIZE STAND-ALONE TOTAL LINKAGE THROUGH</p>
                     
                       <Button variant="outline-warning "size="sm">Home</Button>
                       <Button variant="outline-warning ml-3"size="sm">Blog Page</Button>
                    </div>
                
                </div>
                       
                   
                  
                 
                  
                </Container>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} md={6} lg={9}>
                        <Card>
                            <Card.Img variant="top" src={charts} />
                            <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            <p style={{color:'lightslategray'}}><FontAwesomeIcon icon={faUserEdit}/>Rayhan <FontAwesomeIcon icon={faHeart}/>115 <FontAwesomeIcon icon={faComment}/>7 July 2021</p>
                            <h2>BOUND TO MAKE IMPACT YOUR BUSINESS</h2>
                            <p>Dynamically network out-of-the-box innovation through accurate core competencies. Unique syndicate scalable services through compelling deliverables. Dramatically generate extensive manufactured products without client-focused vortals.</p>
                            <Button variant="outline-warning">Read More</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={charts} />
                            <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            <p style={{color:'lightslategray'}}><FontAwesomeIcon icon={faUserEdit}/>Rayhan <FontAwesomeIcon icon={faHeart}/>115 <FontAwesomeIcon icon={faComment}/>7 July 2021</p>
                            <h2>BOUND TO MAKE IMPACT YOUR BUSINESS</h2>
                            <p>Dynamically network out-of-the-box innovation through accurate core competencies. Unique syndicate scalable services through compelling deliverables. Dramatically generate extensive manufactured products without client-focused vortals.</p>
                            <Button variant="outline-warning">Read More</Button>
                            </Card.Body>
                        </Card>
                        </Col>


                        <Col sm={12} md={6} lg={3} className="sidebarcol">
                          <div className="input-group mb-3 mt-2">
                            <input type="text" className="form-control" placeholder="search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <span className="input-group-text" id="basic-addon2"> <FontAwesomeIcon icon={faSearch}/></span>
                            </div>
                            <h3 className="textShedow">CATEGORY</h3><hr/>
                            <div >
                                <p><a href="/">Art</a> <span className="ml-5">(02)</span></p>
                                <p><a href="/">Music</a> <span className="ml-5">(08)</span></p>
                                <p><a href="/">Photography</a> <span className="ml-5">(02)</span></p>
                                <p><a href="/">Fashion</a> <span className="ml-5">(07)</span></p>
                                <p><a href="/">Design</a> <span className="ml-5">(05)</span></p>
                                
                            </div><hr/>
                            <h3 className="textShedow">POPULAR POSTS</h3><hr/>
                            <div className="d-flex align-items-center ">
                                <div className="flex-shrink-0">
                                    <img style={{width:'50px'}} src={star} alt="media"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <a href="/">adjust it as needed</a>
                                   <p><FontAwesomeIcon icon={faComment}/>7 July 2021</p>
                                </div>
                                </div><hr/>
                                <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img style={{width:'50px'}} src={star} alt="media"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <a href="/">adjust it as needed</a>
                                   <p><FontAwesomeIcon icon={faComment}/>7 July 2021</p>
                                </div>
                                </div><hr/>
                                <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img style={{width:'50px'}} src={star} alt="media"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <a href="/">adjust it as needed</a>
                                   <p><FontAwesomeIcon icon={faComment}/>7 July 2021</p>
                                </div>
                                </div><hr/>
                                <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <img style={{width:'50px'}} src={star} alt="media"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <a href="/">adjust it as needed</a>
                                   <p><FontAwesomeIcon icon={faComment}/>7 July 2021</p>
                                </div>
                                </div><hr/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
