var React = require("react");
var PropTypes = React.PropTypes;
var EditModal = require("./EditModal");
var Accordion = require("react-bootstrap").Accordion;
var Panel = require("react-bootstrap").Panel;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var Button = require("react-bootstrap").Button;
var ListGroup= require("react-bootstrap").ListGroup;
var ListGroupItem= require("react-bootstrap").ListGroupItem;
var MediaQuery = require("react-responsive");


function RecipeList(props){

		//every recipe will be rendered as a Panel with a button group inside it
		var recipeListArray = props.recipes.map(function(recipe, i){
		//id is used in recipeBoxContainer's handle.onRemoveRecipe functon
			var buttonId = "remove" + i; 
			// presenting recipe's ingredients as a Bootstrap ListGroup 
			var ingredientsArray = recipe["ingredients"].split(",");	
			var recipeIngrediendsList = ingredientsArray.map(function(ingredient, j){
				return <ListGroupItem key={j}>{ingredient}</ListGroupItem>;
			});
			// ingredients or a preparation will be shown
			var recipeContent = (props.buttonText === "Show preparation" 
				? <div> <ListGroup>{recipeIngrediendsList}</ListGroup> </div> 
				: <div className="recipePreparation"> {recipe["preparation"]} </div>); 
			
			// id is used as index in RecipeBoxContainer's .onSelectForEdit function
			return (
				<Panel header={recipe["title"]} eventKey={i} key={i} bsStyle="info">
					{recipeContent}	
					<ButtonGroup className="pull-right">
						<Button bsStyle="primary" onClick={props.onButtonTextChange}>{props.buttonText}</Button>
						<Button bsStyle="default" id={[i]} onClick={props.onSelectForEdit}>Edit Recipes</Button>
					</ButtonGroup>	
					<MediaQuery maxWidth={425}>
						<div className="col-xs-12 spaceRow"></div>
					</MediaQuery>
					<Button 
							bsStyle="danger" 
							className="pull-left"  
							id={buttonId} 
							onClick={props.onRemoveRecipe}
					>Remove</Button>
				</Panel>
			);
		}.bind(this));

		return (
			<div className="recipeList">
				<Accordion className="accordion">
					{recipeListArray}
				</Accordion>	
				<EditModal
					onEditRecipe={props.onEditRecipe}
					showEditModal={props.showEditModal}
					onCloseEditModal={props.onCloseEditModal}
					modalTitle={props.modalTitle}
					editableTitle={props.editableTitle}
					editableIngredients={props.editableIngredients}
					editablePreparation={props.editablePreparation}
					onChangeInput={props.onChangeInput}
					emptyInputFields={props.emptyInputFields}
				/>	
			</div>		
		);
}

RecipeList.propTypes = {
	recipes: PropTypes.array.isRequired,
	onSelectForEdit: PropTypes.func.isRequired,
	onEditRecipe: PropTypes.func.isRequired,
	showEditModal: PropTypes.bool.isRequired,
	onCloseEditModal: PropTypes.func.isRequired,
	modalTitle: PropTypes.string,
	editableTitle: PropTypes.string,
	editableIngredients: PropTypes.string,
	editablePreparation: PropTypes.string,
	onRemoveRecipe: PropTypes.func.isRequired,
	onChangeInput: PropTypes.func.isRequired,
	emptyInputFields: PropTypes.bool.isRequired,
	buttonText: PropTypes.string.isRequired,
	onButtonTextChange: PropTypes.func.isRequired
};

module.exports = RecipeList;


