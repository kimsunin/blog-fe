export default function Page() {
  return (
    <h1>
      김선인의 블로그(version:demo)
      <Data />
    </h1>
  );
}

async function Data() {
  const res = await fetch("http://localhost:3000/api");
  const data = await res.json();
  return <div>서버에서 받아온 데이터:{data[0].name}</div>;
}
