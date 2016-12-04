var React = require("react");
var PropTypes = React.PropTypes;
var RecipeListContainer = require("../containers/RecipeListContainer");
var BoxTools = require("./BoxTools");
require("../styles/recipebox.scss");


function RecipeBox(props){

	return(
			<div className="recipeBox col-md-8 col-md-offset-2 com-sm-10 sol-sm-offset-1 well clearfix">
				<h1>Recipes</h1>
				<RecipeListContainer 
					recipes={props.recipes} 
					onSelectForEdit={props.onSelectForEdit}
					onEditRecipe={props.onEditRecipe}
					showEditModal={props.showEditModal}
					onCloseEditModal={props.onCloseEditModal}
					modalTitle={props.modalTitle}
					editableTitle={props.editableTitle}
					editableIngredients={props.editableIngredients}
					editablePreparation={props.editablePreparation}
					onRemoveRecipe={props.onRemoveRecipe}
					onChangeInput={props.onChangeInput}
					emptyInputFields={props.emptyInputFields}
				/>	
				<BoxTools 
					showAddModal={props.showAddModal}
					onOpenAddModal={props.onOpenAddModal}
					onCloseAddModal={props.onCloseAddModal}
					onAddRecipe={props.onAddRecipe}
					recipeTitle={props.recipeTitle}
					recipeIngredients={props.recipeIngredients}
					recipePreparation={props.recipePreparation} 
					restoreRecipe={props.restoreRecipe}
					onRestoreRecipe={props.onRestoreRecipe}
					onChangeInput={props.onChangeInput}
					emptyInputFields={props.emptyInputFields}
				/>
			</div>	
		);
}

RecipeBox.propTypes = {
	recipes: PropTypes.array.isRequired,
	showAddModal: PropTypes.bool.isRequired,
	onOpenAddModal: PropTypes.func.isRequired,
	onCloseAddModal: PropTypes.func.isRequired,
	onAddRecipe: PropTypes.func.isRequired,
	recipeTitle: PropTypes.string,
	recipeIngredients: PropTypes.string,
	recipePreparation: PropTypes.string,
	onSelectForEdit: PropTypes.func.isRequired,
	onEditRecipe: PropTypes.func.isRequired,
	showEditModal: PropTypes.bool.isRequired,
	onCloseEditModal: PropTypes.func.isRequired,
	modalTitle: PropTypes.string,
	editableTitle: PropTypes.string,
	editableIngredients: PropTypes.string,
	editablePreparation: PropTypes.string,
	onRemoveRecipe: PropTypes.func.isRequired,
	restoreRecipe: PropTypes.bool.isRequired,
	onRestoreRecipe: PropTypes.func.isRequired,
	onChangeInput: PropTypes.func.isRequired,
	emptyInputFields: PropTypes.bool.isRequired
};

module.exports = RecipeBox;