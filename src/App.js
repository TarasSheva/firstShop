import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {About} from "./pages/About";
import {NavBar} from "./components/navBar";
import {Contacts} from "./pages/Contacts";
import {Basket} from "./pages/Basket";
import {Footer} from "./components/footer";
import {Home} from "./pages/Home"
import {Catalog} from "./pages/Catalog";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <div className='container pt-4'>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/catalog'} component={Catalog}/>
                    <Route path={'/about'} component={About}/>
                    <Route path={'/contacts'} component={Contacts}/>
                    <Route path={'/basket'} component={Basket}/>
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>

    )
}

export default App;