import { Box, Typography } from '@mui/material'
import React from 'react'

const CategoryHead = ({ name, percantage, revenue, numOfEngagements }) => {
  return (
    <Box
        sx={{
            width: '100%',
            borderRadius: '5px',
            backgroundColor: "#daf5f7",
            padding: '10px 15px',
            margin: '10px auto',
            borderTop: '5px solid #99d1d3'
        }}
        className="module_category_header"
    >
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: "5px"
            }}
        >
            <Typography fontWeight="bold">{name}</Typography>
            <Typography>•</Typography>
            <Typography>{`${percantage}%`}</Typography>
        </Box>

        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: "5px"
            }}
        >
            <Typography fontWeight="bold">{`$${revenue}`}</Typography>
            <Typography fontWeight="bold">•</Typography>
            <Typography>{`${numOfEngagements} Engagements`}</Typography>
        </Box>
    </Box>
  )
}

export default CategoryHead;