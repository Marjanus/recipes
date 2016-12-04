var React = require("react");
var IndexLink = require("react-router").IndexLink;
var LinkContainer = require("react-router-bootstrap").LinkContainer;
var Navbar = require("react-bootstrap").Navbar;
var Nav = require("react-bootstrap").Nav;
var NavItem = require("react-bootstrap").NavItem;


var NavigationBar = function(){
		
	return(
		<Navbar inverse fixedBottom>
			<Navbar.Header>
				<Navbar.Brand>
					<IndexLink to="/">Home</IndexLink>
				</Navbar.Brand>
				<Navbar.Toggle />	
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav>
					<LinkContainer to="/recipebox">
						<NavItem eventKey={1}>Recipes</NavItem>
					</LinkContainer>	
				</Nav>
				<Nav pullRight>
					<NavItem eventKey={1} href="https://github.com/Marjanus" target="_blank">Github</NavItem>
					<NavItem eventKey={2} href="https://www.linkedin.com/in/martynasjanusevicius" target="_blank">Linkedin</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};


module.exports = NavigationBar;