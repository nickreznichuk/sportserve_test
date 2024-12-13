import React from "react";
import WalletOptions from "../WalletOptions";
import Account from "../Account";
import {useAccount} from "wagmi";

const WalletConnector = () => {
    const { isConnected } = useAccount()
    if (isConnected) return <Account />
    return (
        <div>
            <WalletOptions />
        </div>
    );
};

export default WalletConnector;
