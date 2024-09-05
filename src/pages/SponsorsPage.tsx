import React from 'react';
import { Container, Grid, Typography, Box, Card, CardMedia, CardContent } from '@mui/material';

const SponsorsPage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h2" align="center" color="primary" gutterBottom>
        Our Sponsors
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Picture Box */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/path-to-sponsor-image.jpg"
              alt="Sponsor Picture"
            />
          </Card>
        </Grid>

        {/* Text Box */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="body1">
                Thank you to our amazing sponsors for their support! Your contributions help us
                achieve great things.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h3" align="center" color="primary" gutterBottom sx={{ mt: 6 }}>
        How to Become a Sponsor
      </Typography>

      <Grid container spacing={4}>
        {/* Picture Box */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/path-to-how-to-sponsor-image.jpg"
              alt="Become a Sponsor"
            />
          </Card>
        </Grid>

        {/* Text Box */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="body1">
                Interested in becoming a sponsor? Reach out to us to learn how you can support our
                initiatives.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SponsorsPage;
