import React,{ useState, setState, useEffect } from 'react'
import HeaderContainer from './header'
import axios from 'axios'
import DOMPurify from 'dompurify';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Container, Form, Col } from 'react-bootstrap'


const BlogInputContainer = () => {

        const [editorState, setEditorState] = useState(
                () => EditorState.createEmpty(),
              );

              const  [convertedContent, setConvertedContent] = useState(null);

              const handleEditorChange = (state) => {
                setEditorState(state);
                convertContentToHTML();
              }

              const convertContentToHTML = () => {
                let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
                setConvertedContent(currentContentAsHTML);
              }

              const createMarkup = (html) => {
                return  {
                  __html: DOMPurify.sanitize(html)
                }
              }

            return(
                    <>
                    <HeaderContainer/>

                    <Container>
                            <Col className="form-container">
                                 <Form>
                                        <Editor
                                                editorState={editorState}
                                                onEditorStateChange={handleEditorChange}
                                                wrapperClassName="wrapper-class"
                                                editorClassName="editor-class"
                                                toolbarClassName="toolbar-class"
                                        />

                                <button className="button">Create Blog</button>
                                 </Form>
                            </Col>
                            <Col className="output" dangerouslySetInnerHTML={createMarkup(convertedContent)}></Col>
                            

                            
                    </Container>
                    
                   
                    </>
            );
}

export default BlogInputContainer;