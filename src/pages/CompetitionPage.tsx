import React from 'react';
import { Container, Grid, Typography, Box, Card, CardContent } from '@mui/material';

const CompetitionPage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h2" align="center" color="primary" gutterBottom>
        Competition
      </Typography>

      <Grid container spacing={4}>
        {/* Two Picture Boxes */}
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: 'grey.300', height: '200px' }}>Picture of Competition</Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: 'grey.300', height: '200px' }}>Picture of Competition</Box>
        </Grid>

        {/* Text Boxes */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body1">Text Box Content #1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body1">Text Box Content #2</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body1">Text Box Content #3</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CompetitionPage;
