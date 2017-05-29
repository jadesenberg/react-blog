import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    renderField(field) {
        return(
            <div className = "form-group">
                <label> { field.label } </label>
                <input 
                    className = "form-control"
                    type="text" 
                    { ...field.input }
                />
            </div>
        );
    }

    render() {
        return(
            <div>
                <form>
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
            </div>
        );
    }
}

export default reduxForm({
    form: 'PostNewForm'
})(PostsNew); //just like connect