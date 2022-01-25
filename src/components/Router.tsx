import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Sketches from "../pages/Sketches";
import About from "../pages/About";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route
                path='/sketches'
                element={<Sketches/>}
            />
            <Route
                path='/about'
                element={<About/>}
            />
            <Route
                path='*'
                element={<Navigate to='/sketches'/>}
            />
        </Routes>
    );
};

export default Router;