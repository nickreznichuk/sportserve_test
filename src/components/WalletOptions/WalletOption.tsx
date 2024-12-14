import {Connector, useAccount} from "wagmi";
import {useEffect, useState} from "react";
import * as React from "react";
import metamaskIcon from '../../assets/wallets/Metamask.svg'
import walletconnectIcon from '../../assets/wallets/WalletConnect.svg'
import trustIcon from '../../assets/wallets/TrustWallet.svg'
import styles from './index.module.scss';
import classNames from "classnames";

type TWalletOption = { connector: Connector, onClick: () => void, status: string }
const WalletOption = ({connector, onClick, status}: TWalletOption) => {
    const [ready, setReady] = useState(false)
    const { connector: connectedConnector } = useAccount();
    
    useEffect(() => {
        (async () => {
            const provider = await connector.getProvider()
            setReady(!!provider)
        })()
    }, [connector])
    
    const iconsForConnectors: {[key: string]: any} = {
        'MetaMask': metamaskIcon,
        "WalletConnect": walletconnectIcon,
        'Trust Wallet': trustIcon
    }
    return (
        <button disabled={!ready || status === 'pending'} onClick={onClick} className={classNames(styles.walletOption, connectedConnector?.name === connector.name && styles.walletOption__active)}>
            <span className={styles.walletOption__name}>
                {status === 'pending' ? 'Connecting...' : connector.name}
            </span>
            <span className={styles.walletOption__icon}>
                <img src={iconsForConnectors[connector.name]} alt={connector.name}/>
            </span>
        </button>
    )
}

export default WalletOption
