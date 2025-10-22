import Hello from "./components/Hello";

export default function Home() {
  console.log("Hello, this is rendered on server side.");
  return (
    <>
      <h1 className="font-bold m-5 text-4xl">Welcome to CAT!</h1>
      <Hello />
    </>
  );
}
