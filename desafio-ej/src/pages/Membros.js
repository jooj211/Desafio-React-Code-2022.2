import React from "react";
import '../styles/Membros.css';
import { MembersList } from '../components/MembersList/MembersList';
import Grid from "@material-ui/core/Grid";

class Membros extends React.Component {
    render() {
      return (
        <>
          <h1>Membros da Empresa</h1>
          <br/>
          <Grid container spacing={3} className="container">
            {MembersList.map((item, index) => {
              return (
                <Grid item xs={12} md={4}>
                  <div className={item.cName}> <img src={item.imagePath} alt={item.name}/> </div>
                </Grid>
              )
            })}
          </Grid>
        </>
      );
    }
}

export default Membros;