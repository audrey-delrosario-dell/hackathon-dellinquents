import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/styles/LinkCards.css'; 

const LinkCards = ({title, text, url}) => {
  const handleBtnClick = () => {
    window.open(url, '_blank');
  }
    return (

        <Card className='link-card-purr' style={{ height: '10rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className='text-container'>
            {text}
          </Card.Text>
            <button className='btn-add-link' onClick={handleBtnClick}>Click to Open Link</button>
        </Card.Body>
      </Card>
    );
};

export default LinkCards;