import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${ touched && error ? 'has-danger' : ''}`;

        return(
            <div className = { className }>
                <label> { field.label } </label>
                <input 
                    className = "form-control"
                    type="text" 
                    { ...field.input }
                />
                <div className = "text-help">
                    { touched ? error : '' }
                </div>
            </div>
        );
    }

    onSubmit(values){
        console.log(value);
    }

    render() {
        const { handleSubmit } = this.props;

        return(
            <div>
                <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>
                    <Field
                        label = "Title"
                        name = "title"
                        component = { this.renderField }
                    />
                    <Field
                        label = "Categories"
                        name = "categories"
                        component = { this.renderField }
                    />
                    <Field
                        label = "Content"
                        name = "content"
                        component = { this.renderField }
                    />
                </form>

                <button type = "submit" className = "btn btn-primary"> Submit </button>
            </div>
        );
    }
}

function validate(value) {
    const errors = {};

    if(!value.title) {
        errors.title = "Enter a title";
    }

    if(!value.categories) {
        errors.categories = "Enter some categories";
    }

    if(!value.content) {
        errors.content = "Enter some content";
    }

    return errors;
}

export default reduxForm({
    validate, // same as validate: validate
    form: 'PostNewForm'
})(PostsNew); //just like connect