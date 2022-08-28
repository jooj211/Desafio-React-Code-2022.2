import React from "react";
import Grid from "@material-ui/core/Grid";
import "../styles/Sobre.css";

class Sobre extends React.Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} className="grid grid-our-mission">
            <div className="content our-mission">
              <h1>Nossa Missão</h1>
                  <p>
                    Nossa missão é democratizar o acesso às profissões relacionadas à produção de conteúdo audiovisual, melhorando assim o cenário da indústria do cinema brasileiro, ao mesmo tempo em que promovemos a inclusão social de diversos grupos, promovendo sempre o respeito e a importância do profissionalismo no ambiente de trabalho.
                  </p>
                    </div>
                      <img src="Goal-rafiki.png" alt="Cinema"></img>
          </Grid>

          <Grid item xs={12} className="grid grid-our-works">
            <img src="Recording a movie-pana.png" alt="Cinema"></img>
              <div className="content our-works">
                <h1>Nossos Trabalhos</h1>
                <p>
                  Ao participar da Cine Jr, você tem a oportunidade de participar de projetos reais. Os membros têm a chance de, uma vez ao mês, se reunir em grupos e produzir um curta-metragem, que será exibido em uma sessão pública, na universidade ou fora dela. Nossos membros já produziram mais de 20 curtas-metragens, que podem ser vistos no nosso canal do YouTube! Essas variam desde videoclipes musicais até documentários, passando por ficções e animações.
                </p>
              </div>
          </Grid>

          <Grid item xs={12} className="grid grid-join-us">
              <div className="content join-us">
                <h1>Faça parte da Cine Jr também!</h1>
                <p>
                  Gostou? Venha fazer parte também! Nosso processo seletivo abre duas vezes ao ano, em março e setembro. Para se inscrever, basta preencher o formulário no site e aguardar o contato da nossa equipe. Se você for selecionado, você terá a oportunidade de participar de uma das maiores e mais tradicionais equipes de produção audiovisual da universidade! 
                </p>
              </div>
              <img src="Add User-bro.png" alt="Cinema"></img>
          </Grid>

          
        </Grid>
      </div>
    );
  }
}

export default Sobre;