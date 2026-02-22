import { UserInfo } from "@/components/UserGroup/props.type";

interface Post {
  postId: number;
  title: string;
  totalPrice: number;
  placeName: string;
  imageUrl: string;
  date: string;
  maxEntry: number;
  entryUsers: UserInfo[];
}

export type { Post };
