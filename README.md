# reddit-posts

# Passos para execução

Primeiro passo, instale as dependências do projeto
```
yarn install 
```

Segundo passo, instale os Pods do projeto, caso use macOS
```
cd ios && pod install && cd ..
```

Para executar o projeto, execute o comando:
```
yarn start
```

Este projeto utiliza realiza um fetch da API do Reddit consultando as postagens e as exibindo em categorias separadas e para isso, utilizei as seguintes tecnologias:

- React Native CLI
- Axios
- MobX
- Styled Components
- Typescript
