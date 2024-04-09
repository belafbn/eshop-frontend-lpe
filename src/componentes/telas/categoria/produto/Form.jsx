import { useContext } from "react";
import Alerta from "../../../comuns/Alerta";
import ProdutoContext from "./ProdutoContext";
import CampoSelect from "../../../comuns/CampoSelect";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta, listaCategorias } = useContext(ProdutoContext);

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()
    return (
        <div className="modal fade" id="modalEdicao" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edição de Produtos</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar} className="needs-validation" noValidate>

                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="mb-3">
                                <label for="txtCodigo" className="form-label">Código</label>
                                <input type="number" className="form-control" id="txtCodigo" readOnly name="codigo"
                                    value={objeto.codigo} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label for="txtNome" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="txtNome" placeholder="Insira o nome" required name="nome"
                                    value={objeto.nome} onChange={handleChange} />
                                <div className="valid-feedback">
                                    Nome OK!
                                </div>
                                <div className="invalid-feedback">
                                    Informe o nome!
                                </div>
                                <div className="mb-3">
                                    <label for="txtDescricao" className="form-label">Descrição</label>
                                    <input type="text" className="form-control" id="txtDescricao" placeholder="Insira a descrição" required name="descricao"
                                        value={objeto.descricao} onChange={handleChange} />
                                    <div className="valid-feedback">
                                        Nome OK!
                                    </div>
                                    <div className="invalid-feedback">
                                        Informe o nome!
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="txtEstoque" className="form-label">Estoque</label>
                                    <input type="number" className="form-control" id="txtEstoque" placeholder="Informe o estoque" readOnly name="estoque"
                                        value={objeto.estoque} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label for="txtDataCadastro" className="form-label">Data de Cadastro</label>
                                    <input type="text" className="form-control" id="txtDataCadastro" placeholder="Insira a data" required name="descricao"
                                        value={objeto.data} onChange={handleChange} />
                                    <div className="valid-feedback">
                                        Nome OK!
                                    </div>
                                    <div className="invalid-feedback">
                                        Informe o nome!
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <CampoSelect value={objeto.ativo}
                                        id="txtAtivo" name="ativo" label="Ativo"
                                        onchange={handleChange}
                                        msgvalido="OK certo" msginvalido="Informe se está ativo"
                                        requerido={true}>
                                        <option value={true}>Sim</option>
                                        <option value={false}>Não</option>
                                    </CampoSelect>
                                    <CampoSelect value={objeto.categoria}
                                        id="txtCategoria" name="categoria" label="Categoria"
                                        onchange={handleChange}
                                        msgvalido="OK certo" msginvalido="Informe a categoria"
                                        requerido={true}>
                                        {listaCategorias.map((cat) => (
                                            <option key={cat.codigo} value={cat.codigo}>
                                                {cat.nome}
                                            </option>
                                        ))}
                                    </CampoSelect>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success">Salvar <i className="bi bi-save"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Form;