# Next 15 - App Router

- til-next-14 에서 확인을 해보자.
  - CSR의 내용
  - SSR의 내용
  - SSG의 내용
  - ISR의 내용

## 프로젝트 생성

- 현재 폴더에 프로젝트 생성

```bash
npx create-next-app@latest .
```

- 지금은 tailwind 는 설치하지 않음
  ![Image](https://github.com/user-attachments/assets/2c63895b-0694-4c82-aaf4-f9aa7ce44ca8)

- 테스트해보기
  - `npm run dev` : 개발모드 실행
  - `npm run build` : 빌드진행
  - `npm run start` : Production 모드로 실행

## App Router

### til-next-14 에서 **Pages Router** 를 리뷰해보자.

- /src/`pages`/라우터명.tsx
- /src/`pages`/board/[id].tsx 등등
- /src/`pages`/board/[id]/index.tsx 등등

### App Router 살펴보기

- /src/`app`/ 폴더가 기준

#### 1. 일반 URI 경로 처리

- http://localhost:3000/
  - /src/`app`/page.tsx 기준

```tsx
import styles from "./page.module.css";

export default function Home() {
  return <div className={styles.page}>인덱스페이지</div>;
}
```

#### 2. URI의 쿼리 처리

- http://localhost:3000/search
  - /src/`app/search/page.tsx`

```tsx
export default function Page() {
  return <div>검색페이지</div>;
}
```

- http://localhost:3000/search?keword=iu
  - `쿼리 전달`

```tsx
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) {
  const { keyword } = await searchParams;
  console.log(keyword);
  return <div>{keyword} : 검색페이지</div>;
}
```

- 기본적으로 Next 에서는 `서버컴포넌트`가 됨
- console.log 실행시 터미널(서버)에서 출력됨.
  ![Image](https://github.com/user-attachments/assets/4c843db1-3fa8-4cc3-907d-4cacc8dce5c6)
- 개발 중일 때만 F12 번 콘솔에 출력됨. (Server 키워드 출력)
  ![Image](https://github.com/user-attachments/assets/74759b8d-7932-455d-8ebf-e3f136410afb)

#### 3. URI의 Params 처리

- http://localhost:3000/good
  - /src/`app/good/page.tsx`

```tsx
export default function Page() {
  return <div>제품페이지</div>;
}
```

- http://localhost:3000/good/1
  - /src/`app/good/1/page.tsx`
- http://localhost:3000/good/2
  - /src/`app/good/2/page.tsx`
- 위의 경우는 라우터가 동적으로 변경이 됨
  - /src/`app/good/[id]/page.tsx`
    ![Image](https://github.com/user-attachments/assets/ae2a0c88-2669-4c5c-a796-d82381907313)
    ![Image](https://github.com/user-attachments/assets/f4751432-80ef-4b76-862c-1ccf26cd6d84)
- http://localhost:3000/good/2/5/800 (중첩된 경우)
  - /src/`app/good/[...id]/page.tsx`
    ![Image](https://github.com/user-attachments/assets/22a99b42-0b99-4226-8688-8cd76c532e5d)
    ![Image](https://github.com/user-attachments/assets/a1a0cc04-10eb-46e2-a96d-d9225fc418b1)

#### 4. 404 처리 (파일명 : not-found.tsx)

- http://localhost:3000/gogo (없는 경로)
  - /src/`app/not-found.tsx`

```tsx
export default function NotFound() {
  return <div>잘못된 경로 입니다.</div>;
}
```

- 추후에 테스트 해보자.
  - http://localhost:3000/search/gogo (없는 경로)
  - /src/`app/search/not-found.tsx`
