import * as React from 'react'
import {useAccount, useConnect, useDisconnect} from 'wagmi'
import WalletOption from "./WalletOption";
import styles from './index.module.scss';
import Button from "../Button";

const WalletOptions = () => {
    const {connectors, connect, status} = useConnect()
    const {isConnected} = useAccount()
    const {disconnect} = useDisconnect()
    const allowedConnectors = ['MetaMask', "WalletConnect", 'Trust Wallet']
    return (
        <div className={styles.walletOptions}>
            {connectors.filter(con => allowedConnectors.includes(con.name)).map((connector) => (
                <WalletOption
                    key={connector.uid}
                    connector={connector}
                    status={status}
                    onClick={() => connect({connector})}
                />
            ))}
            {isConnected && <Button className={styles.disconnectButton} onClick={() => disconnect()} text={'Disconnect wallet'}/>}
        </div>
    )
}

export default WalletOptions
