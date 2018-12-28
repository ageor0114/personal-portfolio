import React from 'react';
import Button from '@material-ui/core/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
    render(){
	return(
	    <div>
	    	<section id="cardHome">
	    		<h1 id="title">Austin George</h1>
	    		<img src="austin.JPG" alt="Portrait"/>
	    	</section>
	    	<section id="cardAbout">
	    		<h1 id="title">About Section</h1><h1>Bob</h1>
	    	</section>
	    	<section id="cardPortfolio">
	    		<h1>Portfolio Section</h1>
	    	</section>




	    </div>
	)
    }
};

export default HomePage
