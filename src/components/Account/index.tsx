import { useAccount } from "wagmi";
import Button from "../Button";
import React, { useState } from "react";
import WalletOptions from "../WalletOptions";
import ModalComponent from "../ModalComponent";
import styles from "./index.module.scss";
import classNames from "classnames";
import Footer from "../Footer";

const Account = () => {
  const { address, isConnected } = useAccount();

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Button
        onClick={() => handleShowModal()}
        className={classNames(
          styles.button,
          isConnected ? styles.button__active : "",
        )}
        text={
          isConnected && address
            ? `${address.slice(0, 6)}...${address.slice(
                address.length - 6,
                address.length,
              )}`
            : "Connect Wallet"
        }
      />
      <ModalComponent
        isOpen={showModal}
        handleCloseModal={handleCloseModal}
        title="Connect Wallet"
      >
        <div className={styles.walletModal}>
          <div>
            <div className={styles.walletModal__title}>
              Connect your wallet to login.
            </div>
            <WalletOptions />
          </div>

          <div className={styles.walletModal__mobileFooter}>
            <Footer />
          </div>
        </div>
      </ModalComponent>
    </div>
  );
};

export default Account;
