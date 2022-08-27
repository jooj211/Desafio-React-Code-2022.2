import React from "react";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import Form from 'react-bootstrap/Form';
import Button from "@material-ui/core/Button";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
                            <a href="sobre"><button href="sobre" id="btn-about">Saiba Mais</button></a>
                        </div>
                    </Grid>

                    <Grid item xs={12} className="grid-carousel">
                        <Carousel className="carousel" transitionDuration={1200} autoHeight>
                            <img src="Banner.png" alt="Cinema"></img>
                            <img src="banner.jpg" alt="Cinema"></img>
                            <img src="intro.jpg" alt="Cinema"></img>
                        </Carousel>
                    </Grid>

                    <Grid item xs={12} className="grid-contact">
                        <div className="contact">
                            <h1>Contate-nos</h1>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Control type="name" placeholder="Nome" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPhone">
                                    <Form.Control type="phone" placeholder="Telefone" />
                                </Form.Group>

                                <Form.Group controlId="formBasicMessage">
                                    <Form.Control as="textarea" rows={8} placeholder="Tem algo a dizer?" />
                                </Form.Group>
                                <Button variant="contained" color="primary">
                                    Enviar
                                </Button>
                            </Form>
                        </div>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default Home;