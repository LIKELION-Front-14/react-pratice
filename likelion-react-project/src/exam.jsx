import React from 'react';

const Card = ({ image, title }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    textAlign: 'center',
    width: '250px'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '4px'
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imageStyle} />
      <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{title}</p>
    </div>
  );
};

export default function Exam() {
  const cardData = [
    {
      id: 1,
      image: "/One.png",
      title: "Step 1",
    },
    {
      id: 2,
      image: "/two.png",
      title: "Step 2",
    },
    {
      id: 3,
      image: "/three.jpg",
      title: "Step 3",
    },
  ];

  return (
  <div style={{ 
  display: 'flex', 
  justifyContent: 'flex-start', 
  gap: '15px',                 
  padding: '20px',
  }}>
    
    {cardData.map((item) => (
      <Card 
        key={item.id} 
        image={item.image} 
        title={item.title} />
    ))}
  </div>
);
}