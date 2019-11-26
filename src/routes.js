import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Inicial from "./Paginas/Inicial";
import Artista from "./Paginas/Artista";
import Genero from "./Paginas/Genero";
import Discos from "./Paginas/Discos";

export default function Routes() {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Inicial}/>
                <Route path='/discos' component={Discos}/>
                <Route path='/genero' component={Genero}/>
                <Route path='/artista' component={Artista}/>
            </Switch>
        </BrowserRouter>
    );
}