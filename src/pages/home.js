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
	    			<br/>
	    			<Button size="large" variant="outlined" target="_blank" href="https://austingeorgefiles.files.wordpress.com/2019/07/austin-george-resume.pdf">See Resume</Button>
	    		</center>
	    	</section>
	    	{/*<section id="cardAbout">
	    		<center><h1 id="title">About Section</h1></center>
	    		<p id="bar">Austin is an ambitious, creative, and hardworking student that is always seeking to create. Be it painting or coding, he gravitates towards mediums that allow him to express himself.</p>
	    	</section>
	    	<section id="cardPortfolio">
	    		<h1>Portfolio Section</h1>
	    	</section>
	    	<section id="cardCSPortfolio">
	    		<h1 id="title">Computer Science</h1>
	    	</section>
	    	<section id="cardArtPortfolio">
	    		<h1 id="title">Art</h1>
	    	</section>*/}
	    </div>
	)
    }
};

export default HomePage
