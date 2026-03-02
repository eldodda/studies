import { describe, expect } from "@jest/globals";
import AuthService from "../../services/authService";
import bcryptjs from "bcryptjs";
import Usuario from "../../models/usuario";
const authService = new AuthService();

describe('Testando a authService.cadastrarUsuario', () => {
    it('O usuário deve possuir um nome, email e senha', async () => {
        //  ARRANGE - Prepara o objeto de testes, o "dublê":
        const mockUser = {
            nome: 'Raphael',
            email: 'raph@teste.com'
        }

        //  ACT - O método, a função a ser testada:
        const usuarioSalvo = authService.cadastrarUsuario(mockUser);

        //  ASSERT - O comportamento esperado pelo teste:
        await expect(usuarioSalvo).rejects.toThrowError('A senha de usuário é obrigatória!');
    });

    it('A senha do usuário precisa ser criptografada quando for salva no banco de dados', async () => {
        const mockUser = {
            nome: 'Splinter',
            email: 'splinter@teste.com',
            senha: 'kowabunga'
        }

        const savedUser = await authService.cadastrarUsuario(mockUser);
        const senhasIguais = await bcryptjs.compare('kowabunga', savedUser.content.senha);

        expect(senhasIguais).toStrictEqual(true);

        await Usuario.excluir(savedUser.id);
    });

    it('Não pode ser cadastrado um usuário com e-mail duplicado', async () => {
        const mockUser = {
            nome: 'John Doe',
            email: 'teste@gmail.com',
            senha: 'duke'
        }

        const savedUser = await authService.cadastrarUsuario(mockUser);

        await expect(savedUser).rejects.toThrowError('Email já cadastrado!')
        await Usuario.excluir(savedUser.id);
    });

    it('Ao cadastrar um usuário deve ser retornada uma mensagem informando que o usuário foi cadastrado', async () => {
        const data = {
            nome: 'John Doe',
            email: 'johndont@example.com',
            senha: 'senha123',
        };

        const resultado = await authService.cadastrarUsuario(data);

        expect(resultado.message).toEqual('usuario criado');

        await Usuario.excluir(resultado.content.id);
    });

    it('Ao cadastrar um usuário, validar o retorno das informações do usuário', async () => {
        const data = {
            nome: 'John Doe',
            email: 'johndont@example.com',
            senha: 'senha123',
        };

        const resultado = await authService.cadastrarUsuario(data);

        expect(resultado.content).toMatchObject(data);

        await Usuario.excluir(resultado.content.id);
    });
});