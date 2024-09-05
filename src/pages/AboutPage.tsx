import React from 'react';
import { Container, Grid, Typography, Box, Card, CardContent } from '@mui/material';

const AboutPage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h2" align="center" color="primary" gutterBottom>
        About Us
      </Typography>

      <Grid container spacing={4}>
        {/* Picture */}
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: 'grey.300', height: '300px' }}>Picture of Team</Box>
        </Grid>

        {/* Text Box */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="body1">
                We are a group of dedicated students working to achieve great things together. Learn
                more about us and our goals.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Another Text Box */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="body1">
                Our team consists of passionate members from various fields, all striving to make a
                positive impact.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
