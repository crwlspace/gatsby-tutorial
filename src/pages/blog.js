import React from 'react'
import Layout from '../components/layout'
import styles from '../components/blog.module.css'

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>this is our blog page</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam magni nostrum sit iste, iusto nisi voluptatem amet repellendus unde excepturi libero! Quisquam, omnis doloremque!
                </p>
            </div>
        </Layout>
    )
}

export default blog

