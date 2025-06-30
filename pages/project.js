import { TOKEN, DATABASE_ID } from "@/config"
import Layout from "@/components/layout";
import Head from "next/head";
import ProjectItem from "@/components/projects/project_item";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";

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
                
                <Box 
                    sx={{
                        textAlign: 'center',
                        marginBottom: '3rem',
                        padding: '2rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <Typography 
                        variant="h2" 
                        component="h1"
                        sx={{
                            background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            animation: 'fadeInUp 1s ease-out'
                        }}
                    >
                        🚀 프로젝트
                    </Typography>
                    <Typography 
                        variant="h6"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontWeight: 400,
                            animation: 'fadeInUp 1s ease-out 0.2s both'
                        }}
                    >
                        총 프로젝트: <strong style={{color: 'white'}}>{Projects.results.length}</strong>개
                    </Typography>
                </Box>
                
                <Grid container justifyContent="center" spacing={3}>
                    {Projects && Projects.results.map((aProject, index) => (
                        <Grid key={aProject.id} item>
                            <div style={{animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`}}>
                                <ProjectItem data={aProject}/>
                            </div>
                        </Grid>
                    ))}
                </Grid>
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
