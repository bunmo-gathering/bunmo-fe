# SearchField 컴포넌트 개요

SearchField 컴포넌트는 검색 기능에 최적화된 텍스트 입력 필드를 제공합니다.
이 컴포넌트는 사용자가 쉽게 검색어를 입력하고, 관련된 기능을 수행할 수 있도록 도와줍니다.

<br/>
<br/>

# 사용 예시

```tsx
import { InputField } from "src/components/InputField";

<SearchField
  label="word"
  placeholder="원하는 상품을 검색해보세요."
  onChange={(e) => console.log(e.target.value)}
/>;
```

<br/>
<br/>

# Props 설명

| Prop Name   | Type                                                                        | Description                                          | Required | Default Value |
| ----------- | --------------------------------------------------------------------------- | ---------------------------------------------------- | -------- | ------------- |
| label       | string                                                                      | 입력 필드 위에 표시되는 라벨 텍스트입니다.           | No       | ''            |
| placeholder | string                                                                      | 입력 필드에 표시되는 플레이스홀더 텍스트입니다.      | No       | ''            |
| onChange    | (event: React.ChangeEvent<HTMLInputElement \| HTMLTextAreaElement>) => void | 입력 필드의 값이 변경될 때 호출되는 콜백 함수입니다. | No       | () => {}      |
| value       | string                                                                      | 입력 필드의 현재 값입니다.                           | No       | ''            |
| disabled    | boolean                                                                     | 입력 필드를 비활성화할지 여부를 지정합니다.          | No       | false         |

> **Note**: inputOptions를 통해 className, style을 제외한 모든 prop은 `REST` 형태로 InputField 컴포넌트에 전달될 수 있습니다.

<br/>
<br/>

# 스타일링

Figma 디자인 링크: [SearchField 디자인](https://www.figma.com/design/BIso31DgeZEM3SwValPZ9q/bunmo---free?node-id=140-1327&t=gl00x7TZQaAKGW6o-4)

<br/>
<br/>

# 컴포넌트 위치

/Users/bagjong-won/Desktop/Project/bunmo-fe/src/components/InputField/SearchField.tsx
