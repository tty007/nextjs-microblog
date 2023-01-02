import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import utilStyles from '../styles/utiles.module.css'
import { getPostsData } from '../lib/post'

//SSGの場合, 外部から一度だけデータを持ってくる
export async function getStaticProps() {
  const allPostsData = getPostsData()  
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>学生時代からwebの技術について勉強しているエンジニアです。</p>
      </section>

      <section>
        <h2>🗒エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail}) => (
              <article key={id}>
              <Link href={`posts/${id}`}>
                <img src={`${thumbnail}`}
                    className={styles.thumbnailImage} />
              </Link>
              <Link legacyBehavior href={`posts/${id}`}>
                <a className={utilStyles.boldText}
                >{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}
              >{date}</small>
            </article>
          ))}
          
        </div>
      </section>

      
    </Layout>
  );
}
