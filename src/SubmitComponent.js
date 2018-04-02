import React, { Component } from 'react';
import MyComponent from './MyComponent';
import axios from 'axios';
import { Button, Row, Input } from 'react-materialize'
import { getData } from './actions/';
import { connect } from 'react-redux';

class SubmitComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            sysId: "571783655c14710e248216ba",
            isLoaded: true
        }
        console.log(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this.props.dispatch);
    }

    handleSubmit() {
        // this.props.dispatch
        getData(this.props.dispatch, this.state.sysId);
    }

    handleChange(e) {
        this.setState({
            sysId: e.target.value
        });
    }

    render() {

        return ( < div >
            <
            Row >
            <
            Input s = { 6 }
            label = "Please enter System ID to continue:"
            defaultValue = { this.state.sysId }
            onChange = { this.handleChange.bind(this) }
            /> < /Row >
            <
            Button onClick = { this.handleSubmit } > Submit < /Button> <
            MyComponent isLoaded = { this.props.isLoaded }
            items = { this.props.items }
            onSubmit = { this.handleSubmit }
            />  < /div >
        );
    }
}

const mapStateToProps = (state) => {

    console.log(state);



    return {
        error: state.MyComponentReducer.error,
        isLoaded: state.MyComponentReducer.isLoaded,
        editing: state.MyComponentReducer.editing,
        edit: state.MyComponentReducer.edit,
        items: state.MyComponentReducer.items,
        isLoaded: state.SubmitComponentReducer.isLoaded,
        items: state.SubmitComponentReducer.items,
        sysId: state.SubmitComponentReducer.sysId,
    }
}

export default connect(mapStateToProps)(SubmitComponent);