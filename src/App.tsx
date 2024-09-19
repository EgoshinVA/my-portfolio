import React from 'react';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Work} from "./layout/sections/work/Work";
import {Visual} from "./layout/sections/visual/Visual";
import {Projects} from "./layout/sections/projects/Projects";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Work/>
            <Visual/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
