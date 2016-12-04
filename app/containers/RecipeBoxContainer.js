var React = require("react");
var RecipeBox = require("../components/RecipeBox");
var InitialRecipes = require("../mockData/InitialRecipes");
require("../styles/recipebox.scss");


var RecipeBoxContainer = React.createClass({

	getInitialState: function(){
		return {
			// recipes will decided upon component mount
			recipes: [],
			// data for adding a new recipe
			recipeTitle: "",
			recipeIngredients: "",
			recipePreparation: "",
			showAddModal: false,
			// data for editing an already existing recipe
			editableTitle: "",
			editableIngredients: "",
			editablePreparation: "",
			selectedRecipeIndex: null,
			showEditModal: false,
			modalTitle: "",
			// data for restoring a single, recently deleted recipe
			previousleRemovedRecipe: null,
			restoreRecipe: false,
			// boolean used for activating modal warning for empty fields
			emptyInputFields: false
		};		
	},

	// if no recipes were previously added to the local storage, default recipes are loaded
	componentWillMount: function(){
		if(localStorage._recipes){
			var storageString = localStorage.getItem("_recipes");
			var storageState = JSON.parse(storageString);

			this.setState ({recipes: storageState});
		} else {
			this.setState ({recipes: InitialRecipes});
		}
	},

	// after adding/editting/deleting a recipe, new recipes' state is saved into browser's local storage
	handleAddToStorage: function(){
		var storageObject = this.state.recipes;
		localStorage.setItem("_recipes", JSON.stringify(storageObject));
	},

	handleAddRecipe: function(){
		// app doesn't allow empty input fields
		if (this.state.recipeTitle && this.state.recipeIngredients && this.state.recipePreparation) {

				var tempRecipes = this.state.recipes.concat(
					{title: this.state.recipeTitle, 
					ingredients: this.state.recipeIngredients,
					preparation: this.state.recipePreparation}
				);

			this.setState({
				recipes: tempRecipes,
				showAddModal: false,
				emptyInputFields: false
			// after state is updated, adds news state into local storage	
			}, this.handleAddToStorage);
		} else {
			this.setState({emptyInputFields: true});
		}
	},

	// fills required information for recipe edit and opens editModal. Each target's id corresponds to a key from map function 
	handleSelectForEdit: function(e){
		var index = Number(e.target.id);
		this.setState({
				selectedRecipeIndex: index,
				editableTitle: this.state.recipes[index].title,
				editableIngredients: this.state.recipes[index].ingredients,
				editablePreparation: this.state.recipes[index].preparation,
				// separate modal title, that will not be changed on input field changes
				modalTitle: this.state.recipes[index].title,
				showEditModal: true
			});
	},

	handleEditRecipe: function(){
		// app doesn't allow empty input fields.
		if (this.state.editableTitle && this.state.editableIngredients && this.state.editablePreparation){
			//checks all recipes, and creates updated version of recipe, that was selected for edit
			var tempRecipes = this.state.recipes.map(function(recipe, i){
				if(i === this.state.selectedRecipeIndex){
					recipe.title = this.state.editableTitle;
					recipe.ingredients= this.state.editableIngredients;
					recipe.preparation= this.state.editablePreparation;	
				} return recipe;
			}.bind(this));
			
			this.setState({
				recipes: tempRecipes,
				showEditModal: false
				// after recipe was edited, saves change state into local storage
			}, this.handleAddToStorage);
		} else {
			this.setState({emptyInputFields: true});
		}
	},

	// idea of using filter function was taken from stackoverflow
	handleRemoveRecipe: function(e){
		//uses id of remove buttons from RecipeList component
		var index = Number(e.target.id.slice(-1));
		var tempRecipes = this.state.recipes.filter(function(recipe, i){
			return i != index;	
		});

		// variable is stored for a possible recovery of recently removed recipe
		var removedRecipe = this.state.recipes[index];
		
		this.setState({
			recipes: tempRecipes,
			previouslyRemovedRecipe: removedRecipe,
			// show recovery button
			restoreRecipe: true
		}, this.handleAddToStorage); 
	},

	handleRestoreRecipe: function(){
		var tempRecipes = this.state.recipes.concat(this.state.previouslyRemovedRecipe);
		this.setState({
			recipes: tempRecipes,
			//hides recovery button
			restoreRecipe: false
		}, this.handleAddToStorage);	
	},

	/*universal onChange handler for input fields. Was taken from stack overflow
	input fields have name attributes, that correspond to a piece of state they are related to */
	handleChangeInput: function(e){
		var obj = {};
		obj[e.target.name] = e.target.value;
		this.setState(obj);
	},

	openAddModal: function(){
		this.setState({showAddModal: true});
	},

	//closing modals, removes warning text for empty inputs
	closeAddModal: function(){
		this.setState({
			showAddModal: false,
			emptyInputFields: false
		});
	},

	closeEditModal: function(){
		this.setState({
			showEditModal: false,
			emptyInputFields: false
		});
	},

	render: function(){
		return(
			<RecipeBox 
				recipes={this.state.recipes} 
				showAddModal={this.state.showAddModal}
				onOpenAddModal={this.openAddModal}
				onCloseAddModal={this.closeAddModal}
				onAddRecipe={this.handleAddRecipe}
				recipeTitle={this.state.recipeTitle}
				recipeIngredients={this.state.recipeIngredients}
				recipePreparation={this.state.recipePreparation} 
				onSelectForEdit={this.handleSelectForEdit}
				onEditRecipe={this.handleEditRecipe}
				showEditModal={this.state.showEditModal}
				onCloseEditModal={this.closeEditModal}
				modalTitle={this.state.modalTitle}
				editableTitle={this.state.editableTitle}
				editableIngredients={this.state.editableIngredients}
				editablePreparation={this.state.editablePreparation}
				onRemoveRecipe={this.handleRemoveRecipe}
				restoreRecipe={this.state.restoreRecipe}
				onRestoreRecipe={this.handleRestoreRecipe}
				onChangeInput={this.handleChangeInput}
				emptyInputFields={this.state.emptyInputFields}
			/>
		);
	}
});

module.exports = RecipeBoxContainer;