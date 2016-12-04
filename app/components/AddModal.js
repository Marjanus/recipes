var React = require("react");
var PropTypes = React.PropTypes;
var InputForm = require("./InputForm");
var Modal = require("react-bootstrap").Modal;
var ButtonGroup = require("react-bootstrap").ButtonGroup;
var Button = require("react-bootstrap").Button;


var AddModal = React.createClass({
	
	propTypes: {
		showAddModal: PropTypes.bool.isRequired,
		onCloseAddModal: PropTypes.func.isRequired,
		onAddRecipe: PropTypes.func.isRequired,
		recipeTitle: PropTypes.string,
		recipeIngredients: PropTypes.string,
		recipePreparation: PropTypes.string,
		onChangeInput: PropTypes.func.isRequired,
		emptyInputFields: PropTypes.bool.isRequired
	},

	render: function(){
		//InputNames are named as slices of state in RecipeBoxContainer
		return (
			<div>
				<Modal show={this.props.showAddModal} onHide={this.props.onCloseAddModal} >
					<Modal.Header closeButton>
						<Modal.Title>Add a new recipe</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div>
							<InputForm 
								recipetitle={this.props.recipeTitle}
								titleInputName="recipeTitle"
								recipeingredients={this.props.recipeIngredients}
								ingredientsInputName="recipeIngredients"
								recipepreparation={this.props.recipePreparation}
								preparationInputName="recipePreparation"
								onChangeInput={this.props.onChangeInput}
							/>
							{this.props.emptyInputFields ? <h4 className="errorText">All fields must be filled!</h4> : null}
						</div>	
					</Modal.Body>
					<Modal.Footer>
						<ButtonGroup>
							<Button bsStyle="info" onClick={this.props.onAddRecipe}>Add recipe</Button>
							<Button bsStyle="default" onClick={this.props.onCloseAddModal}>Close</Button>
						</ButtonGroup>	
					</Modal.Footer>
				</Modal>	
			</div>
		);
	}
});

module.exports = AddModal;