import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const CustomCard = ({projectName, owner, ownerCompany, ownerDetails, currency, date }) => {
  return (
    <Card sx={{ width: '100%', margin: '10px auto' }}>
      <CardActionArea>
        <CardContent>
          <Typography component="div" fontWeight="bold">
            {projectName}
          </Typography>
          <Typography>{owner}</Typography>
          <Typography>{ownerCompany}</Typography>
          <Typography>{ownerDetails}</Typography>
          <Typography>{currency}</Typography>
          <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
          >
            <Typography>{date}</Typography>
            <EventAvailableIcon color='green' />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomCard;