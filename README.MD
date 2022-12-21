# Testes unitários e E2E no React Native | Meet up 20/12/2022 - [ada.tech](https://ada.tech)

## Ferramentas utilizadas

- JEST com testing library
- Detox

## Estrutura de arquivos resumida

```
├── android - contém o código nativo do android
├── e2e - contém o código usado no ending to ending test com Detox
├── ios - contém o código nativo do iOS
├── src - contém o código da aplicação. Um simples todo list
│   │   **/*.test.* - arquivos que contem `test` no nome, são os testes usados pelo JEST
├── .detoxrc.js - arquivo de configuração do Detox
```

## Rodando o projeto

### React native

Para configurar o ambiente siga as instruções aqui do `React Native CLI Quickstart` em https://reactnative.dev/docs/environment-setup.

Para rodar o app

```sh
yarn install
```

Android

```sh
npx react-native run-android
```

para o iOS

```sh
cd ios && pod install
```

```sh
npx react-native run-ios --device "iPhone 14 Pro Max" # troque para o device que estiver instalado
```

### Testes

Para rodar os testes unitários (jest)

```sh
yarn test
```

Para rodar os testes em modo watch

```sh
yarn test --watch
```

Para rodar o coverage (esse comando vai criar uma pasta coverage com um html)

```sh
yarn test:coverage
```

Para rodar o detox, siga a instalação aqui https://wix.github.io/Detox/docs/introduction/getting-started/

Configure o arquivo `.detoxrc.js`

- Para o android troque na linha 54 para o emulador que está configurado no seu ambiente
- Para o ios troque na linha 41 para o simulador que está configurado no seu ambiente

### detox no modo release

Para o android faça o build do app

```sh
detox build --configuration android.emu.release
```

Agora você pode rodar os teses

```sh
detox test --configuration android.emu.release
```

Para o iOS faça o build do app

```sh
detox build --configuration ios.sim.release
```

Agora você pode rodar os teses

```sh
detox test --configuration ios.sim.release
```

### detox no modo debug

Para o android faça o build do app

```sh
detox build --configuration android.emu.debug
```

Agora você pode rodar os teses

```sh
detox test --configuration android.emu.debug
```

Para o iOS faça o build do app

```sh
detox build --configuration ios.sim.debug
```

Agora você pode rodar os teses

```sh
detox test --configuration ios.sim.debug
```
