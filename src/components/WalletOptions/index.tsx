import * as React from 'react'
import {useConnect} from 'wagmi'
import WalletOption from "./WalletOption";

const WalletOptions = () => {
    const {connectors, connect, error, status} = useConnect()
    return (
        <div>
            {connectors.map((connector) => (
                <WalletOption
                    key={connector.uid}
                    connector={connector}
                    status={status}
                    onClick={() => connect({connector})}
                />
            ))}
            {error && <p style={{color: 'red'}}>Connection error: {error.message}</p>}
        </div>
    )
}

export default WalletOptions
