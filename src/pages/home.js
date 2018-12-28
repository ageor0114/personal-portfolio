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
	    		<img id="inline" height="500px" width="500px" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/29196576_231189960786850_2050064795070801629_n.jpg?_nc_cat=100&_nc_ht=scontent-lga3-1.xx&oh=dfc690986b55d63480ec719f6e524fc6&oe=5C9F422B" alt="Portrait"/>
	    		<div id="vertical">
	    			<center><h1 id="title">Austin George</h1></center>
	    			<center><Button variant="outlined" target="_blank" href="https://drive.google.com/open?id=13rWCcGhvS5dPUpJBb3hGSH_SZG5ykmHJdMmNW2BqXbw">See Resume</Button></center>
	    		</div>
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
