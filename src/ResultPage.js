import React from 'react';
import { useParams } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import EventImage from './img/diwali2024.jpg';

const ResultPage = () => {
  const { name } = useParams();
  const shareUrl = window.location.href;

  return (
    <div style={styles.container}>
      <div style={styles.imageWrapper}>
        <img src={EventImage} alt="Festival" style={styles.image} />
        <h1 style={styles.greeting}>Happy Festival, {name}!</h1>
      </div>
      <div style={styles.share}>
        <h3>Share Your Wish</h3>
        <div style={styles.buttons}>
          <FacebookShareButton url={shareUrl}>
            <button style={styles.buttonFacebook}>Facebook</button>
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl}>
            <button style={styles.buttonTwitter}>Twitter</button>
          </TwitterShareButton>
          <WhatsappShareButton url={shareUrl}>
            <button style={styles.buttonWhatsapp}>WhatsApp</button>
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    position: 'relative', // Position relative for absolute children
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  greeting: {
    position: 'absolute',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '24px',
    color: '#fff',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    zIndex: 1, // Ensure the text is on top
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better readability
    padding: '10px',
    borderRadius: '5px',
  },
  share: {
    marginTop: '20px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  buttonWhatsapp: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#25D366',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)',
  },
  buttonFacebook: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '	#1877F2',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)',
  },
  buttonTwitter: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#000000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 123, 255, 0.3)',
  },
  '@keyframes text3D': {
    '0%': { transform: 'rotateX(0deg)' },
    '50%': { transform: 'rotateX(360deg)' },
    '100%': { transform: 'rotateX(0deg)' },
  },
};

export default ResultPage;
