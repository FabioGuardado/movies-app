interface IReview {
  author: string;
  author_details: IAuthor;
  content: string;
  created_at: Date;
  id: string;
  updated_at: Date;
  url: string;
}

export default IReview;

interface IAuthor {
  name: string;
  username: string;
  avatar_path: null | string;
  rating: number | null;
}
