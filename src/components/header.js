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

class Header extends React.Component{
    constructor(props){
	super(props);
	this.state = {
	}
    }

    
    render(){
	return(
	    <div id="fullBar">
		<AppBar style={{boxShadow: 'none', backgroundColor: 'white'}}>
			<div>
			<p>
				<AnchorLink id="bar" href='#cardPortfolio'>Portfolio</AnchorLink>
	    		<AnchorLink id="bar" href='#cardAbout'>About</AnchorLink>
	    		<AnchorLink id="bar" href="#cardHome">Home</AnchorLink>
	    		<p id="bar"><a href="https://drive.google.com/open?id=13rWCcGhvS5dPUpJBb3hGSH_SZG5ykmHJdMmNW2BqXbw" target="_blank">Resume</a></p>
	    		
	    	</p>
	    	</div>
		</AppBar>

	    </div>
	);
    }
}

export default Header;
