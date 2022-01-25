import React from 'react';
import NavBar from "./components/NavBar";
import {Grid} from "@mui/material";
import Router from "./components/Router";

const App: React.FC = () => {

    return (
        <React.Fragment>

            <Grid container spacing={1} className='main-grid'>
                <Grid item xs={12}>
                    <NavBar/>
                </Grid>


                <Router/>
            </Grid>

        </React.Fragment>
    );
}

export default App;
