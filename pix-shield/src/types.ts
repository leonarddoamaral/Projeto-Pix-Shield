export type User = {
    id_usuario: number;
    nome_usuario: string;
    email_usuario: string;
    telefone_usuario: string;
    senha_usuario: string;
}

export type LoginResponse = {
    mensagem : string
}

export type Denuncia = {
    id: number;
    conteudo_denuncia:string;
    descricao_denuncia:string;
    data_denuncia:Date;
    id_usuario_fk:number;
    id_chave_fk:number;
    nome_usuario:string;
    valor_chave:string;
}