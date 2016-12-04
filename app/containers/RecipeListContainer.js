var React = require("react");
var PropTypes = React.PropTypes;
var RecipeList = require("../components/RecipeList");


var RecipeListContainer = React.createClass({

	propTypes: {		
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
		emptyInputFields: PropTypes.bool.isRequired
	},	

	getInitialState: function(){
		return {buttonText: "Show preparation"};
	},

	handleButtonTextChange: function(){
		var newButtonText = this.state.buttonText == "Show preparation"  ? "Show ingredients" : "Show preparation";
		this.setState({
			buttonText : newButtonText
		});
	},

	render: function(){
		return (
			<RecipeList 
				recipes={this.props.recipes}
				onSelectForEdit={this.props.onSelectForEdit}
				onEditRecipe={this.props.onEditRecipe}
				showEditModal={this.props.showEditModal}
				onCloseEditModal={this.props.onCloseEditModal}
				modalTitle={this.props.modalTitle}
				editableTitle={this.props.editableTitle}
				editableIngredients={this.props.editableIngredients}
				editablePreparation={this.props.editablePreparation}
				onRemoveRecipe={this.props.onRemoveRecipe}
				onChangeInput={this.props.onChangeInput}
				emptyInputFields={this.props.emptyInputFields}
				buttonText={this.state.buttonText}
				onButtonTextChange={this.handleButtonTextChange}
			/>
		);
	}
});

module.exports = RecipeListContainer;