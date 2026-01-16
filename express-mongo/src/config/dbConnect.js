import mongoose from "mongoose";


//  Funções que interagem com o banco de dados devem ser sempre assíncronas, para não interromper o fluxo do código em caso de algum imprevisto no servidor.
async function conectaNaDatabase(){
    //  Abaixo incluímos a string de caminho, fornecida pelo MongoDB na criação do cluster.
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.unjj8aq.mongodb.net/Livraria?appName=Cluster0");

    return mongoose.connection;
};

export default conectaNaDatabase;
