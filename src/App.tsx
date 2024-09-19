import React from 'react';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Work} from "./layout/sections/work/Work";
import {Visual} from "./layout/sections/visual/Visual";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Work/>
            <Visual/>
        </div>
    );
}

export default App;
