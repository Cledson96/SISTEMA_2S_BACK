import dotenv from "dotenv";
import { MongoClient} from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
  await mongoClient.connect();
  console.log("MongoDB conectado!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("Sistema_2S");

export const usuarios = db.collection("usuarios");
export const motoboys = db.collection("motoboys");
export const clientes = db.collection("clientes");
export const sessao = db.collection("sessao");
export const pedidos = db.collection("pedidos");

