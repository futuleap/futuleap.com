import styles from './page.module.scss';

import Head from 'next/head';
import Image from 'next/image'

export default function Index() {
  const multiplier = 4.5;
  const width = 1280 / multiplier;
  const height = 925 / multiplier;

  return (
    <div className={styles.container}>
      <Head>
        <title>FUTULEAP</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <div className="logo"
        >
          <Image
            src="/images/logo.png"
            alt="Futuleap logo"
            width={width}
            height={height}
          />
        </div>
        <div className="contact-email">info@futuleap.com</div>
      </main>
    </div>
  )
}
