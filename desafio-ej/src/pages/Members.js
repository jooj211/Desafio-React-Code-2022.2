import React from "react";
import { Card } from "react-bootstrap";
import '../styles/Members.css';
import Grid from "@material-ui/core/Grid";
    
const Members = () => {
  const [members, setMembers] = React.useState([]);

  React.useEffect(() => {
    const url = "https://localhost:3000/members";
    async function getMembers() {
      const response = await fetch(url);
      const data = await response.json();
      setMembers(data);
    }
    getMembers();
  }, []);

      return (
        <div className="member-container">
          <h1>Membros da Empresa</h1>
          <br/>
          <Grid container className="card-container">
            {members.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Card className="member-card">
                    <Card.Img variant="top" src="robson.png" />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          <p>Email: {item.email}</p>
                          <p>Aniversário: {item.aniversario}</p>
                          <p className="uppercase">
                            Departamentos: {
                              (item.departamentos).map((item, index) => {
                                return (
                                  <span className="uppercase">{item} </span>
                                )
                              }
                              )}
                          </p>
                          <p className="uppercase">Cargo: {item.cargo}</p>
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </div>
      );
}

export default Members;
