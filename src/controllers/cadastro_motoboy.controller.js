import { cadastro_motoboySchema } from "../models/cadastro_motoboy.models.js";
import { motoboys } from "../database/db.js"

export async function cadastro_motoboy(req, res) {

    const { name,celular_principal,telefone_recado, email, endereco,cnpj,cpf } = req.body;

    const validation = cadastro_motoboySchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        res.status(422).send(validation.error.message);
        return
    }
    let mei;
    if(!cnpj){
       mei="não foi declarado"
    }else{
        mei = cnpj
    }
    
    const motoboy = await motoboys.find({}).toArray();

    const verificador = motoboy.find(verifica => verifica.cpf === req.body.cpf)

    if (verificador) {
        res.status(409).send("Já existe um colaborador com este email!")
        return
    }
    
    try {
       const resp = await motoboys.insertOne({ name, email, celular_principal,telefone_recado,endereco ,cpf,mei});
        res.status(201).send("colaborador cadastrado com sucesso!");
    } catch (err) {
        res.status(500).send(err);
    }

}