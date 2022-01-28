interface IAccountStateResponse {
  id: number;
  favorite: boolean;
  rated: boolean | IRated;
  watchlist: boolean;
}

export default IAccountStateResponse;

interface IRated {
  value: number;
}
