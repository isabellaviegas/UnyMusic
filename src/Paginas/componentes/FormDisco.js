import React, {useState, useEffect} from 'react';
import api from "../../services/api";

export default function FormDisco({propsDisco, propsArtistas, propsGeneros}) {

    const [formDisco, setFormDisco] = useState({});

    useEffect(function () {
        setFormDisco(propsDisco)
    }, [propsDisco]);

    async function hendleSubmit(event) {
        await api.get('/disco/atualizar', {
            params:{
                'id': propsDisco.id,
                'nome_album': event.target.nome_album.value,
                'id_genero': event.target.id_genero.value,
                'id_artista': event.target.id_artista.value
            }
        });
    }

    return (
        <form onSubmit={hendleSubmit}>
            <div>
                <label>Nome do Álbum:</label>
                <input defaultValue={formDisco.nome_album} type="text" id="nome_album" name="nome_album"/>
            </div>
            <div>
                <label>Gênero:</label>
                <select name="id_genero" id="id_genero">
                    {propsGeneros.map((genero)=> {
                        if(genero.id === formDisco.id_genero){
                            return <option value={genero.id} key={genero.id} selected>{genero.nome} </option>
                        } else {
                            return <option value={genero.id} key={genero.id}>{genero.nome} </option>
                        }
                    })}
                </select>
            </div>
            <div>
                <label>Artista:</label>
                <select name="id_artista" id="id_artista">
                    {propsArtistas.map((artista)=> {
                        if(artista.id === formDisco.id_artista){
                            return <option value={artista.id} key={artista.id} selected>{artista.nome} </option>
                        } else {
                            return <option value={artista.id} key={artista.id}>{artista.nome} </option>
                        }
                    })}
                </select>
            </div>
            <div className="btn_salvar">
                <input className='btn btn-primary' type='submit' value='Salvar'/>
            </div>
        </form>
    );
}