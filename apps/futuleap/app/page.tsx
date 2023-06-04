import styles from './page.module.scss';
import Head from 'next/head';

export default function Index() {
  return (
    <div className={styles.container} role="main">
      <Head>
        <title>FUTULEAP</title>
        <meta name="description" content="Welcome to FutuLeap, a future-forward company."/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <header>
        <figure className="logo">
          <img src={`/images/logo.png`} alt="Logo of FutuLeap"/>
        </figure>
      </header>
      <main>
        <address aria-label="Contact FutuLeap at">
          <a href="mailto:info@futuleap.com">
            <strong>info@futuleap.com</strong>
          </a>
        </address>
      </main>
    </div>
  );
}
