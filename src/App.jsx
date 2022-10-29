import { Box, InputBase, Paper, Typography } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CategoryHead from "./components/CategoryHead";
import CustomCard from "./components/Card";
import data from './data.js';
import NoEngagement from "./components/NoEngagement";


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
                revenue={data?.filter(singleData => singleData?.category === "cim_development")?.reduce((prev, element) => {
                  return prev += element?.currency;
                }, 0)}
                numOfEngagements={data?.filter(singleData => singleData?.category === "cim_development")?.length}
              />
              {
                data?.filter(singleData => singleData?.category === "cim_development")?.length > 0 ?
                data?.filter((singleData) => singleData?.category === "cim_development").map(singleData => (
                  <CustomCard
                    key={singleData?.id} 
                    projectName={singleData?.projectName}
                    owner={singleData?.owner}
                    ownerCompany={singleData?.ownerCompany}
                    ownerDetails={singleData?.ownerDetails}
                    currency={singleData?.currency}
                    date={singleData?.date}
                  />
                )) :
                <NoEngagement />
              }
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
                revenue={data?.filter(singleData => singleData?.category === "marketing")?.reduce((prev, element) => {
                  return prev += element?.currency;
                }, 0)}
                numOfEngagements={data?.filter(singleData => singleData?.category === "marketing")?.length}
              />
              {
                data?.filter(singleData => singleData?.category === "marketing")?.length > 0 ?
                data?.filter((singleData) => singleData?.category === "marketing").map(singleData => (
                  <CustomCard 
                    key={singleData?.id} 
                    projectName={singleData?.projectName}
                    owner={singleData?.owner}
                    ownerCompany={singleData?.ownerCompany}
                    ownerDetails={singleData?.ownerDetails}
                    currency={singleData?.currency}
                    date={singleData?.date}
                  />
                )) :
                <NoEngagement />
              }
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
                revenue={data?.filter(singleData => singleData?.category === "negotiations")?.reduce((prev, element) => {
                  return prev += element?.currency;
                }, 0)}
                numOfEngagements={data?.filter(singleData => singleData?.category === "negotiations")?.length}
              />
              {
                data?.filter(singleData => singleData?.category === "negotiations")?.length > 0 ?
                data?.filter((singleData) => singleData?.category === "negotiations").map(singleData => (
                  <CustomCard 
                    key={singleData?.id} 
                    projectName={singleData?.projectName}
                    owner={singleData?.owner}
                    ownerCompany={singleData?.ownerCompany}
                    ownerDetails={singleData?.ownerDetails}
                    currency={singleData?.currency}
                    date={singleData?.date}
                  />
                )) :
                <NoEngagement />
              }
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
                revenue={data?.filter(singleData => singleData?.category === "due_diligence")?.reduce((prev, element) => {
                  return prev += element?.currency;
                }, 0)}
                numOfEngagements={data?.filter(singleData => singleData?.category === "due_diligence")?.length}
              />
              {
                data?.filter(singleData => singleData?.category === "due_diligence")?.length > 0 ?
                data?.filter((singleData) => singleData?.category === "due_diligence").map(singleData => (
                  <CustomCard 
                    key={singleData?.id} 
                    projectName={singleData?.projectName}
                    owner={singleData?.owner}
                    ownerCompany={singleData?.ownerCompany}
                    ownerDetails={singleData?.ownerDetails}
                    currency={singleData?.currency}
                    date={singleData?.date}
                  />
                )) :
                <NoEngagement />
              }
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
                revenue={data?.filter(singleData => singleData?.category === "definitive_agreements")?.reduce((prev, element) => {
                  return prev += element?.currency;
                }, 0)}
                numOfEngagements={data?.filter(singleData => singleData?.category === "definitive_agreements")?.length}
              />
              {
                data?.filter(singleData => singleData?.category === "definitive_agreements")?.length > 0 ?
                data?.filter((singleData) => singleData?.category === "definitive_agreements").map(singleData => (
                  <CustomCard 
                    key={singleData?.id} 
                    projectName={singleData?.projectName}
                    owner={singleData?.owner}
                    ownerCompany={singleData?.ownerCompany}
                    ownerDetails={singleData?.ownerDetails}
                    currency={singleData?.currency}
                    date={singleData?.date}
                  />
                )) :
                <NoEngagement />
              }
            </Box>
          </Paper>
        </Box>
      </Box>
    </div>
  );
}

export default App;
