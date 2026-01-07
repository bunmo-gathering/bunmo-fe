# InputField 컴포넌트 개요

InputField 컴포넌트는 사용자로부터 텍스트 입력을 받을 수 있는 필드를 제공합니다.
이 컴포넌트는 type으로 다양한 스타일을 지정할 수 있으며, 사용자가 편리하게 텍스트를 입력할 수 있도록 도와줍니다.

<br/>
<br/>

# 주요 기능

- **다양한 스타일 지원**: `type` prop을 통해 input, textarea 스타일을 지정할 수 있습니다.
- **사용자 친화적 인터페이스**: Label, Placeholder, Error Message(Hint) 등을 지원하여 사용자가 쉽게 이해하고 사용할 수 있습니다.
- **유연한 이벤트 처리**: onChange 콜백 함수를 통해 입력 값 변경 시 원하는 동작을 수행할 수 있습니다.

<br/>
<br/>

# 사용 예시

```tsx
import { InputField } from "src/components/InputField";

<InputField
  type="input"
  label="Username"
  placeholder="Enter your username"
  hint="This field is required."
  onChange={(e) => console.log(e.target.value)}
/>;
```

<br/>
<br/>

# Props 설명

| Prop Name   | Type                                                                        | Description                                            | Required | Default Value |
| ----------- | --------------------------------------------------------------------------- | ------------------------------------------------------ | -------- | ------------- |
| type        | 'input' \| 'textarea'                                                       | 입력 필드의 스타일을 지정합니다.                       | Yes      | 'input'       |
| label       | string                                                                      | 입력 필드 위에 표시되는 라벨 텍스트입니다.             | No       | ''            |
| placeholder | string                                                                      | 입력 필드에 표시되는 플레이스홀더 텍스트입니다.        | No       | ''            |
| hint        | string                                                                      | 입력 필드 아래에 표시되는 힌트 또는 에러 메시지입니다. | No       | ''            |
| onChange    | (event: React.ChangeEvent<HTMLInputElement \| HTMLTextAreaElement>) => void | 입력 필드의 값이 변경될 때 호출되는 콜백 함수입니다.   | No       | () => {}      |
| value       | string                                                                      | 입력 필드의 현재 값입니다.                             | No       | ''            |
| disabled    | boolean                                                                     | 입력 필드를 비활성화할지 여부를 지정합니다.            | No       | false         |
| maxLength   | number                                                                      | 입력 필드에 허용되는 최대 문자 수를 지정합니다.        | No       | undefined     |
| rows        | number                                                                      | textarea 타입일 때 표시할 행 수를 지정합니다.          | No       | 3             |

> **Note**: className, style을 제외한 모든 prop은 `REST` 형태로 InputField 컴포넌트에 전달될 수 있습니다.

> **Note**: `type`이 'textarea'일 경우, `rows` prop을 사용하여 표시할 행 수를 지정할 수 있습니다.
>
> 만약 `type`이 'input'일 경우, `rows` prop은 무시됩니다.

<br/>
<br/>

# 스타일링

Figma 디자인 링크: [InputField 디자인](https://www.figma.com/design/BIso31DgeZEM3SwValPZ9q/bunmo---free?node-id=140-1071&t=fa9xDH1lWyXyAThp-4)

<br/>
<br/>

# 컴포넌트 위치

/Users/bagjong-won/Desktop/Project/bunmo-fe/src/components/InputField/InputField
