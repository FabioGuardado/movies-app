import IAlertStatus from '../interfaces/IAlertStatus';

export type AlertProviderProps = {
  children: React.ReactNode;
};

export type AlertProviderValue = {
  alert: IAlertStatus;
  showSuccessAlert: CallableFunction;
  showErrorAlert: CallableFunction;
  clearAlerts: CallableFunction;
};
