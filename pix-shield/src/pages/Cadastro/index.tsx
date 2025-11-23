import { useState } from 'react'
import type { FormEvent } from 'react'
import { UserAPI } from '../../api/users'
import type { User } from '../../types' 
import Alerta from '../../components/alert/alert'
import './styles.css'
import { Link } from 'react-router-dom'

function Cadastro() {
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    
    // Estados para os campos do formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [termosAceitos, setTermosAceitos] = useState(false);
    const [erro, setErro] = useState<string | null>(null);
    const [sucesso, setSucesso] = useState(false);

    const toggleSenha = () => {
        setSenhaVisivel(!senhaVisivel);
    }
    const inputType = senhaVisivel ? "text" : "password";
    const iconClass = senhaVisivel ? "bi bi-eye-slash" : "bi bi-eye";

    // Função de submissão do formulário
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault(); 
        setErro(null); 
        setSucesso(false);
        
        if (!termosAceitos) {
            setErro("Você deve aceitar os termos e a política de privacidade.");
            return;
        }

        // Este payload agora é tipado corretamente como Omit<User, "id_usuario"> 
        // e é aceito pela UserAPI.create corrigida.
        const payload: Omit<User, "id_usuario"> = {
            nome_usuario: nome,
            email_usuario: email,
            telefone_usuario: telefone,
            senha_usuario: senha,
        };

        try {
            // Chamada à API para criar um novo usuário
            const novoUsuario = await UserAPI.create(payload);
            console.log('Usuário cadastrado com sucesso:', novoUsuario);
            setSucesso(true);
            // Opcional: Limpar o formulário
            setNome('');
            setEmail('');
            setTelefone('');
            setSenha('');
            setTermosAceitos(false);
            
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            // Tratamento de erro mais robusto
            const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao cadastrar.";
            setErro(`Erro ao cadastrar: ${errorMessage.includes('HTTP 500') ? 'Erro interno do servidor.' : errorMessage}`); 
        }
    };


    return (
        <>
            <main className="cadastroContainer">
                <div className='alerta'>
                    {sucesso && <Alerta severity='success' messageAlert='Cadastro realizado com sucesso! Você pode fazer login.' /> }
                    {erro && <Alerta severity='error' messageAlert={erro} />}
                </div>
                <section className="cardCadastro">
                    <div className="infoCard">
                        
                        <h2>Criar Conta</h2>
                        <p>Preencha os dados para se cadastrar</p>
                    </div>

                    <form className="formCadastro" onSubmit={handleSubmit}>
                        <div className="inputCadastro" >
                            <label className='labelInputs'>Nome Completo</label>
                            <input 
                                type="text" 
                                required 
                                placeholder="Nome Completo" 
                                className='inputs' 
                                value={nome} 
                                onChange={(e) => setNome(e.target.value)} 
                            />
                            <label className='labelInputs'>Email</label>
                            <input 
                                type="email" 
                                required 
                                placeholder="seu@email.com" 
                                className='inputs' 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <label className='labelInputs'>Telefone</label>
                            <input 
                                type="tel" 
                                required 
                                placeholder="(**)*****-****" 
                                className='inputs'
                                value={telefone} 
                                onChange={(e) => setTelefone(e.target.value)}
                            />
                            <label className='labelInputs'>Senha</label>
                            <div className="passwordInput">
                                <input 
                                    type={inputType} 
                                    required 
                                    placeholder="Insira sua senha" 
                                    className='inputs'
                                    value={senha} 
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <i className={iconClass} onClick={toggleSenha}></i>
                            </div>
                        </div>

                        <div className="confirmarCadastro">
                            <div className="aceiteTermos">
                                <input 
                                    type="checkbox" 
                                    id="aceite" 
                                    name="termos" 
                                    checked={termosAceitos}
                                    onChange={(e) => setTermosAceitos(e.target.checked)}
                                    required
                                />
                            </div>
                            <label className="labelAceite" htmlFor="aceite">Concordo com os termos e a política de privacidade</label>
                            <div className="submitCadastro">
                                <button type="submit" className="btnEntrar">Cadastrar</button>
                            </div>                            
                        </div>
                        <div className="ajudaCadastro">
                                <Link to="/Login">Já tenho uma conta</ Link> 
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Cadastro