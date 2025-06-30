import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import styles from './project_item.module.css'

// const router = useRouter();

export default function ProjectItem({ data }) {
    const title = data.properties.이름.title[0]?.plain_text;
    const tags = data.properties?.태그.multi_select;
    const startDate = data.properties?.작업기간.date.start;
    const endDate = data.properties?.작업기간.date.end;
    const description = data.properties?.설명.rich_text[0].plain_text;
    const Link = data.properties?.Link.url;
    const demo = data.properties?.Demo.url;
    const imgUrl = data.properties?.image.url;

    const router = useRouter();

    function countWorkDays(Start, End) {
        const StartDate = new Date(Start);
        const EndDate = End ? new Date(End) : new Date();

        let workdays = 0;
        let currentDate = new Date(StartDate);

        while (currentDate <= EndDate) {
        workdays++;
        currentDate.setDate(currentDate.getDate() + 1);
        }
        return workdays;
    }

    return (
        <Card className={styles.cardItem} sx={{ width: 320, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <CardMedia sx={{ height: 150 }} image={imgUrl} title={title} />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", marginBottom: "1rem" }}>
                ⏱️ {countWorkDays(startDate, endDate)}일
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", marginBottom: "1rem" }}>
                {description}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {tags.map((atag) => (<span key={atag.id}>#{atag.name} </span>))}
            </Typography>
        </CardContent>
        <CardActions sx={{ mt: "auto", gap: "0.5rem" }}>
            {demo && demo.trim() && (
                <button
                    className="btn btn-success"
                    type="button"
                    onClick={() => router.push(demo)}
                >
                    DEMO
                </button>
            )}
            {Link && Link.trim() && (
                <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={() => router.push(Link)}
                >
                    LINK
                </button>
            )}
        </CardActions>
        </Card>
    );
}
