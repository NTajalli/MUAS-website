import React from 'react';
import { Container, Grid, Typography, Box, Card, CardContent } from '@mui/material';

const ProgressPage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h2" align="center" color="primary" gutterBottom>
        Progress
      </Typography>

      <Grid container spacing={4}>
        {/* Picture Boxes */}
        <Grid item xs={12} md={4}>
          <Box sx={{ bgcolor: 'grey.300', height: '200px' }}>Picture #1</Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ bgcolor: 'grey.300', height: '200px' }}>Picture #2</Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ bgcolor: 'grey.300', height: '200px' }}>Picture #3</Box>
        </Grid>

        {/* Text Box */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="body1">
                Here’s where we are in terms of progress and upcoming updates on our club’s
                activities.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProgressPage;
