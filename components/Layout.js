import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utiles.module.css'
import Link from 'next/link'

const name = "TTY's Blog"
export const siteTitle = "Next.js Blog"

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        { home ? (
          <>
            <img src="/images/prof.png" className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img src="/images/prof.png" className={`${styles.profSize} ${utilStyles.borderCircle}`} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>
        { children }
      </main>
      {!home && (
        <div>
          <Link href="/">← ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;