import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/styles/LinkCards.css'; 

const LinkCards = ({title, text, url}) => {
  const handleBtnClick = () => {
    window.open(url, '_blank');
  }
    return (
        <Card className='link-card-purr' style={{ height: '8rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Button variant="primary" onClick={handleBtnClick}>Click to open link</Button>
        </Card.Body>
      </Card>
    );
};

export default LinkCards;