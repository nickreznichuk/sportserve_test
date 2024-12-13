import {http, createConfig} from 'wagmi'
import {base, mainnet} from 'wagmi/chains'
import {metaMask, walletConnect} from 'wagmi/connectors'

const projectId = 'e33504f2d670d3f77bab70b972d9fbf9'
// @ts-ignore
export const config = createConfig({
    chains: [mainnet, base],
    autoConnect: true,
    connectors: [
        walletConnect({projectId}),
        metaMask(),
    ],
    transports: {
        [mainnet.id]: http(),
        [base.id]: http(),
    },
})
