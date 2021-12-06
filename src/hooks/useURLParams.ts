import { useLocation } from 'react-router';

function useURLParams(searchedParam: string) {
  let location = useLocation();
  const params = new URLSearchParams(location.search);
  const result = params.get(searchedParam);

  if (result) {
    return result;
  } else {
    return null;
  }
}

export default useURLParams;
