import { UserInfo } from "@/components/UserGroup/props.type";
import { StaticImageData } from "next/image";

interface SobunCardProps {
  entryUsers: UserInfo[];

  totalPrice: number;

  sobunTitle: string;

  meetingTime: string;

  meetingPlace: string;

  imagUrl: string | StaticImageData;
}

export type { SobunCardProps };
