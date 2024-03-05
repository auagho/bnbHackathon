<div align="center">
<br>

![photo_2024-03-06_08-43-40](https://github.com/auagho/bnbHackathon/assets/102646431/1df6ea93-4f84-47c7-a7b1-b2b1b4314796)

</div>

## Description

### Casper: Decentralized Real-time Weather Forecasting

Casper is a decentralized weather forecasting platform leveraging the power of community-sourced data and blockchain technology.

Data Providers:

- Use IoT devices to collect environmental data like temperature, humidity, and pressure.
- Sell data to the platform and earn LUX tokens as rewards.

Decentralized Network:

- Collected data is anonymously aggregated and analyzed on the blockchain.
- This eliminates central control and ensures data transparency.

Real-time Forecasts:

- Aggregated data enables the generation of highly accurate and localized weather forecasts.
- Users access real-time information personalized for their location.

Lucia empowers individuals to contribute to a more sustainable and community-driven weather forecasting system.

Benefits:

- Data providers: Earn rewards for contributing valuable data.
- Users: Access accurate and reliable weather information.
- Everyone: Contributes to a transparent and sustainable forecasting system.

## Process

1. Wallet Integration: Users integrate their wallets using web3.js, allowing them to manage their assets on the blockchain associated with their wallet address.

2. Environmental Data Measurement and Update: IoT devices measure temperature, humidity, and CO2 levels, sending real-time data via MQTT protocol to update and store on the DB server.

3. Serial Number Registration: Using Casper platform's contract, users register the serial numbers of IoT devices on the Binance Smart Chain (BSC) for identification.

4. On-chain Device Information: Registered device information is securely recorded and managed on the blockchain through smart contracts.

5. Environmental Data Evaluation and Token Exchange: Real-time environmental data fetched from the DB server is evaluated and converted into scores, then exchanged for LUX tokens via BSC contracts.

6. Trading Service Preparation: Future services will enable users to trade using the LUX tokens they possess.

This process enables users to manage real-time environmental data through their wallets and IoT devices, securely record it on the blockchain, and receive rewards accordingly.

## Built With

- [![nextjs]][nextjs-url]
- [![typescript]][typescript-url]
- [![chakraui]][chakraui-url]
- [![viem]][viem-url]
- [![wagmi]][wagmi-url]
- [![Rainbowkit]][rainbowkit-url]
- [![prettier]][prettier-url]
- [![ESLint]][eslint-url]

## Installation

- [node.js](https://nodejs.org/) installed (developped on LTS v21.5.0)
- [typescript](https://www.typescriptlang.org/) installed (developped on v5.3.3)
- [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) installed
- [MetaMask](https://metamask.io/) (or any web3 compatible wallet) installed in your browser

### Install all package dependancies by running

```bash
yarn install
# or
npm install
```

### Add your API keys in the .env file

The WalletConnect project ID is now required since the v2 update. ([WalletConnect](https://cloud.walletconnect.com/))

```js
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID = "WalletConnect v2 Project ID";
```

### To start

First, run the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br></br>

<!-- MARKDOWN LINKS & IMAGES -->

[nextjs]: https://img.shields.io/badge/Next.js_v14.1-000000?style=for-the-badge&logo=next.js&logoColor=FFFFFF
[nextjs-url]: https://nextjs.org/
[typescript]: https://img.shields.io/badge/typescript_v5.3.3-375BD2?style=for-the-badge&logo=typescript&logoColor=61DAFB
[typescript-url]: https://www.typescriptlang.org/
[chakraui]: https://img.shields.io/badge/ChakraUI-purple?style=for-the-badge&logo=ChakraUI&logoColor=319795
[chakraui-url]: https://chakra-ui.com/
[wagmi]: https://img.shields.io/badge/Wagmi-35324a?style=for-the-badge&logo=data:image/png;base64,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
[wagmi-url]: https://wagmi.sh/
[Rainbowkit]: https://img.shields.io/badge/Rainbowkit-006600?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMjAgMTIwIj48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMCAwaDEyMHYxMjBIMHoiLz48cGF0aCBmaWxsPSJ1cmwoI2IpIiBkPSJNMjAgMzhoNmMzMSAwIDU2IDI1IDU2IDU2djZoMTJjMyAwIDYtMyA2LTYgMC00MS0zMy03NC03NC03NC0zIDAtNiAzLTYgNnYxMloiLz48cGF0aCBmaWxsPSJ1cmwoI2MpIiBkPSJNODQgOTRoMTZjMCAzLTMgNi02IDZIODR2LTZaIi8+PHBhdGggZmlsbD0idXJsKCNkKSIgZD0iTTI2IDIwdjE2aC02VjI2YzAtMyAzLTYgNi02WiIvPjxwYXRoIGZpbGw9InVybCgjZSkiIGQ9Ik0yMCAzNmg2YzMyIDAgNTggMjYgNTggNTh2Nkg2NnYtNmMwLTIyLTE4LTQwLTQwLTQwaC02VjM2WiIvPjxwYXRoIGZpbGw9InVybCgjZikiIGQ9Ik02OCA5NGgxNnY2SDY4di02WiIvPjxwYXRoIGZpbGw9InVybCgjZykiIGQ9Ik0yMCA1MlYzNmg2djE2aC02WiIvPjxwYXRoIGZpbGw9InVybCgjaCkiIGQ9Ik0yMCA2MmMwIDMgMyA2IDYgNiAxNCAwIDI2IDEyIDI2IDI2IDAgMyAzIDYgNiA2aDEwdi02YzAtMjMtMTktNDItNDItNDJoLTZ2MTBaIi8+PHBhdGggZmlsbD0idXJsKCNpKSIgZD0iTTUyIDk0aDE2djZINThjLTMgMC02LTMtNi02WiIvPjxwYXRoIGZpbGw9InVybCgjaikiIGQ9Ik0yNiA2OGMtMyAwLTYtMy02LTZWNTJoNnYxNloiLz48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImIiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIC03NCA3NCAwIDI2IDk0KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iLjgiIHN0b3AtY29sb3I9IiNGRjQwMDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NzU0QzkiLz48L3JhZGlhbEdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0iZSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAgLTU4IDU4IDAgMjYgOTQpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuNyIgc3RvcC1jb2xvcj0iI0ZGRjcwMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTkwMSIvPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJoIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCAtNDIgNDIgMCAyNiA5NCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9Ii42IiBzdG9wLWNvbG9yPSIjMEFGIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDFEQTQwIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9ImkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxNyAwIDAgNDUuMzMzMyA1MSA5NykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjMEFGIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDFEQTQwIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9ImoiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIC0xNyAzMjIuMzcgMCAyMyA2OSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjMEFGIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDFEQTQwIi8+PC9yYWRpYWxHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSI2MCIgeDI9IjYwIiB5MT0iMCIgeTI9IjEyMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMxNzQyOTkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDFFNTkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjgzIiB4Mj0iMTAwIiB5MT0iOTciIHkyPSI5NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRjQwMDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NzU0QzkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjIzIiB4Mj0iMjMiIHkxPSIyMCIgeTI9IjM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzg3NTRDOSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNDAwMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJmIiB4MT0iNjgiIHgyPSI4NCIgeTE9Ijk3IiB5Mj0iOTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGNzAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIyMyIgeDI9IjIzIiB5MT0iNTIiIHkyPSIzNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkY3MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk5MDEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=&logoColor=4FC08D
[rainbowkit-url]: https://github.com/rainbow-me/rainbowkit#readme
[viem]: https://img.shields.io/badge/Viem-ffc517?style=for-the-badge&logo=data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAeAB4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+M39iD9iH4gft8fFuz+Bvwm+JvwI8D/FDXbvTNN8D+GfjZ8Q5vh3L8R9a1RdRaLQPA14dA1iw1bXol07B0i5ubC9vZr7TrTSItSvLr7On2t+33/wQn/a9/wCCZ/w/0Xx/+1p8Rv2XfBY8Xx+ID8PfBmlfFzVde8e/Em48KPoC+JbPwV4ft/BESajPoUfijQp9Tlvb7TbG0j1K0WW8E1zbxS/kJ4H8a+Kvht418IfEXwLrd94Z8beAfFGgeNPB3iPTJPJ1Lw/4p8Laraa54f1vT5SGEV7pWrWNpfWshVgk8EbEEDFf6VX/AAVe8P8Ahf8A4Lwf8G73w6/bq+FujWVz8bPgb4ST9ottB0dDPe6D4j+H9ld+EP2tfhXCC0+oJplpY6Z4k8WaHavANQ8S/wDCC+ArqGJINWhdgD+FX9ir/gmB8WP28fDXjjXvg58df2T/AA5qXwx8B+M/it8R/Bnxc+MV38OvFvgf4V+AbqwtfFPxJ8Qwaj4QudDt/BulHU9PuLzV4NduRZWt5BPqEVmr18F/EbwbD8PvG3iLwZb+MvBXxCh8P3wsk8Z/DnVL/W/BOv8A+jwzteeHdV1PSdDvr6xVpjbmefSrMtcQTCNHiCSyfqP4Dvj+yH/wSb+JfjyNzp3xm/4KgfEOT4E+CplJh1TSP2M/2a/EGi+L/jdrlncwYnt9N+Mn7QLfDv4cFJnWHVtO+Dfj/TgrwpdpJ+QdABX9wH/Bmv8At+2PhX4t/Gz/AIJo/FLUbW78D/tA6Vq/xd+C+k62YrjS3+Jfhfw+lh8VPBcVjc+ZDdf8LA+F+nW3iKW1ljFmsPwu1KNle41krL/D/XX+AvH/AI2+Fvi/QviB8OPFWveCPG/hi7a/8PeKvDOpXWj67o148E1rJcafqNnJFcW0ktrcXFtL5bgS2880EgaKR1YA/QX/AIK2/HP4U/F79sjxh4J/ZvtI9J/ZM/Zb0q0/ZZ/ZY0W2vpNSsk+E3wp1TWYrvxbBqEjF9Sl+K3xH1fx78W7rU5UiubyXxz/pMavEFX8y6KKAP//Z
[viem-url]: https://viem.sh/
[prettier]: https://img.shields.io/badge/Prettier-360D3A?style=for-the-badge&logo=Prettier&logoColor=61DAFB
[prettier-url]: https://prettier.io/
[eslint]: https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=61DAFB
[eslint-url]: https://eslint.org/
