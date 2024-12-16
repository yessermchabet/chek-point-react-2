import Card from 'react-bootstrap/Card';

const CardPlayer=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.Image} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.nationality}
        </Card.Text>
      </Card.Body>
    </Card>
    )
}

export default CardPlayer