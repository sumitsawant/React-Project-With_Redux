import React, { Component } from 'react';
import {Button,Dropdown,NavItem} from 'react-materialize'

class AddButton extends Component {

 render() {

 return(
		<div>
	 		<Dropdown trigger={
			
				<Button>Select Type</Button>
			
			}>
			<NavItem>Customer</NavItem>
	  		<NavItem>Admin</NavItem>
	  		</Dropdown>
		</div>
	);
}

}

export default AddButton;