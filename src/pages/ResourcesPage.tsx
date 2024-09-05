import React from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';

const ResourcesPage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h2" align="center" color="primary" gutterBottom>
        Resources
      </Typography>

      <Grid container spacing={4}>
        {/* Two Text Boxes */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="body1">Here is a useful resource for our members.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="body1">Another important resource for our members.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResourcesPage;
