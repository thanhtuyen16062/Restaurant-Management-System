import React, { Component } from 'react';

export class Food extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing : false,
            txtEdit : null
        };
    }
    
    buttonEdit = () => {
        this.setState({ 
            editing : true ,
        });
    }

    isInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        console.log(name);

        this.setState({
            [name] : value
        })
    }

    buttonSave = (event) => {
        this.setState({ 

            editing : false

         });
        this.props.edit( this.props.index,this.foodName.value );
        //console.log(this.foodName.value);

        var content = '';
        content += 'Name: ' + this.state.txtEdit;
        console.log(content);
    }

    buttonDelete =() => {
        this.props.delete(this.props.index);
    }

    renderNormal = () => {
        return <div>
                    <button type="button" className="btn btn-outline-success btn-sm" onClick={ () => this.buttonEdit() }>Edit</button><span> </span>
                    <button type="button" className="btn btn-outline-success btn-sm" onClick={ () => this.buttonDelete() }>Remove</button>
                </div>
    }

    renderEditForm = (event) => {
        return  <div>
                    <input ref={(inputName) => {this.foodName = inputName}} defaultValue={ this.props.children } type="text" name="txtEdit" className = "form_control" id ="usr" onChange={(event) => this.isInputChange(event)}/><br /> <br /><br />
                    <button type="button" className="btn btn-outline-success btn-sm" onClick={ () => this.buttonSave() }>Save</button>
                </div>
                
    }

    show_button = () => {
        if ( this.state.editing === false)
            return this.renderNormal();
        else 
            return this.renderEditForm();
    }

    render() {
        return (
            <div className="col-md">
                <img src={this.props.images} alt="" width="250px" height="200px" />
                <p>{ this.props.children}</p>
                <div>${this.props.price}</div>
                <button type="button" className="btn btn-outline-success btn-sm">Choose</button><span> </span>
                <button type="button" className="btn btn-outline-success btn-sm">Delete</button>
                
                <hr />

                { this.show_button() }
                
            </div>
        );
    }
}

export default Food;
