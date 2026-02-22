import { SobunCard } from "@/components/ItemCard";
import { formatTimeOnly } from "@/libs/formatDate";
import { Post } from "@/types/post";
import Link from "next/link";

interface MainSobunListProps {
  posts: Post[];
}

const MainSobunList = ({ posts }: MainSobunListProps) => {
  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <Link href={`/post/${post.postId}`} key={post.postId}>
          <SobunCard
            entryUsers={post.entryUsers}
            price={post.totalPrice ? post.totalPrice / post.maxEntry : 0}
            sobunTitle={post.title}
            meetingTime={formatTimeOnly(post.date)}
            meetingPlace={post.placeName}
            imageUrl={post.imageUrl}
          />
        </Link>
      ))}
    </div>
  );
};

export default MainSobunList;
