import React from "react";
import Grid from "@material-ui/core/Grid";
import "../styles/Home.css";

class Home extends React.Component {
    render(){
        return(
            <>
                <Grid container>
                    <Grid item xs={12} className="grid-intro">
                        <div className="intro">
                            <h1>Vendo a indústria do cinema de um jeito diferente</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at sed cras nisi. </p>
                        </div>
                            <img src="intro.jpg" alt="Cinema"></img>
                    </Grid>

                    <Grid item xs={12} className="grid-info">
                        <img src="intro.jpg" alt="Cinema"></img>
                        <div className="info">
                            <h1>Conheça o nosso projeto</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at sed cras nisi. </p>
                        </div>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default Home;