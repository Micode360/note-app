import React, { useState, useEffect } from 'react'
import axios from 'axios';
import HeaderContainer from './header'
import { Row, Col, Card, Button } from 'react-bootstrap'

const Section = function () {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		userQueryData();
	}, []);

	const userQueryData = () => {
		axios
			.get("/input")
			.then((item) => {
				console.log(item.data)
				// setUsers(users.data)
				setUsers(item.data)
			})
			.catch((err) => console.log(err));
	}

	console.log(users.title, 'users');








	return (
		<>
			<HeaderContainer/>
			{/* <p>{users.title}</p> */}
			<section className="notes-container">
				<Card.Body className="user-hero">
					<Card.Title className="hero-title">Hello Miracle</Card.Title>
					<Button variant="primary">Profile</Button>
				</Card.Body>


				
				<Row>
					
					<Col sm={8}>
					<h1 className="article-title">My Article</h1>

					<div>
					<div className="note">	
						<h3>This is my title</h3>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum autem in distinctio velit quas consequuntur? Odit deserunt ea nostrum aliquam! Beatae expedita corrupti, minus nostrum dignissimos laudantium quaerat autem!
						</div>

						<div className="note">
						<h3>This is my title</h3>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum autem in distinctio velit quas consequuntur? Odit deserunt ea nostrum aliquam! Beatae expedita corrupti, minus nostrum dignissimos laudantium quaerat autem!
						</div>

						<div className="note">
						<h3>This is my title</h3>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum autem in distinctio velit quas consequuntur? Odit deserunt ea nostrum aliquam! Beatae expedita corrupti, minus nostrum dignissimos laudantium quaerat autem!
						</div>

						<div className="note">
						<h3>This is my title</h3>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum autem in distinctio velit quas consequuntur? Odit deserunt ea nostrum aliquam! Beatae expedita corrupti, minus nostrum dignissimos laudantium quaerat autem!
						</div>
					</div>
					</Col>
					<Col sm={4}>sm=4</Col>
				</Row>
			</section>

		</>
	);
};

export default Section