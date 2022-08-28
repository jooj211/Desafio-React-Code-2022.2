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
                            <p>
                                Na Cine Jr, você aprende como funciona a indústria do cinema, desde a produção até a distribuição, e ainda tem a oportunidade de participar de projetos reais, como a produção de um curta-metragem. Aqui, você pode participar de oficinas, cursos e workshops, além de ter acesso a conteúdos exclusivos sobre o universo cinematográfico.
                            </p>
                        </div>
                            <img src="Videographer-amico.png" alt="Cinema"></img>
                    </Grid>

                    <Grid item xs={12} className="grid-info">
                        <img src="Sharing Ideas-bro.png" alt="Cinema"></img>
                        <div className="info">
                            <h1>Conheça o nosso projeto</h1>
                            <p>
                                A Cine Jr é uma organização sem fins lucrativos que, através de oficinas, cursos, workshops e projetos reais, busca formar jovens cineastas e profissionais da área audiovisual, além de promover a inclusão social por meio da produção de conteúdo audiovisual. Saiba mais clicando no botão abaixo!
                            </p>
                            <a href="sobre"><button href="sobre" id="btn-about">Saiba Mais</button></a>
                        </div>
                    </Grid>

                    <Grid item xs={12} className="grid-carousel">
                        <Carousel className="carousel" transitionDuration={1200} autoHeight>
                            <img src="Banner.png" alt="Cinema"></img>
                            <img src="banner.jpg" alt="Cinema"></img>
                            <img src="Fall-Movie-Review.jpg" alt="Cinema"></img>
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