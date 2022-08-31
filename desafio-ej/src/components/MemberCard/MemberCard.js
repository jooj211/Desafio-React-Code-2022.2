import { Card } from "react-bootstrap";

const MemberCard = ({ name, email, aniversario, departamentos, cargo }) => {
    return (
        <Card className="member-card">
        <Card.Img variant="top" src="robson.png" />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            <p>Email: {email}</p>
            <p>Aniversário: {aniversario}</p>
            <p className="uppercase">
                Departamentos: {departamentos.map((departamento, index) => {
                return <span className="uppercase">{departamento} </span>;
                })}
            </p>
            <p className="uppercase">Cargo: {cargo}</p>
            </Card.Text>
        </Card.Body>
        </Card>
    );
}

export default MemberCard;