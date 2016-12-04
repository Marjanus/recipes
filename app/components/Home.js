var React = require("react");
var Link = require("react-router").Link;
var MediaQuery = require("react-responsive");
var Button = require("react-bootstrap").Button;


var Home = React.createClass({
	render: function(){
		return (
			<div className="homePage">
				<div className="homeHeader">
					<h1>Recipe Box</h1>
					<MediaQuery minWidth={425}>
						<h3><i>A convenient place to store recipes</i></h3>
					</MediaQuery>  
				</div>	
				<div className="parallax">	
					<div className="parallaxText">
						<Link to="/recipebox">Go straight to recipes</Link>
					</div>
				</div>
				<div className="description">
					<div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
						<h4><strong>Welcome to the Recipe Box</strong></h4>
						<p className="descriptionText"> 
							This website lets you conveniently store and use your favourite recipes.
							The application stores recipes into your browser's local storage.
							This means, that you will find your favourite recipes at your next connection to the Recipe Box! 
							However, you will have to use the same browser.
							Application allows to restore a single, recently deleted recipe. <br />But keep in mind that previously deleted
							recipes or a single deleted recipe, after a page refresh <strong><i>will be lost forever</i></strong>.
							<br/><br/>  
							During a first connection to the Recipe Box, you will find some demo recipes.
							Feel free to use them, or ... you know, remove them.
						</p>
					</div>
				</div> 
				<div className="linkToRecipes">
					<h4>Without further ado, let's start cooking!</h4>
					<Link to="/recipebox">
						<Button className="linkButton" bsStyle="default" bsSize="large">Go to recipes</Button>
					</Link>
				</div>
			</div>	
		);
	}
});

module.exports = Home;