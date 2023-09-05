import express from "express";
import { config } from "dotenv";
import http from "http";
import bodyParse from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import logger from "morgan";

config();

const app = express();

// O módulo cors significa "Cross-Origin Resource Sharing" e é usado para lidar com políticas de segurança de compartilhamento de recursos entre diferentes origens (domínios) em solicitações AJAX ou de API. Ele adiciona cabeçalhos HTTP que permitem ou restringem o acesso a recursos em diferentes origens
app.use(
  cors({
    credentials: true,
  })
);
//O módulo compression é usado para comprimir (gzip) as respostas HTTP antes de enviá-las para o cliente. Isso ajuda a economizar largura de banda e melhora o desempenho do aplicativo, especialmente para recursos estáticos (como arquivos CSS, JavaScript e imagens).
app.use(compression());
// O módulo cookie-parser é usado para analisar os cookies que são enviados pelo cliente em uma solicitação HTTP. Ele converte os cookies em um objeto JavaScript para que você possa acessá-los facilmente em seu aplicativo.
app.use(cookieParser());
// O módulo body-parser é usado para analisar o corpo de solicitação JSON em uma solicitação HTTP. Ele é frequentemente usado para processar dados JSON enviados pelo cliente, como dados de formulário em aplicativos RESTful.
app.use(bodyParse.json());
// O módulo morgan (às vezes referido como logger) é usado para registrar informações de solicitação HTTP no console do servidor. É útil para depuração e monitoramento de solicitações HTTP.
app.use(logger("dev"));
app.get('/', (req, res)=>{
    res.send('HELLO')
})

export default app;
