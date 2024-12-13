import React from 'react';

import {http, createConfig} from 'wagmi'
import {mainnet} from 'wagmi/chains'
import {WagmiProvider} from 'wagmi'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import WalletConnector from "./components/WalletConnector";

const queryClient = new QueryClient()

// @ts-ignore
export const config = createConfig({
    chains: [mainnet],
    transports: {
        [mainnet.id]: http(),
    },
})


const Main = () => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <WalletConnector/>
            </QueryClientProvider>
        </WagmiProvider>
    
    );
};

export default Main;
