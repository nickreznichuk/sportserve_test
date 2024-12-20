import React, { useCallback, useEffect } from "react";
import Modal from "react-modal";
import ReactModal from "react-modal";
import { ComponentType } from "react";
import styles from "./index.module.scss";
import { IoClose } from "react-icons/io5";

const ModalSafeForReact18 = Modal as unknown as ComponentType<
  ReactModal["props"]
>;

type TModalComponent = {
  title?: string;
  isOpen: boolean;
  handleCloseModal: () => void;
  children?: JSX.Element;
};
const ModalComponent = ({
  isOpen,
  children,
  handleCloseModal,
  title,
}: TModalComponent) => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    isOpen ? lockScroll() : unlockScroll();
  }, [isOpen]);

  return (
    <ModalSafeForReact18
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className={styles.modal}
    >
      {title && <div className={styles.modal__title}>{title}</div>}
      <button className={styles.closeButton} onClick={handleCloseModal}>
        <IoClose />
      </button>
      {children}
    </ModalSafeForReact18>
  );
};

export default ModalComponent;
