import {http, createConfig} from 'wagmi'
import {base, mainnet} from 'wagmi/chains'
import {metaMask, walletConnect} from 'wagmi/connectors'

const projectId = process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID || ''
// @ts-ignore
export const config = createConfig({
    chains: [mainnet, base],
    autoConnect: true,
    connectors: [
        metaMask(),
        walletConnect({projectId}),
    ],
    transports: {
        [mainnet.id]: http(),
        [base.id]: http(),
    },
})
