import { useState } from "react";
import "./Admin.css";
import { CheckCircle, XCircle, Mail, Lock } from "lucide-react";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const emailsPermitidos = [
    
    "Gabriel@empresa.com.br",
    "Leonardo@empresa.com.br",
    "Cleber@empresa.com.br",
    "Luighi@empresa.com.br"
  ];
  
   const emailValido = emailsPermitidos.includes(email);
  
   const senhaPermitida = "12345678"

   const senhaValida = senhaPermitida.includes(senha);

   return (
    <div className="container">
      <div className="card">
        <div className="icon-area">
          <Lock size={80} color="#facc15" strokeWidth={1.5} />
        </div>

        <h1>Acesso Administrativo</h1>
        <p className="sub">Entre com suas credenciais de administrador</p>
        <p className="restrito">● ÁREA RESTRITA</p>

        <label>Email do Administrador</label>
        <div className="input-group">
          <Mail size={18} className="icon" />
          <input
            type="email"
            placeholder="Digite"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email.length > 0 &&
            (emailValido ? (
              <CheckCircle size={20} className="valid" />
            ) : (
              <XCircle size={20} className="invalid" />
            ))}
        </div>

        <label>Senha do Administrador</label>
        <div className="input-group">
          <Lock size={18} className="icon" />
          <input
            type="password"
            placeholder="********"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {senha.length > 0 &&
            (senhaValida ? (
              <CheckCircle size={20} className="valid" />
            ) : (
              <XCircle size={20} className="invalid" />
            ))}
        </div>

        <div className="options">
          <div className="checkbox">
            <input type="checkbox" />
            <span>Manter sessão ativa</span>
          </div>
          <a href="#" className="recuperar">
            Recuperar acesso?
          </a>
        </div>

        <button className="btn">
          Acessar Painel Administrativo
        </button>
      </div>
    </div>
  );
}
