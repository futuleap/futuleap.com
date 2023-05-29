import styles from './page.module.scss';
import Head from 'next/head';

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FUTULEAP</title>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <main>
        <div className="logo">
          <img src={`/images/logo.png`} alt="FutuLeap Logo"/>
        </div>
        <div className="contact-email">info@futuleap.com</div>
      </main>
    </div>
  );
}
