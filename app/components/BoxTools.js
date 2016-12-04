var React = require("react");
var PropTypes = React.PropTypes;
var AddModal = require("./AddModal");
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var Button = require("react-bootstrap").Button;

function BoxTools(props){
	
	var restoreRecipeButton = (props.restoreRecipe
		? <Button type="button" bsStyle="primary" onClick={props.onRestoreRecipe}>Recover recipe</Button> 
		: null);

	return (
		<div>
			<ButtonGroup className ="pull-right">
				{restoreRecipeButton}
				<Button bsStyle="success" onClick={props.onOpenAddModal}>Add recipe</Button>
			</ButtonGroup>	
			<AddModal
				showAddModal={props.showAddModal}
				onCloseAddModal={props.onCloseAddModal}
				onAddRecipe={props.onAddRecipe}
				recipeTitle={props.recipeTitle}
				recipeIngredients={props.recipeIngredients}
				recipePreparation={props.recipePreparation} 
				onChangeInput={props.onChangeInput}
				emptyInputFields={props.emptyInputFields}
			/>
		</div>
	);
}

BoxTools.propTypes = {
	showAddModal: PropTypes.bool.isRequired,
	onOpenAddModal: PropTypes.func.isRequired,
	onCloseAddModal: PropTypes.func.isRequired,
	onAddRecipe: PropTypes.func.isRequired,
	recipeTitle: PropTypes.string,
	recipeIngredients: PropTypes.string,
	recipePreparation: PropTypes.string, 
	restoreRecipe: PropTypes.bool.isRequired,
	onRestoreRecipe: PropTypes.func.isRequired,
	onChangeInput: PropTypes.func.isRequired,
	emptyInputFields: PropTypes.bool.isRequired
};

module.exports = BoxTools;