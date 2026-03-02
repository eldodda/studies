import { afterEach, beforeEach, describe } from "@jest/globals";
import request from "supertest";
import app from '../../app.js';
import { application } from "express";

let servidor;
beforeEach(() => {
    const porta = 3000;
    servidor = app.listen(porta);
});

afterEach(() => {
    servidor.close();
});

describe('Testando a rota login (POST)', () => {
    it('O login deve possuir um email e senha para se autenticar', async () => {
        const mockLogin = {
            email: 'raphael@teste.com.br'
        }

        await request(servidor)
            .post('/login')
            .send(mockLogin)
            .expect(500)
            .expect('"A senha de usuario é obrigatório."');
    });

    it('O login deve validar se o usuário está cadastrado', async () => {
        const mockLogin = {
            email: 'boydon@not.com',
            senha: 'abiu'
        }

        await request(servidor)
            .post('/login')
            .send(mockLogin)
            .expect(500)
            .expect('"Usuario não cadastrado."')
    });

    it('O login deve validar e-mail e senha incorreto', async () => {
        const mockLogin = {
            email: 'splinter@teste.com',
            senha: 'kawaii'
        }

        await request(servidor)
            .post('/login')
            .send(mockLogin)
            .expect(500)
            .expect('"Usuario ou senha invalido."')
    });

    it('O login deve validar se está sendo retornado um accessToken', async () => {
        const mockLogin = {
            email: 'splinter@teste.com',
            senha: 'kowabunga'
        }

        const resposta = await request(servidor)
            .post('/login')
            .set('Accept', 'application/json')
            .send(mockLogin)
            .expect(201)

        expect(resposta.body.message).toBe('Usuario conectado');
        expect(resposta.body).toHaveProperty('accessToken');
    });
});