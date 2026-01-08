import { IndicatorPosition } from "../Indicator/props.type";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
type AvatarStatus = "button" | "indicator" | "none";
type AvatarIndicatorPosition = IndicatorPosition;

interface AvatarProps {
  /**
   * Avatar 이미지 URL props
   */
  imageUrl?: string;

  /**
   * Avatar 사이즈 조정
   */
  size?: AvatarSize;

  /**
   * Avatar의 목적을 나타내는 props
   * button: Avatar 위에 IconButton을 띄우는 형태
   * indicator: Avatar 위에 Indicator을 띄우는 형태
   * none: Avatar만 표시
   */
  status?: AvatarStatus;

  /**
   * Indicator 위치 조정하는 props
   * topRight: 우상단
   * topLeft: 좌상단
   * bottomRight: 우하단
   * bottomLeft: 좌하단
   */
  indicatorPosition: AvatarIndicatorPosition;
}

export type { AvatarProps };
