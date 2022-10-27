import { Box, InputBase, Paper, Typography } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CategoryHead from "./components/CategoryHead";
import CustomCard from "./components/Card";


const Search = styled('div')(({ theme }) => ({        // div that holds the searchbox
  position: 'relative',
  borderRadius: '20px',
  border: '1px solid lightGrey',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({     // wraps the search icon and positions it related to it's parent
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({    // customized input field
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));



function App() {
  return (
    <div className="App">
      <Box                                            // parent div to hold the app
        sx={{
          width: '100%',
          height: '100vh',
          color: '#33334c'
        }}
      >
        <Box                                          // div that holds the header - title and search field
          component='header'
          sx={{
            width: '90%',
            margin: '30px auto 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography
            variant="h4"
          >
            Add a Title
          </Typography>

          <Box 
            sx={{
              width: '30%'
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                inputProps={{ 'aria-label': 'search' }}
                fullWidth
              />
            </Search>
          </Box>
        </Box>

        <Box                                          // div that holds the card modules
          sx={{
            width: '90%',
            height : '100%',
            margin: '20px auto'
          }}
        >
          <Paper                                      // div that holds the category modules
            sx={{
              width: '100%',
              minHeight: '85vh',
              backgroundColor: "#edf0f4",
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <Box
              sx={{
                width: '18%',
                margin: '15px auto 30px'
              }}
            >
              <CategoryHead
                name="CIM Development"
                percantage="30"
                revenue="101,000,000.00"
                numOfEngagements={6}
              />

              <CustomCard 
                projectName="Project Blue Ocean"
                owner="Brian Perry"
                ownerCompany="Horizon Underground INC. -"
                ownerDetails="Bobbian Fair"
                currency="25,000,000.00"
                date="Dec 1, 2023"
              />

              <CustomCard 
                projectName="Project Mustang"
                owner="Brian Franco"
                ownerCompany="Horizon Underground INC. -"
                ownerDetails="Bobbian Fair"
                date="Dec 1, 2023"
              />
            </Box>

            <Box
              sx={{
                width: '18%',
                margin: '15px auto 30px'
              }}
            >
              <CategoryHead
                name="Marketing"
                percantage="40"
                revenue="110,850,000.00"
                numOfEngagements={6}
              />
            </Box>

            <Box
              sx={{
                width: '18%',
                margin: '15px auto 30px'
              }}
            >
              <CategoryHead
                name="Negotiations"
                percantage="50"
                revenue="31,377,000.00"
                numOfEngagements={4}
              />
            </Box>

            <Box
              sx={{
                width: '18%',
                margin: '15px auto 30px'
              }}
            >
              <CategoryHead
                name="Due Diligence"
                percantage="60"
                revenue="8,900,000.00"
                numOfEngagements={3}
              />

            </Box>

            <Box
              sx={{
                width: '18%',
                // height: '100%',
                margin: '15px auto 30px'
              }}
            >
              <CategoryHead
                name="Definitive Agreements"
                percantage="80"
                revenue="0.00"
                numOfEngagements={0}
              />

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
            </Box>
          </Paper>
        </Box>
      </Box>
    </div>
  );
}

export default App;
