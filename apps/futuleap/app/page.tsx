import styles from './page.module.scss';
import Head from 'next/head';
import getAssetPrefix from 'next/config';

export default function Index() {
  const assetPrefix = getAssetPrefix()??'';
  console.log(assetPrefix)

  return (
    <div className={styles.container}>
      <Head>
        <title>FUTULEAP</title>
        <link rel="icon" href={`${assetPrefix}/favicon.ico`}/>
      </Head>

      <main>
        <div className="logo">
          <img src={`${assetPrefix}/images/logo.png`} alt="FutuLeap Logo"/>
        </div>
        <div className="contact-email">info@futuleap.com</div>
      </main>
    </div>
  );
}
