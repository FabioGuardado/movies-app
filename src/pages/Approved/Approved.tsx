import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/UI/Layout/Layout';
import Loader from '../../components/UI/Loader/Loader';
import { useAuth } from '../../hooks/useAuth';
import useURLParams from '../../hooks/useURLParams';
import routes from '../../routes/routes';

const Approved: React.FunctionComponent = () => {
  let history = useHistory();
  const auth = useAuth();
  const requestToken = useURLParams('request_token');
  const approved = useURLParams('approved');

  useEffect(() => {
    const getSessionId = async () => {
      if (Boolean(approved) && requestToken && auth.createSession) {
        await auth.createSession(requestToken);
        history.push(routes.PROFILE);
      } else {
        history.push(routes.HOME);
      }
    };

    getSessionId();
  }, [approved, auth, history, requestToken]);

  return (
    <Layout>
      <Loader />
    </Layout>
  );
};

export default Approved;
