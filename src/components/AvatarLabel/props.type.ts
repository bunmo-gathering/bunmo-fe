type AvatarLabelSize = "sm" | "md" | "lg";
type AvatarLabelType = "button" | "avatar";
type AvatarLabelDirection = "vertical" | "horizon";
type AvatarLabelTextColor = "onSurface" | "onPrimary";

interface AvatarLabelProps {
  /**
   * Avatar 와 Text의 사이즈 조절 props
   */
  size: AvatarLabelSize;

  /**
   * Avatar 타입 또는 Button 타입 props
   */
  type: AvatarLabelType;

  /**
   * AvatarLabel 텍스트 색상
   * - onSurface
   * - onPrimary
   */
  color: AvatarLabelTextColor;

  /**
   *
   */
  children: string[];

  /**
   * Avatar와 Text 방향 props
   * - vertical : 가로로 배치
   * - horizon : 세로로 배치
   */
  direction?: AvatarLabelDirection;
}

export default AvatarLabelProps;
