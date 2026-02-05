import { UserInfo } from "@/components/UserGroup/props.type";
import { StaticImageData } from "next/image";

interface SobunCardProps {
  entryUsers: UserInfo[];

  totalPrice: number;

  sobunTitle: string;

  meetingTime: string;

  meetingPlace: string;

  imageUrl: string | StaticImageData;
}

export type { SobunCardProps };
