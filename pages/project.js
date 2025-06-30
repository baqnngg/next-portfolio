import { TOKEN, DATABASE_ID } from "@/config"
import Layout from "@/components/layout";
import Head from "next/head";
import ProjectItem from "@/components/projects/project_item";
import styles from './project.module.css';

export default function Project({ Projects }) {
    return (
        <>
            <Layout>    
                <Head>
                    <title>병준이의 포트폴리오</title>
                    <meta name="description" content="나의 포트폴리오" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1>프로젝트</h1>
                        <p>총 {Projects.results.length}개의 프로젝트</p>
                    </div>
                    
                    <div className={styles.grid}>
                        {Projects && Projects.results.map((aProject, index) => (
                            <div key={aProject.id} style={{animationDelay: `${index * 0.1}s`}}>
                                <ProjectItem data={aProject}/>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const option = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({ page_size: 100 })
    };
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, option);
    const Projects = await res.json();

    Projects.results.sort((a, b) => {
        const titleA = a.properties.이름.title[0]?.plain_text || '';
        const titleB = b.properties.이름.title[0]?.plain_text || '';

        const isEnglishA = /^[A-Za-z]/.test(titleA);
        const isEnglishB = /^[A-Za-z]/.test(titleB);

        if (isEnglishA && !isEnglishB) return -1;
        if (!isEnglishA && isEnglishB) return 1;
        return titleA.localeCompare(titleB);
    });

    return {
        props: { Projects }
    };
}
