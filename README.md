## Teste técnico - Ponto GO

Objetivos:
- Criar uma nova empresa através da API (Register New Company)
- Criar um novo colaborador para a respectiva empresa através da API (Register New Employees)
- Bater um ponto no horário de 15:00 no dia 26/10/2022 para o respectivo colaborador (Add Point)
- Pegar os pontos batidos do dia 26/10/2022 (Get Points of a Day)

### Tecnologias utilizadas: <br>
Framework escolhido: `NextJs` <br>
Tipagens: `typescript` <br>
Para estilizações: `styled-components` <br>
Para consumo de dados: `axios` <br>
Formatação de dados: `date-fns` <br>
Barra de progresso de dados: `nextjs-progressbar` <br>
Biblioteca de ícones: `phosphor-react` <br>
Formulários: `react-hook-form` <br>
Toasts: `react-toastify` <br>

### Resumo:
Para melhorar a experiência do usuário, foi escolhido trabalhar com um fluxo de rotas dinâmicas fornecidas pelo Next `useRouter`, na qual a aplicação é divididas por etapas, em que o usuário é redirecionado automaticamente para a próxima página após o cadastro.

Inicialmente, foi necessário consumir uma API da empresa, decidi trabalhar com o `axios`, tomando o cuidado de evitar repetições, todos os parâmetros que se repetiam foi alocado em um só local (em services). Além disso, é preciso ressaltar o cuidado em proteger a integridade do caminho URL da API, então foi armazenado no na pasta `.env.local`.

Além de todas estilizações com `Styled-Components` e todo o cuidado com a responsividade.

## 1ª Tela - Register New Company
![image](https://user-images.githubusercontent.com/102261788/199632508-b84d49ce-495f-47b6-ab9d-4b15009cc7f0.png)
![image](https://user-images.githubusercontent.com/102261788/199634625-9a1991e9-2cdb-4ca8-a41e-0ed275e69425.png)


Nessa página foi utilizado `react-hook-form` para trabalhar com os dados recebidos como formulário, tais como: validações de segurança, performance da página para evitar carregamentos desnecessários.

E foi consumido dados da API, utilizando `axios` para enviar (POST) os dados recebidos pelo formulário.

![image](https://user-images.githubusercontent.com/102261788/199632737-39b3cb5e-c84a-4455-a295-9fc9997d7f2b.png)

## 2ª Tela - Register New Employees
![image](https://user-images.githubusercontent.com/102261788/199633048-be8a2779-8548-46fe-90bd-fb53b1667c83.png)

Nessa tela, é necessário cadastrar um funcionário ou colaborador na devida empresa cadastrada, então para isso é enviado através das rotas, os dados recebidos pelo formulário anterior. Para esses formulários, foi preciso estar bem atento aos dados que o banco de dados aceita, dito isso, foi necessário passar as datas para `ISOString` e simples máscaras de inputs para evitar erros no cadastro.

## 3ª Tela - Add Point
![image](https://user-images.githubusercontent.com/102261788/199633643-3df9ca8b-441a-476f-92ee-09448d90a28c.png)
Nessa tela é exibido as informações do usuário e da empresa cadastrada e seu devido ID, utilizando `useRouter` e `axios.get` `axios.post` para enviar informações para a próxima página, que no caso seria a informação de dados do ponto do dia 26-10-2022 às 15:00 como solicitado no teste.

## 4ª Tela - Get Points of a Day
![image](https://user-images.githubusercontent.com/102261788/199634156-5454fa66-2e7c-4be6-a319-94e5a3de542f.png)

Nessa ultima tela, é exibido feito um filtro pela API, para exibir os pontos batidos no dia 26-10-2022, foi necessário tratar os dados para mostrar ao usuário final, para isso foi utilizado `date-fns` para tratar os dados de data e hora recebidos.


Além de tudo isso, tive o cuidado com a experiência do usuário, então foi adicionado `toasts` e `nextjs-progressbar` para informar o processo e progresso das solicitações da página.

No mais é isso, desde já agradeço a oportunidade e espero fazer a diferença na equipe de vocês!
