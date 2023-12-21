import React from 'react';
import './assign.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyAppBar from './assign';
import Footer from './Footer';
const About = () => {
  return (
    <div>    <MyAppBar />
    <Box className="about-container">
      <Typography variant="h4" className="about-heading">
        Welcome to our Stock Management System (EMS)
      </Typography>
      <div className="about-content">
      <br/><br/><br/>
      <Typography variant="body1">
      Our Stock Management System is designed to streamline inventory control,
          simplify stock tracking, and optimize the overall management of goods and products.
          Whether you're a small business or a large enterprise, our system aims to
          enhance efficiency and accuracy in your stock operations.
      </Typography>
      <Typography variant="body1">
      Our dedicated team of developers and designers is committed to creating
          user-friendly and efficient solutions. Meet the individuals behind the
          Stock Management System who work tirelessly to bring you the best experience.
      </Typography>
      <Typography variant="body1">
          We prioritize simplicity, transparency, and adaptability. Our user-friendly interface ensures seamless integration into your
          existing workflows, fostering a collaborative and engaging workplace environment.
        </Typography>
        <Typography variant="body1">
          Security is at the core of our Stock Management System. We implement robust measures to safeguard sensitive employee data,
          ensuring compliance with the latest regulations.
        </Typography>
      </div>
    </Box>
    <Footer/>
    </div>

  );
};
export default About;
