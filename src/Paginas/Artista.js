import React, {useState, useEffect} from 'react';
import api from '../services/api';
import iconDelete from '../assets/icons8-excluir-64.png';
import iconEdit from '../assets/icons8-editar-48.png';
import FormArtista from "./componentes/FormArtista";
import FormArtistaNovo from "./componentes/FormArtistaNovo";

export default function Artista() {

    const [artistas, setArtistas] = useState([]);

    useEffect(function () {
        async function carregarDados() {
            const response = await api.get('/artista/listar');
            setArtistas(response.data);
        }

        carregarDados();

    }, []);

    async function excluir(id) {
        await api.get('/artista/excluir', {
            params: {'id': id}
        });
        setArtistas(artistas.filter(artista => artista.id !== id));
    }


    return (
        <div className="container container_alinhamento">

            <div className="modal fade" id="modalNovo" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Editar Artista</h5>
                            <button type="button" className="close" data-dismiss="modal"
                                    aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <FormArtistaNovo/>
                        </div>
                    </div>
                </div>
            </div>

            <button className='btn btn-light btn_alinhamento' data-toggle="modal"
                    data-target="#modalNovo">Adicionar Novo</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Nome Artístico</th>
                        <th scope="col">Banda</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                {artistas.map((artista) => {
                    return <tr key={artista.id}>
                        <td>{artista.nome}</td>
                        <td>{artista.nome_artistico}</td>
                        <td>{artista.nome_banda}</td>
                        <td>
                            <button type="button" className="btnArt" name="excluir" id="excluir"
                                    onClick={() => excluir(artista.id)}>
                                <img className="icon" src={iconDelete} title="Excluir" width="25px"/>
                            </button>
                            <button type="button" className="btnArt" name="editar" id="editar" data-toggle="modal"
                                    data-target={'#modalEditar'+artista.id}>
                                <img src={iconEdit} title="Editar" width="25px"/>
                            </button>
                        </td>
                        <div className="modal fade" id={'modalEditar'+artista.id} tabIndex="-1" role="dialog"
                             aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Editar Artista</h5>
                                        <button type="button" className="close" data-dismiss="modal"
                                                aria-label="Fechar">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <FormArtista propsArtista={artista}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}