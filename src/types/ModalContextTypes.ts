export type ModalProviderProps = {
  children: React.ReactNode;
};

export type ModalProviderValue = {
  modalBody: React.ReactNode;
  setModalBody: CallableFunction;
};
