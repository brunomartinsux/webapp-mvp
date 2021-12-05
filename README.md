# Firetest APP [ MVP ]

### endpoints
Nossas API's estão disponíveis em `./src/pages/api/`. Seguindo o system file routing do NextJs, cada arquivo é transformado em um endpoint. O disponível no momento entrega 80 questões presentes em nosso banco. Segue agora os endpoints necessários para o funcionamento do nosos APP.

* **criação de conta:** criando conta via firebase, redirecionando para o login.
* **autenticação:** autenticando conta via firebase, resgatando o uuid do usuário que será posto no header de todas as próximas requisições como um token.
* **criar simulado:** criar um simulado passando o token do usuário no header. O endpoint retornara o id do simulado criado.
* **responder questão do simulado:** responder questão pelo id da questão, id do simulado e token do usuário no header.
* **encerrar simulado:** enviar o id do simulado e o token do usuário no header
* **listar histórico:** pelo token do usuário, resgatar todo o histórico do usuário, que é salvo quando se encerra o simulado.
* **visulizar um item do histórico pelo id:** cada item do histórico tem um id próprio, passando este id + o token do usuário no header, você receberá as informações (que são as mesmas da tela de feedback).