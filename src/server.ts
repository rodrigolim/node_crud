import "reflect-metadata"
import 'dotenv/config'
import app from "./app"
import  AppDataSource  from "./db_config";

async function main(){
  await AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  app.listen(process.env.PORT, () => {
    console.log(`Exemplo de app rodando em http://localhost:${process.env.PORT}`)
  })  
}

main();