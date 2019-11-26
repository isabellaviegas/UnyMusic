import React from 'react';
import api from "../../services/api";

export default function FormArtistaNovo() {

    async function hendleSubmit(event) {
        await api.get('/artista/salvar', {
            params:{
                'nome': event.target.nome.value,
                'nome_artistico': event.target.nome_artistico.value,
                'nome_banda': event.target.nome_banda.value
            }
        });
    }

    return (
        <form onSubmit={hendleSubmit}>
            <div>
                <label>Nome:</label>
                <input type="text" id="nome" name="nome"/>
            </div>
            <div>
                <label>Nome Artístico:</label>
                <input type="text" id="nome_artistico" name="nome_artistico"/>
            </div>
            <div>
                <label>Nome Banda:</label>
                <input type="text" id="nome_banda" name="nome_banda"/>
            </div>
            <div className="btn_salvar">
                <input className='btn btn-primary' type='submit' value='Salvar'/>
            </div>
        </form>
    );
}