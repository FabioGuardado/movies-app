interface IRequestTokenResponse {
  success: boolean;
  expires_at: Date | string;
  request_token: string;
}

export default IRequestTokenResponse;
