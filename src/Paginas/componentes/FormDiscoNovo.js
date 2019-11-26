import React from 'react';
import api from "../../services/api";

export default function FormDiscoNovo({propsGenero, propsArtista}) {

    async function hendleSubmit(event) {
        await api.get('/disco/salvar', {
            params:{
                'nome_album': event.target.nome_album.value,
                'id_artista': event.target.id_artista.value,
                'id_genero': event.target.id_genero.value
            }
        });
    }

    return (
        <form onSubmit={hendleSubmit}>
            <div>
                <label>Nome do Álbum:</label>
                <input type="text" id="nome_album" name="nome_album"/>
            </div>
            <div>
                <label>Gênero:</label>
                <select name="id_genero" id="id_genero">
                    {propsGenero.map((genero)=> {
                        return <option value={genero.id} key={genero.id}>{genero.nome} </option>
                    })}
                </select>
            </div>
            <div>
                <label>Artista:</label>
                <select name="id_artista" id="id_artista">
                    {propsArtista.map((artista)=> {
                        return <option value={artista.id} key={artista.id}>{artista.nome} </option>
                    })}
                </select>
            </div>
            <div className="btn_salvar">
                <input className='btn btn-primary' type='submit' value='Salvar'/>
            </div>
        </form>
    );
}