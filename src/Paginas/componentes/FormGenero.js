import React, {useState, useEffect} from 'react';
import api from "../../services/api";

export default function FormGenero({propsGenero}) {

    const [formGenero, setFormGenero] = useState({});

    useEffect(function () {
        setFormGenero(propsGenero)
    }, [propsGenero]);

    async function hendleSubmit(event) {
        await api.get('/genero/atualizar', {
            params:{
                'id': propsGenero.id,
                'nome': event.target.nome.value,
            }
        });
    }

    return (
        <form onSubmit={hendleSubmit}>
            <div>
                <label>Nome:</label>
                <input defaultValue={formGenero.nome} type="text" id="nome" name="nome"/>
            </div>
            <div className="btn_salvar">
                <input className='btn btn-primary' type='submit' value='Salvar'/>
            </div>
        </form>
    );
}