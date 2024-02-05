import React from 'react';
import { Page } from './components/Page';

const name = {
    name: "React",
    year: 2024,
};

function App() {
    return (
        <body>
            <Page 
            titulo="Welcome to my app the React"
            body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
            dolore quia! Ipsum perferendis accusantium error. Adipisci,
            dolore quia! Ipsum perferendis accusantium error. Adipisci,
            dolore quia! Ipsum perferendis accusantium error." 
            footer={`Año ${name.year}. My Company ${name.name}`}
            />
        </body>
)
}

export default App