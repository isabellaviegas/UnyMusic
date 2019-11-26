import React from 'react';
import './App.css';
import unymusic from "../src/assets/unymusic.png";
import Routes from "./routes";

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/"><img src={unymusic} width="120px"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(Página atual)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/discos">CD's</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/artista">Artistas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/genero">Gêneros</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes/>
        </div>


    );
}

export default App;
