var React = require("react");
var NavigationBar = require("./NavigationBar");


var Main = function(props){
	return (
		<div>
			<NavigationBar />
			{props.children}
		</div>
	);
};
	
module.exports = Main;