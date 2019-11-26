import  React, {useState, useEffect} from 'react';
import api from "../services/api";
import FormGenero from "./componentes/FormGenero";
import iconDelete from "../assets/icons8-excluir-64.png";
import iconEdit from "../assets/icons8-editar-48.png";
import FormGeneroNovo from "./componentes/FormGeneroNovo";

export default function Genero() {
    const [generos, setGeneros] = useState([]);

    useEffect(function () {
        async function carregarDados() {
            const response = await api.get('/genero/listar');
            setGeneros(response.data);
        }

        carregarDados();

    }, []);

    async function excluir(id) {
        await api.get('/genero/excluir', {
            params: {'id': id}
        });
        setGeneros(generos.filter(genero => genero.id !== id));
    }

    return (
        <div className="container container_alinhamento">

            <div className="modal fade" id="modalNovo" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Adicionar Novo Gênero</h5>
                            <button type="button" className="close" data-dismiss="modal"
                                    aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <FormGeneroNovo/>
                        </div>
                    </div>
                </div>
            </div>

            <button className='btn btn-light btn_alinhamento' data-toggle="modal"
                    data-target="#modalNovo">Adicionar Novo</button>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col" width="900px">Nome</th>
                    <th scope="col">Ações</th>
                </tr>
                </thead>
                <tbody>
                {generos.map((genero) => {
                    return <tr key={genero.id}>
                        <td  width="900px">{genero.nome}</td>
                        <td>
                            <button type="button" className="btnArt" name="excluir" id="excluir"
                                    onClick={() => excluir(genero.id)}>
                                <img className="icon" src={iconDelete} title="Excluir" width="25px"/>
                            </button>
                            <button type="button" className="btnArt" name="editar" id="editar" data-toggle="modal"
                                    data-target={'#modalEditar'+genero.id}>
                                <img src={iconEdit} title="Editar" width="25px"/>
                            </button>
                        </td>
                        <div className="modal fade" id={'modalEditar'+genero.id} tabIndex="-1" role="dialog"
                             aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Editar Gênero</h5>
                                        <button type="button" className="close" data-dismiss="modal"
                                                aria-label="Fechar">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <FormGenero propsGenero={genero}/>
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