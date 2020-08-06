- vamos desenvolver a estrutura web como mobile first
- vamos utilizar o SPA (página única que é atulizada via AJAX)
- 

<h1>1º dia: ReactJs e estrutura web</h1>

- Apresentar o projeto
- Ambiente de desenvolvimento
- Conceitos de ReactJS
  - Interfaces
  - Construção de SPA's
  - React / ReactJS (React DOM) / React Native / ReactTV / ReactVR (realidade virtual)

- Criando o projeto:
  * na pasta nlw/aulas crie o projeto (com typescript): "yarn create react-app web --template typescript" OU "npx create-react-app web --template typescript"
  
  * acesse a pasta "web" criada e abra-a no editor

  * com "yarn start" a aplicação já é levantada e pode ser acesseda via browser

- Limpando a estrutura
  * exclua todos os arquivos criados DEIXANDO apenas:
    - /public/, /src/, .gitignore, package.json e tsconfig.json 

  * o "react-scripts" contém 2 ferramentas: web-pack e babel

  * /public/ => contem o index.html {
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <title>Proffy</title>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
    </body>
    </html>
  }
  
  * /src/ => contem os arquivos {
      - index.tsx {
        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './App';

        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            document.getElementById('root')
        );
      }

      - App.tsx {
        import React from 'react';

        /*
          - isto é um componente, ou seja, uma função que retorna o HTLM
          - nome do componente deve iniciar com maiúscula
          - jsx => html dentro do javascript
          - sempre que for usar o jsx (JavaScript + XML) é obrigatorio a importação do React
        */
        function App() {
          return (
            <div className="App">
              <h1>Hello World</h1>
            </div>
          );
        }

        export default App;
      }
  }

# Lista de afazeres (continuação....):
- Explicando conceitos
  - index.html e div#root
  - JSX (HTML dentro do JS)
  - Componentes (trechos de codigos isolados para serem reutilizados)
  - Propriedades
  - Estado
- Criando estilos globais
- Criando estrutura da landing page
- Estilizando landing page
- Configurando navegação do app
- Estruturando listagem de professores
- Estilizando listagem de professores
- Criando componentes comuns
- Estruturando página de cadastro
- Estilizando página de cadastro
- Preparando cadastro de horários


  * para trabalhar com a DOM vamos instalar o "router-dom" (depois de criar as pages e antes de criar o "routes.tsx"): "yarn add react-router-dom" E "yarn add @types/react-router-dom -D"

  * 





/*
parei com 1h30min
*/
