import React, {useState, useEffect} from 'react';
import api from '../services/api';
import iconDelete from '../assets/icons8-excluir-64.png';
import iconEdit from '../assets/icons8-editar-48.png';
import FormDisco from "./componentes/FormDisco";
import FormDiscoNovo from "./componentes/FormDiscoNovo";

export default function Discos() {

    const [discos, setDiscos] = useState([]);
    const [artistas, setArtistas] = useState([]);
    const [generos, setGeneros] = useState([]);

    useEffect(function () {

        async function carregarDados() {
            const response = await api.get('/disco/listar');
            const response_artista = await api.get('/artista/listar');
            const response_genero = await api.get('/genero/listar');
            setDiscos(response.data);
            setArtistas(response_artista.data);
            setGeneros(response_genero.data);
        }

        carregarDados();

    }, []);

    async function excluir(id) {
        await api.get('/disco/excluir', {
            params: {'id': id}
        });
        setDiscos(discos.filter(disco => disco.id !== id));
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
                            <FormDiscoNovo propsGenero={generos} propsArtista={artistas}/>
                        </div>
                    </div>
                </div>
            </div>

            <button className='btn btn-light btn_alinhamento' data-toggle="modal"
                    data-target="#modalNovo">Adicionar Novo</button>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Nome Álbum</th>
                    <th scope="col">Gênero</th>
                    <th scope="col">Artista</th>
                    <th scope="col">Ações</th>
                </tr>
                </thead>
                <tbody>
                {discos.map((disco) => {
                    return <tr key={disco.id}>
                        <td>{disco.nome_album}</td>
                        <td>
                            {generos.map((genero)=>{
                                if(genero.id === disco.id_genero){
                                    return genero.nome;
                                }
                            })}
                        </td>
                        <td>
                            {artistas.map((artista)=>{
                                if(artista.id === disco.id_artista) {
                                    return artista.nome;
                                }
                            })}
                        </td>
                        <td>
                            <button type="button" className="btnArt" name="excluir" id="excluir"
                                    onClick={() => excluir(disco.id)}>
                                <img className="icon" src={iconDelete} title="Excluir" width="25px"/>
                            </button>
                            <button type="button" className="btnArt" name="editar" id="editar" data-toggle="modal"
                                    data-target={'#modalEditar'+disco.id}>
                                <img src={iconEdit} title="Editar" width="25px"/>
                            </button>
                        </td>
                        <div className="modal fade" id={'modalEditar'+disco.id} tabIndex="-1" role="dialog"
                             aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Editar Disco</h5>
                                        <button type="button" className="close" data-dismiss="modal"
                                                aria-label="Fechar">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <FormDisco propsDisco={disco} propsArtistas={artistas} propsGeneros={generos}/>
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