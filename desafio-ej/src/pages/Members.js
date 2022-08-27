import React from "react";
import { Card, Button } from "react-bootstrap";
import '../styles/Members.css';
import { MembersList } from '../components/MembersList/MembersList';
import Grid from "@material-ui/core/Grid";

class Members extends React.Component {
    render() {
      return (
        <div className="member-container">
          <h1>Membros da Empresa</h1>
          <br/>
          <Grid container pb={2} className="card-container">
            {MembersList.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Card 
                  style={{ 
                    width: window.innerWidth >= 1030 ? '18rem' : (window.innerWidth >= 675 ? '17rem' : '15rem'),
                  }}>
                    <Card.Img variant="top" src={item.imagePath} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </div>
      );
    }
}

export default Members;