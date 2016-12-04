var React = require("react");
var PropTypes = React.PropTypes;
var FormGroup = require("react-bootstrap").FormGroup;
var FormControl = require("react-bootstrap").FormControl;
var ControlLabel = require("react-bootstrap").ControlLabel;


function InputForm(props){
	
	return(
		<form>
			<FormGroup>
				<ControlLabel>Recipe Title</ControlLabel>
				<FormControl
					type="text"
					name={props.titleInputName}
					placeholder="Title"
					value={props.title} 
					onChange={props.onChangeInput}
				/>
			</FormGroup>
			<FormGroup>
				<ControlLabel>Ingredients, separated by comma</ControlLabel>
				<FormControl
					componentClass="textarea" 
					name={props.ingredientsInputName}
					placeholder="Ingredients"
					value={props.ingredients} 
					onChange={props.onChangeInput}
				/>
			</FormGroup>
			<FormGroup>
				<ControlLabel>Preparation</ControlLabel>
				<FormControl
					componentClass="textarea" 
					name={props.preparationInputName}
					placeholder="Preparation"
					value={props.preparation} 
					onChange={props.onChangeInput}
				/>
			</FormGroup>
		</form>
	);
}

InputForm.propTypes = {
	title: PropTypes.string,
	titleInputName: PropTypes.string.isRequired,
	ingredients: PropTypes.string,
	ingredientsInputName: PropTypes.string.isRequired,
	preparation: PropTypes.string,
	preparationInputName: PropTypes.string.isRequired,
	onChangeInput: PropTypes.func.isRequired
};

module.exports = InputForm;