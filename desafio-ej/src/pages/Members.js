import React, { useState, useEffect } from "react";
import MemberCard from '../components/MemberCard/MemberCard';
/* import { api } from '../services/api'; */
/* import MembersList from '../components/MembersList/MembersList'; */
import '../styles/Members.css';
import Grid from "@material-ui/core/Grid";
    
const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:3000/members';
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
            {members.map((member, index) =>
              (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <MemberCard
                  key={index}
                  name={member.name} 
                  email={member.email} 
                  aniversario={member.aniversario} 
                  departamentos={member.departamentos} 
                  cargo={member.cargo}
                  />
                </Grid>
              )
            )}
          </Grid>
        </div>
      );
}

export default Members;

