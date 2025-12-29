# 폴더 구성

- `app` : 애플리케이션 라우트
- `api` : API 호출 관련 코드
  - `fetcher` : API 호출 함수들 (View 직접 호출 **불가능**)
  - `service` : API 서비스 함수들 (View에서 호출 **가능**)
- `components` : 재사용 가능한 컴포넌트
  - `common` : 여러 컴포넌트에서 공통으로 사용되는 컴포넌트
  - `{componentName}` : 컴포넌트 별 폴더
    - `index.tsx` : 컴포넌트 메인 파일
    - `props.type.ts` : 컴포넌트 props 타입 정의 파일
    - `{AtomComponent}.tsx` : 해당 컴포넌트에서 사용되는 Atom 컴포넌트 파일
      - 만약 외부에서 사용될 경우, `새 컴포넌트로 작성`하여 사용
- `libs` : `customHookFile`, `utilityFile` 등 재사용 가능한 코드
- `styles` : 전역 스타일 및 테마 설정 파일
- `types` : 전역 타입 정의 파일
  - `api` : API 관련 타입 정의
    - `request` : API 요청 타입
    - `response` : API 응답 타입
    - `dto` : 데이터 전송 객체 타입

<br/>
<br/>

# 코드 작성 규칙

### 1. children만 존재하는 props의 경우 `PropsWithChildren` 사용

```tsx
const ComponentName = (props: PropsWithChildren) => {
  <>{props.children}</>;
};
```

<br/>

### 2. 모든 컴포넌트는 화살표 함수로 작성

- `rface` code snippet 사용

```tsx
// Good
const ComponentName = (props: PropsType) => { ... }
export default ComponentName;

// Bad
function ComponentName(props: PropsType) { ... }
export default ComponentName;

export function ComponentName(props: PropsType) { ... }
```

<br/>

### 3. 컴포넌트의 props 타입은 `props.type.ts`의 이름으로 분리하여 작성

- 컴포넌트 폴더 내에 `props.type.ts` 파일 생성
- Atom 컴포넌트의 props 타입도 같은 파일에서 관리

```typescript
// components/ComponentName/props.type.ts
interface ComponentNameProps {
  ...
}

export type { ComponentNameProps };
```

<br/>

### 4. 같은 폴더 경로 내에서 `절대 경로(Absolute Imports) 사용 금지`

```typescript
// Good
import { AtomComponent } from "./AtomComponent";

// Bad
import { AtomComponent } from "@/components/{ComponentName}/AtomComponent";
```

<br/>

### 5. 단일 파일 원칙

- **가급적** 하나의 파일에는 하나의 `컴포넌트` 또는 하나의 `함수`만 작성

```ts
// Good
const functionName = () => { ... }

export default functionName

// Bad
const functionName1 = () => { ... }
const functionName2 = () => { ... }

export { functionName1, functionName2 };
```

<br/>
<br/>

# 브랜치 규칙

- 작업 시작 전 `GitHub Project`에 등록된 이슈 번호 확인 후 브랜치 생성

```
- `main` : 배포용 브랜치
- `develop` : 개발용 브랜치 (default)
- `feat/{IssueNumber}` : 기능 개발용 브랜치
- `fix/{IssueNumber}` : 버그 수정용 브랜치
```

<br/>
<br/>

# 커밋 메시지 규칙

```
- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor: 코드 리팩토링
- test: 테스트 코드 추가, 수정
- chore: 빌드 업무 수정, 패키지 매니저 설정 등 기타 변경

예제1) feat: 로그인 기능 추가
예제2) fix: 회원가입 리다디렉트 누락 수정
```

<br/>
<br/>

# PR 규칙

- PR은 `하나의 작업`이 완료된 후 생성
  - `하나의 작업`은 Issue에 등록된 단위 작업 기준
- 작업이 완료된 후 `develop` 브랜치로 PR 생성
- PR 제목은 커밋 메시지 규칙과 동일하게 작성
- PR 본문에 다음 항목 포함
  - **변경 사항**에 대한 간략한 설명
  - 관련 이슈 번호
  - 테스트 방법 (필요한 경우)

<br/>
<br/>

# 코드 리뷰 규칙

- `코드 리뷰`는 PR 생성 후 등록된 리뷰어 모두가 승인할 때까지 대기
  - 등록된 모든 리뷰어가 승인을 완료한 후에만 PR `develop` 병합 가능
- 코드 리뷰 시 다음 사항 확인
  - 코드 스타일 및 규칙 준수 여부
  - 기능 구현이 요구사항에 부합하는지 여부
  - 잠재적인 버그 또는 성능 문제 여부
- 리뷰어는 필요한 경우 변경 요청 가능

<br/>
<br/>

# 기타 규칙

- 모든 코드 변경 사항은 반드시 로컬에서 충분히 테스트 후 커밋 및 푸시
- 중요 변경 사항에 대해서는 팀원들과 사전 논의 권장
- 병합 완료 후 `병합된 브랜치`에서 오류 없이 해당 기능이 오류 없이 작동하는지 재확인
