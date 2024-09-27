import Layout from "@/components/layout";

export default function AboutMe(){
    return(
        <Layout>
            <h1>Hello, nice to meet yall!</h1>
            <p>I am Byeongjun Jang, a student at Chungju Commercial High School, and a developer. 
                I enjoy solving algorithmic problems with Python and have participated in competitions, winning awards. Since middle school, 
                I have been interested in making games with Unity. I developed my own games individually and am currently 
                working with my classmates at an academy affiliated with a game company. I have also completed the course. 
                I hold certifications in Computer Utilization, ITQ Hangul, ITQ Excel, and a Level 4 Drone Certification. 
                I aspire to become a developer in the future and am eager to learn more vast and extensive knowledge.</p>
            <h2 style={{marginTop:50}}>skills</h2>
            <ui>
                <h4>
                    <li>Python</li>
                </h4>
                <p style={{marginTop:5}}>파이썬으로 알고리즘 작성가능</p>
                <h4>
                    <li>C</li>
                </h4>
                <p style={{marginTop:5}}>C로 간단한 프로그램 작성가능</p>
                <h4>
                    <li>HTML, CSS, JAVASCRIPT</li>
                </h4>
                <p style={{marginTop:5}}>웹사이트 만들기 가능</p>
                <h4>
                    <li>Next.js, React</li>
                </h4>
                <p style={{marginTop:5}}>next.js와 React로 웹사이트 개발 가능</p>
                <h4>
                    <li>Unity, C#</li>
                </h4>
                <p style={{marginTop:5}}>유니티와 C#으로 게임개발 가능</p>
                <h4>    
                    <li>mongoDB, mySql</li>
                </h4>
                <p style={{marginTop:5}}>mongoDB로 사이트에 DB가져오기 가능</p>
            </ui>
        </Layout>
    )
}

