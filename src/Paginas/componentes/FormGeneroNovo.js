import React from 'react';
import api from "../../services/api";

export default function FormGeneroNovo() {

    async function hendleSubmit(event) {
        await api.get('/genero/salvar', {
            params:{
                'nome': event.target.nome.value
            }
        });
    }

    return (
        <form onSubmit={hendleSubmit}>
            <div>
                <label>Nome:</label>
                <input type="text" id="nome" name="nome"/>
            </div>
            <div className="btn_salvar">
                <input className='btn btn-primary' type='submit' value='Salvar'/>
            </div>
        </form>
    );
}