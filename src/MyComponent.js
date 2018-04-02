import React, { Component } from 'react';
import AddButton from './AddButton';
import { Button, Table, Input } from 'react-materialize';
import { connect } from 'react-redux';

class MyComponent extends React.Component {

    // constructor(props) {

    //   super(props);
    //   this.state = {

    //   };


    //   this.handleEdit = this.handleEdit.bind(this);
    //  this.getData = this.getData.bind(this);

    // }

    handleEdit() {
        this.props.dispatch({ type: "handleEdit" });
    }

    // componentDidMount() {
    // console.log('saassa');

    // this.getData();
    //  } 

    render() {

        const { error, edit } = this.props;
        const { items, isLoaded } = this.props;

        if (error) {

            return <div > Error: { error.message } < /div>;

        } else if (!isLoaded) {

            return <div > Loading... < /div>;
        } else {

            return (

                <
                Table >
                <
                thead >
                <
                tr >

                <
                th > First Name < /th> <
                th > Email < /th> <
                th > Account No < /th> <
                th > User Role < /th> < /
                tr > <
                /thead>

                <
                tbody > {!this.props.edit ?
                    (
                        items.map((item, index) => ( <
                            tr key = { 'sysrow' + index } >
                            <
                            td > { item.FirstName } < /td> <
                            td > { item.Email } < /td> <
                            td > { item.AccountNumber } < /td> <
                            td > { item.UserRole } < /td> <
                            td > { this.props.edit ? < AddButton / > : "" } < /td> <
                            td >
                            <
                            Button onClick = { this.handleEdit } > Edit < /Button> < /
                            td > <
                            /tr>
                        ))
                    ) : (
                        items.map((item, index) => ( <
                            tr key = { 'syseditrow' + index } >
                            <
                            td > < Input key = { 'fname' + index }
                            defaultValue = { item.FirstName }
                            /></td >
                            <
                            td > < Input key = { 'email' + index }
                            defaultValue = { item.Email }
                            /></td >
                            <
                            td > < Input key = { 'acno' + index }
                            defaultValue = { item.AccountNumber }
                            /></td >

                            <
                            td > < AddButton / > < /td> <
                            td >
                            <
                            Button waves = 'red'
                            onClick = { this.handleSave.bind(this) } > Save < /Button> < /
                            td > <
                            /tr>
                        ))
                    )
                }


                <
                /tbody> < /
                Table >
            );

        }
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.error,
        isLoaded: state.isLoaded,
        editing: state.editing,
        edit: state.edit,
        items: state.items
    }
}

export default (MyComponent);