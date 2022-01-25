export type AlertProviderProps = {
  children: React.ReactNode;
};

export type AlertProviderValue = {
  alert: string;
  alertText: string | null;
  success: (text: string, timeout: number) => void;
  error: (text: string, timeout: number) => void;
  clear: () => void;
};
