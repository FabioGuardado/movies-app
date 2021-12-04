interface IResponse<T> {
  id?: number;
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
}

export default IResponse;
