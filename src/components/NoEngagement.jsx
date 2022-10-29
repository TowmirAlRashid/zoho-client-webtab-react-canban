import { Box, Typography } from '@mui/material'
import React from 'react'

const NoEngagement = () => {
  return (
    <Box                                            // div to show when no engagements are available
        sx={{
            width: '100%',
            height: '80%',
            backgroundColor: '#e5e9ee',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
        <Typography>
            No Engagements found.
        </Typography>
    </Box>
  )
}

export default NoEngagement