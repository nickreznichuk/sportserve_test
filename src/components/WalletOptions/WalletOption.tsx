import {Connector} from "wagmi";
import {useEffect, useState} from "react";
import * as React from "react";

type TWalletOption = { connector: Connector, onClick: () => void, status: string }
const WalletOption = ({connector, onClick}: TWalletOption) => {
    const [ready, setReady] = useState(false)
    
    useEffect(() => {
        (async () => {
            const provider = await connector.getProvider()
            setReady(!!provider)
        })()
    }, [connector])
    
    return (
        <button disabled={!ready} onClick={onClick}>
            {connector.name}
        </button>
    )
}

export default WalletOption
