export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: "5px solid green" }}>
      <h1>여기는 검색 레이아웃</h1>
      <div>{children}</div>
    </div>
  );
}
