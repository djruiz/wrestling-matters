import {Button, Box} from '@material-ui/core/'
import './home.css'

function Home() {
    return (
            <Box style={{height: '100vh'}} bgcolor="text.primary">
                <div className="home-page">
                    <h1>Wrestling Matters Podcast</h1>
                    <Button variant="contained" color="primary">
                        Listen to latest episode
                    </Button>
                </div>
            </Box>
        
        
    );
  }
  
  export default Home;
  