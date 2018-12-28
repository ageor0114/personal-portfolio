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
	    		<h1 id="white">Austin George</h1>
	    	</section>
	    	<section id="cardAbout">
	    		<h1 id="white">About Section</h1>
	    	</section>
	    	<section id="cardPortfolio">
	    		<h1 id="white">Portfolio Section</h1>
	    	</section>




	    </div>
	)
    }
};

export default HomePage
