import React, {useState, useEffect} from 'react';
import api from "../../services/api";

export default function FormArtista({propsArtista}) {

    const [formAtista, setFormArtista] = useState({});

    useEffect(function () {
        setFormArtista(propsArtista)
    }, [propsArtista] );

    async function hendleSubmit(event) {
        await api.get('/artista/atualizar', {
            params:{
                'id': propsArtista.id,
                'nome': event.target.nome.value,
                'nome_artistico': event.target.nome_artistico.value,
                'nome_banda': event.target.nome_banda.value
            }
        });
    }

    return (
        <form onSubmit={hendleSubmit}>
            <div className="inputStile">
                <label>Nome:</label>
                <input defaultValue={formAtista.nome} type="text" id="nome" name="nome"/>
            </div>
            <div className="inputStile">
                <label>Nome Artístico:</label>
                <input defaultValue={formAtista.nome_artistico} type="text" id="nome_artistico" name="nome_artistico"/>
            </div>
            <div className="inputStile">
                <label>Nome Banda:</label>
                <input defaultValue={formAtista.nome_banda} type="text" id="nome_banda" name="nome_banda"/>
            </div>
            <div className="btn_salvar">
                <input className='btn btn-primary' type='submit' value='Salvar'/>
            </div>
        </form>
    );
}