import React from 'react';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Work} from "./layout/sections/work/Work";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Work/>
        </div>
    );
}

export default App;
