# 폴더 구성

- `api` : API 호출 관련 코드
  - `fetcher` : API 호출 함수들 (View 직접 호출 **불가능**)
  - `service` : API 서비스 함수들 (View에서 호출 **가능**)
- `app` : 애플리케이션 라우트
- `components` : 재사용 가능한 컴포넌트
  - `{componentName}` : 컴포넌트 별 폴더
    - `index.tsx` : 컴포넌트 메인 파일
    - `props.type.ts` : 컴포넌트 props 타입 정의 파일
- `libs` : `customHookFile`, `utilityFile` 등 재사용 가능한 코드
- `styles` : 전역 스타일 및 테마 설정 파일
- `types` : 전역 타입 정의 파일
  - `api` : API 관련 타입 정의
    - `request` : API 요청 타입
    - `response` : API 응답 타입
    - `dto` : 데이터 전송 객체 타입

# 코드 작성 규칙

공사중. 추후 작성 예정 ~26일까지 해줌 ㅇㅇ;
