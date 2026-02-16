import { UserInfo } from "@/components/UserGroup/props.type";
import { StaticImageData } from "next/image";

interface SobunCardProps {
  /**
   * 참여하는 유저 목록
   */
  entryUsers: UserInfo[];

  /**
   * 구매하는 품목의 가격
   */
  totalPrice: number;

  /**
   * 소분 목적 혹은 소분 명
   */
  sobunTitle: string;

  /**
   * 만나는 시간
   */
  meetingTime: string;

  /**
   * 만나는 장소
   */
  meetingPlace: string;

  /**
   * 소분 품목 사진
   */
  imageUrl: string | StaticImageData;
}

export type { SobunCardProps };
