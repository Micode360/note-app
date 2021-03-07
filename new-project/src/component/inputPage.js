import React,{ useState, setState, useEffect } from 'react'
import HeaderContainer from './header'
import axios from 'axios'
import { Container, Form, Col } from 'react-bootstrap'


const BlogInputContainer = () => {

            return(
                    <>
                    <HeaderContainer/>

                    <Container>
                            <Col className="form-container">
                                 <Form>
                                         <button className="button">Post</button>
                                 </Form>
                            </Col>

                            <Col className="output">
        
                            </Col>

                            
                    </Container>
                    
                   
                    </>
            );
}

export default BlogInputContainer;