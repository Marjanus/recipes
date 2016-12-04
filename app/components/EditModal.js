var React = require("react");
var PropTypes = React.PropTypes;
var InputForm = require("./InputForm");
var Modal = require("react-bootstrap").Modal;
var Button = require("react-bootstrap").Button;
var ButtonGroup = require("react-bootstrap").ButtonGroup;


var EditModal = React.createClass({

	propTypes: {
		onEditRecipe: PropTypes.func.isRequired,
		showEditModal: PropTypes.bool.isRequired,
		onCloseEditModal: PropTypes.func.isRequired,
		modalTitle: PropTypes.string,
		editableTitle: PropTypes.string,
		editableIngredients: PropTypes.string,
		editablePreparation: PropTypes.string,
		onChangeInput: PropTypes.func.isRequired,
		emptyInputFields: PropTypes.bool.isRequired
	},
	
	render: function(){
		//InputNames are named as slices of state in RecipeBoxContainer
		return (
			<Modal show={this.props.showEditModal} onHide={this.props.onCloseEditModal} >
				<Modal.Header closeButton>
					<Modal.Title>Edit: {this.props.modalTitle}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<InputForm 
							title={this.props.editableTitle}
							titleInputName="editableTitle"
							ingredients={this.props.editableIngredients}
							ingredientsInputName="editableIngredients"
							preparation={this.props.editablePreparation}
							preparationInputName="editablePreparation"
							onChangeInput={this.props.onChangeInput}
						/>
						{this.props.emptyInputFields ? <h4 className="errorText">All fields must be filled!</h4> : null}
					</div>
				</Modal.Body>
				<Modal.Footer>
					<ButtonGroup>
						<Button bsStyle="info" onClick={this.props.onEditRecipe}>Edit</Button>
						<Button bsStyle="default" onClick={this.props.onCloseEditModal}>Close</Button>
					</ButtonGroup>
				</Modal.Footer>
			</Modal>			
		);
	}
});


module.exports = EditModal;