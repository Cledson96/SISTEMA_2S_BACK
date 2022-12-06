import { cadastroSchema } from "../models/cadastro.models.js";
import bcrypt from "bcrypt";
import { usuarios } from "../database/db.js"

export async function cadastro(req, res) {

    const { name, email, password } = req.body;

    const validation = cadastroSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        res.status(422).send(validation.error.message);
        return
    }
    const passwordHash = bcrypt.hashSync(password, 10);
    const usuario = await usuarios.find({}).toArray();

    const verificador = usuario.find(verifica => verifica.email === req.body.email)
    const verificadorcpf = usuario.find(verifica => verifica.cpf === req.body.cpf)

    if (verificador) {
        res.status(409).send("Já existe um usuario com este email!")
        return
    }
    if(verificadorcpf){
        res.status(409).send("Já existe um usuario com este CPF!")
        return
    }
    
    try {
       const resp = await usuarios.insertOne({ name, email, senha: passwordHash });
        res.status(201).send("usuario cadastrado com sucesso!");
    } catch (err) {
        res.status(500).send(err);
    }

}