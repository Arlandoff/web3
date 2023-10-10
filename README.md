Create a portfolio app project with thirdweb EVM SDK and interact with your contracts through a frontend application.

##Smart Contract
Smart contracts used in this project will consist of thirdweb pre-built contracts and smart contracts built in the smart contract section 

ERC20 https://thirdweb.com/thirdweb.eth/TokenERC20
ERC721 https://thirdweb.com/thirdweb.eth/DropERC721
ERC1155 https://thirdweb.com/thirdweb.eth/DropERC1155
Tip Jar - Smart contract  in contracts folder.
Profile Status - Smart contract in contracts folder.


## Getting Started

Create a project using this example:

```bash
npx thirdweb create --template next-typescript-starter
```

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

On `pages/_app.tsx`, you'll find our `ThirdwebProvider` wrapping your app, this is necessary for our [hooks](https://portal.thirdweb.com/react) and
[UI Components](https://portal.thirdweb.com/ui-components) to work.

## Environment Variables

To run this project, you will need to add environment variables. Check the `.env.example` file for all the environment variables required and add it to `.env.local` file or set them up on your hosting provider.

## Deploy to IPFS

Deploy a copy of your application to IPFS using the following command:

```bash
yarn deploy
```

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/typescript) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Templates](https://thirdweb.com/templates