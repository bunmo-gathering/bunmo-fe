import {
  Children,
  cloneElement,
  ComponentProps,
  isValidElement,
  ReactElement,
} from "react";
import { ButtonGroupProviderProps } from "./props.type";
import Button from "../Button";
import buttonGroupProviderStyle from "./style";

const MAX_CHILDREN = 2;
const DENY_PROPS_LIST = ["size"];

/**
 * Button 컴포넌트를 그룹화하여 관리하는 컴포넌트입니다.
 */
const ButtonGroupProvider = ({
  children,
  type = "normal",
  size,
}: ButtonGroupProviderProps) => {
  const childrenCount = Children.count(children);

  // 자식의 최대 개수는 2개
  if (childrenCount > MAX_CHILDREN) {
    throw new Error(
      `ButtonGroup 컴포넌트는 최대 ${MAX_CHILDREN}개의 Button 컴포넌트만 자식으로 가질 수 있습니다.`,
    );
  }

  // type이 action일 경우, size prop 불가
  if (type === "action" && size) {
    throw new Error(
      "ButtonGroup 컴포넌트의 type이 action일 경우, size prop을 사용할 수 없습니다.",
    );
  }

  // 자식이 Button 컴포넌트인지 확인
  if (
    Children.toArray(children).some((child) => {
      if (isValidElement(child)) return typeof child.type !== typeof Button;

      return true;
    })
  ) {
    throw new Error(
      "ButtonGroup 컴포넌트는 Button 컴포넌트만 자식으로 가질 수 있습니다.",
    );
  }

  if (
    // DENY_PROPS_LIST에 있는 prop 사용 불가
    Children.toArray(children).some((child) => {
      if (isValidElement(child)) {
        const buttonProps = child.props as ComponentProps<typeof Button>;

        if (DENY_PROPS_LIST.some((denyProp) => denyProp in buttonProps))
          return true;
      }

      return false;
    })
  ) {
    throw new Error(
      `ButtonGroup 컴포넌트의 자식 Button 컴포넌트에는 ${DENY_PROPS_LIST.join(", ")} prop을(를) 사용할 수 없습니다.`,
    );
  }

  return (
    <>
      {childrenCount === 1 ? (
        // Button 컴포넌트가 1개일 경우
        <div
          className={buttonGroupProviderStyle({
            type,
            stroke: type === "action" ? true : false,
          })}
        >
          {cloneElement(
            children as ReactElement<ComponentProps<typeof Button>>,
            {
              size: size || "lg",
            },
          )}
        </div>
      ) : (
        // Button 컴포넌트가 2개 이상일 경우
        <div
          className={buttonGroupProviderStyle({
            type,
            stroke: type === "action" ? true : false,
          })}
        >
          {Children.map(children, (child, index) =>
            cloneElement(child as ReactElement<ComponentProps<typeof Button>>, {
              key: index,
              size: size || "md",
              // action type의 경우, 첫 번째 버튼은 border variant로 설정
              variant: type === "action" && index === 0 ? "border" : "primary",
            }),
          )}
        </div>
      )}
    </>
  );
};

export default ButtonGroupProvider;
