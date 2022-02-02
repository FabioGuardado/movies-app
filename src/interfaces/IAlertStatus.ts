interface IAlertStatus {
  status: 'NONE' | 'SUCCESS' | 'ERROR';
  body?: string | null;
}

export default IAlertStatus;
