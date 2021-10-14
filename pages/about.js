import { useEffect } from 'react'
import styles from '../styles/About.module.scss';
const About = () => {
    return (
        <>
        <div>
        <h1 className={styles.highlight}>Yo its me</h1>

        </div>
           
        </>
    )
}

export const getStaticProps = (context) => {
    return { 
        props: {},
        revalidate: 10 
    }
}

export default About;