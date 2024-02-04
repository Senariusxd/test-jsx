import React from 'react';
import { Page } from './components/Page';
import { Footer } from './components/Footer';

const name = {
    name: "React",
    year: 2024,
};

function App() {
    return (
        <body>
            <Page 
            titulo="Welcome to my app the React"
            texto="Lorem ipsum, dolor sit amet 
            consectetur adipisicing elit. 
            Adipisci, dolore quia! Ipsum 
            perferendis accusantium error."
            />
            <Footer 
            texto={`Año ${name.year}. My Company ${name.name}`}
            />
        </body>
)
}

export default App