import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//Problem: Bar is not fully sticky

class Header extends React.Component{
    constructor(props){
	super(props);

	this.toggle = this.toggle.bind(this);

	this.state = {
		dropdownOpen: false,
	}
    }

    toggle() {
    	this.setState(prevState => ({
    		dropwdownOpen: !prevState.dropdownOpen
    	}));
    }

    render(){
	return(
	    <div id="fullBar">
		<AppBar style={{boxShadow: 'none', backgroundColor: 'white'}}>
			<div>
			<p>
				{/*<Dropdown size="lg" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle>Portfolios</DropdownToggle>
				<a onClick={this.toggle} data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                <h1>My Portfolios</h1>
              	</a>
				<DropdownMenu>
					<DropdownItem>
						<AnchorLink id="bar" href="#cardCSPortfolio">
							Computer Science
						</AnchorLink>
					</DropdownItem>
					<DropdownItem>
						<AnchorLink id="bar" href="#cardArtPortfolio">
							Art
						</AnchorLink>
					</DropdownItem>
					<DropdownItem>Hello</DropdownItem>
					<DropdownItem>Pupper</DropdownItem>
					<DropdownItem onClick={this.toggle}>Custom 1</DropdownItem>
         			<DropdownItem onClick={this.toggle}>Custom 2</DropdownItem>
				</DropdownMenu>
				</Dropdown>*/}

				{/*<AnchorLink id="bar" href='#cardPortfolio'>Portfolio</AnchorLink>
	    		<AnchorLink id="bar" href='#cardAbout'>About</AnchorLink>*/}
	    		<AnchorLink id="bar" href="#cardHome">Home</AnchorLink>
	    		<p id="bar"><a href="https://austingeorgefiles.files.wordpress.com/2019/07/austin-george-resume.pdf" target="_blank">Resume</a></p>
	    		
	    	</p>
	    	</div>
		</AppBar>

	    </div>
	);
    }
}

export default Header;
