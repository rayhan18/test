import React, { Component } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
//  import { render } from 'react-dom';
import 'react-web-tabs/dist/react-web-tabs.css';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import AllLatestWork from './AllLatestWork';
import Branding from './Branding';
import Webdesign from './Webdesign';
import Print from '../Print';
import Media from './Media';
export default class Latestwork extends Component {
    render() {
        return (
            <div>
                <Container fluid={true} className="latestwork">
                    <div className="text-center p-5 text-white">
                    <h3>{this.props.name}</h3>
                    <p>Creative Thinking For Business PSD Teamplate.</p>
                    </div>
                    </Container>
                    <Row>
                        <Col>
                        
                        </Col>
                    </Row>
                    {/* //tab button */}

                   <Container>
                       <Row className="text-center">
                           <Col>
                           <Tabs
                            defaultTab="one"
                            onChange={(tabId) => { console.log(tabId) }}>
                                <TabList>
                                <Tab tabFor="one"> <Button variant="outline-primary">All</Button>{' '}</Tab>
                                <Tab tabFor="two"> <Button variant="outline-primary">Brandding</Button>{' '}</Tab>
                                <Tab tabFor="three"> <Button variant="outline-primary">Webdesign</Button>{' '}</Tab>
                                <Tab tabFor="four"> <Button variant="outline-primary">Print</Button>{' '}</Tab>
                                <Tab tabFor="five"> <Button variant="outline-primary">Midea</Button>{' '}</Tab>
                              
                                </TabList>
                                <TabPanel tabId="one">
                                      <AllLatestWork/>
                                </TabPanel>
                                <TabPanel tabId="two">
                                        <Branding/>
                                </TabPanel>
                                <TabPanel tabId="three">
                                    <Webdesign/>
                                </TabPanel>
                                <TabPanel tabId="four">
                                    <Print/>
                                </TabPanel>
                                <TabPanel tabId="five">
                                    <Media/>
                                </TabPanel>
                            </Tabs>
                           </Col>
                       </Row>
                   </Container>
            </div>
        )
    }
}
