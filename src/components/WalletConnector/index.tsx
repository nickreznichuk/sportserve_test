import React from "react";
import {useAccount, useConnect, useDisconnect} from "wagmi";
// import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const WalletConnector = () => {
    const {address, isConnected} = useAccount();
    const {connect, connectors, error} = useConnect();
    const {disconnect} = useDisconnect();
    console.log(connectors)
    return (
        <div>
            {isConnected ? (
                <div>
                    <p>Connected to: {address}</p>
                    <button onClick={() => disconnect()}>Disconnect</button>
                </div>
            ) : (
                <div>
                    {connectors.map((connector) => (
                        <button
                            key={connector.id}
                            onClick={() => connect({connector})}
                            disabled={!connector.ready}
                        >
                            Connect with {connector.name}
                        </button>
                    ))}
                </div>
            )}
            {error && <p style={{color: 'red'}}>Connection error: {error.message}</p>}
        </div>
    );
};

export default WalletConnector;
