import React from 'react';
import {WagmiProvider} from 'wagmi'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {BrowserRouter} from 'react-router-dom'
import {config} from "./wagmi_config";
import MainSection from './components/MainSection';
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient()


const Main = () => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <div className="Main">
                        <div>
                            <Header/>
                            <MainSection/>
                        </div>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </QueryClientProvider>
        </WagmiProvider>
    
    );
};

export default Main;
