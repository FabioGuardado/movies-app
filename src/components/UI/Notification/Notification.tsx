import React from 'react';
import INotification from '../../../interfaces/INotification';

const Notification: React.FunctionComponent<NotificationProps> = ({
  notification,
  setNotification,
}) => {
  return (
    <div className="absolute top-5 left-5 p-8 bg-green-700 text-white">
      <button
        className="absolute top-1 right-3"
        onClick={() => setNotification({ active: false, message: '' })}
      >
        X Close
      </button>
      <p>{notification.message}</p>
    </div>
  );
};

export default Notification;

type NotificationProps = {
  notification: INotification;
  setNotification: CallableFunction;
};
