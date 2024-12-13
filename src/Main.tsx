import React from 'react';
import {WagmiProvider} from 'wagmi'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import WalletConnector from "./components/WalletConnector";
import {config} from "./wagmi_config";

const queryClient = new QueryClient()



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
