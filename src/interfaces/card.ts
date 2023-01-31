export interface CardProps {
  data: {
    id: string;
    author_fullname: string;
    title: string;
    ups?: number;
    thumbnail?: string;
    created: number;
    num_comments?: number;
    url: string;
  };
  onPress: () => void;
};