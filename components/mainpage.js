import Lottie from "react-lottie-player";
import lottiejson from '/public/mainpage.json'
import styles from './mainpage.module.css'
import { useRouter } from 'next/router';

export default function Mainpage(){
    const router = useRouter();
    const handleClick = () => {
        router.push('/project');
    };
    
    return(
        <div className={styles.container}>
            <div className={styles.introduce}>
                <h1>안녕하세요</h1>
                <h2>저는 장병준입니다</h2>
                <p>
                    현재 충주 상업고등학교에 재학 중이며, 미래에 개발자가 되는 것을 목표로 하고 있습니다. 
                    어렸을 때부터 IT분야에 관심이 있었고, 다양한 프로젝트와 게임 제작을 경험해 왔습니다. 
                    특히 게임 개발에 흥미를 느끼고 있으며, 창의성과 개발 능력을 키우고 있습니다.
                </p>
                <button className={styles.button} onClick={handleClick}>
                    프로젝트 보기
                </button>
            </div>
            
            <div className={styles.lottieContainer}>
                <Lottie
                    loop
                    animationData={lottiejson}
                    play
                    style={{
                        maxWidth: '100%',
                        height: 'auto'
                    }}
                />
            </div>
        </div>
    )
}