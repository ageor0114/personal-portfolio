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
	    		<center>
	    			<img id="inline" src="https://github.com/ageor0114/personal-portfolio/blob/master/src/pages/austin.JPG?raw=true"  alt="Portrait"/>
	    			<br/>
	    			<br/>
	    			<h1 id="title">Austin George</h1>
	    			<Button size="large" variant="outlined" target="_blank" href="https://drive.google.com/open?id=13rWCcGhvS5dPUpJBb3hGSH_SZG5ykmHJdMmNW2BqXbw">See Resume</Button>
	    		</center>
	    		{/*<div id="vertical">
	    			<center><h1 id="title">Austin George</h1></center>
	    			<center><Button variant="outlined" target="_blank" href="https://drive.google.com/open?id=13rWCcGhvS5dPUpJBb3hGSH_SZG5ykmHJdMmNW2BqXbw">See Resume</Button></center>
	    		</div>*/}
	    	</section>
	    	<section id="cardAbout">
	    		<h1 id="title">About Section</h1>
	    	</section>
	    	<section id="cardPortfolio">
	    		<h1>Portfolio Section</h1>
	    	</section>
	    </div>
	)
    }
};

export default HomePage
