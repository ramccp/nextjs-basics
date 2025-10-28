async function CourseView({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data: Record<string, string> = {
    python: "Python",
    genai: "Generative AI",
    "java-spring": "Java Spring",
    javascript: "JavaScript",
  };

  return (
    <div className="m-5">
      <h1 className="font-bold text-4xl">Course View</h1>
      <h1>Details of {data[id]} course.</h1>
    </div>
  );
}

export default CourseView;
