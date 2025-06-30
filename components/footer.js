import styles from './footer.module.css'

export default function Footer(){
    return(
        <div className={styles.footer}>
            <p>📧 Contact Here</p>
            <p>bbqdnrmas@gmail.com</p>
            <p style={{marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7}}>
                © 2024 장병준. All rights reserved.
            </p>
        </div>
    )
}