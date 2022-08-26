import React from "react";
import '../styles/Membros.css';
import { MembersList } from '../components/MembersList/MembersList';
import Grid from "@material-ui/core/Grid";

class Membros extends React.Component {
    render() {
      return (
        <div className="member-container">
          <h1>Membros da Empresa</h1>
          <br/>
          <Grid container pb={2} className="card-container">
            {MembersList.map((item, index) => {
              return (
                <Grid item xs={12} sm={4} md={3}>
                  <div className={item.cName}>
                    <img src={item.imagePath} alt={item.name}/>
                    <span>{item.name}</span>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </div>
      );
    }
}

export default Membros;