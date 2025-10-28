import Link from "next/link"

function Course(){
    return <>
    <h1 className="font-bold text-3xl m-5">Our Courses</h1>
    <p className="m-5">Click on course to view details</p>
    <ul className="m-5 px-10 text-lg">
        <li><Link href={'/courses/python'}>Python</Link></li>
        <li><Link href={'/courses/javascript'}>JavaScript</Link></li>
        <li><Link href={'/courses/genai'}>Generative AI</Link></li>
        <li><Link href={'/courses/java-spring'}>Java Spring</Link></li>
    </ul>
    
    </>
}

export default Course