import React from 'react';
import { Container, Grid, Typography, Box, Card, CardContent } from '@mui/material';

const ApplyPage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h2" align="center" color="primary" gutterBottom>
        Apply to Join
      </Typography>

      <Grid container spacing={4}>
        {/* Picture of Fair */}
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: 'grey.300', height: '300px' }}>Picture of Friends at Fair</Box>
        </Grid>

        {/* Text Box */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="body1">
                Interested in joining our club? Learn more about the application process and what it
                means to be a member.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ApplyPage;
