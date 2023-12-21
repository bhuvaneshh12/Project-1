// MyComponent.js
import React from 'react';
import { Container, Grid } from '@mui/material';
import MyAppBar from './assign';
import MyCard from './card';
const MyComponent = () => {
  const cards = Array.from({ length: 8 }, (_, index) => ({
    title: `Card ${index + 1}`,
    content: `This is the content of card ${index + 1}`,
  }));

  return (
    <div>
      <MyAppBar />
      <Container sx={{ marginTop: 2 }}>
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <MyCard title={card.title} content={card.content} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MyComponent;
