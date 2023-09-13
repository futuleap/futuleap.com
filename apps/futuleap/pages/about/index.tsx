import styles from './index.module.scss';
import Head from 'next/head';
import RootLayout from '../../app/layout';
import { EMAIL_PATH, LINKEDIN_PATH } from '../../components/icon-paths';
import SocialButton from '../../components/social-button';


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AboutProps {}

export function About(props: AboutProps) {
  const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
  const employees = [
    {
      id: 1,
      name: 'Mihkel Kasepuu',
      jobTitle: 'CEO, Co-Founder',
      linkedInUrl: 'https://www.linkedin.com/in/mihkel-kasepuu-4094b098/',
      email: 'mihkel.kasepuu@futuleap.com',
      image: '/images/mihkel_kasepuu.jpeg',
      description: description
    },
    {
      id: 2,
      name: 'Kärt Palm',
      jobTitle: 'COO, Co-Founder',
      linkedInUrl: 'https://www.linkedin.com/in/k%C3%A4rt-palm-63002911/',
      email: 'kart.palm@futuleap.com',
      image: '/images/kart_palm.jpeg',
      description: description
    },
    {
      id: 3,
      name: 'Kaarel Raspel',
      jobTitle: 'CTO, Co-Founder',
      linkedInUrl: 'https://www.linkedin.com/in/kaarel-raspel-720bb343/',
      email: 'kaarel.raspel@futuleap.com',
      image: '/images/kaarel_raspel.jpeg',
      description: description
    },
    {
      id: 4,
      name: 'Maksim Gorb',
      jobTitle: 'Co-Founder',
      linkedInUrl: 'https://www.linkedin.com/in/maksimgo/',
      email: 'maksim.gorb@futuleap.com',
      image: '/images/maksim_gorb.jpeg',
      description: description
    },
    {
      id: 5,
      name: 'Siim Veskilt',
      jobTitle: 'Co-Founder',
      linkedInUrl: 'https://www.linkedin.com/in/siim-veskilt-936656145/',
      email: 'siim.veskilt@futuleap.com',
      image: '/images/siim_veskilt.jpeg',
      description: description
    },
  ];

  return (
    <RootLayout>
      <div className="container">
        <Head>
          <title>Team - Futuleap</title>
          <meta name="description" content="Learn more about the team behind Futuleap."/>
        </Head>

        <header>
          <figure className={styles.logo}>
            <img src={`/images/textonly_nobuffer-removebg.png`} alt="Logo of FutuLeap"/>
          </figure>

          <h1 className={styles.title}></h1>
        </header>

        <main>
          <section className={styles.employeeList}>
            {employees.map(employee => (
              <div key={employee.id} className={styles.employeeCard}>
                <div className={styles.contentBox}>
                  <img src={employee.image} alt={`Picture of ${employee.name}`}/>
                  <p className={styles.jobTitle}>{employee.jobTitle}</p>
                  <h2>{employee.name}</h2>
                </div>
                <div className={styles.descriptionBox}>
                  <div className={styles.descriptionText}>
                    {employee.description}
                  </div>

                  <div className="socialLinks">
                    <SocialButton
                      href={employee.linkedInUrl}
                      label="LinkedIn"
                      svgPathData={LINKEDIN_PATH}
                      ariaLabel="Visit the LinkedIn profile"
                    />
                    <SocialButton
                      href={`mailto:${employee.email}`}
                      label="Email"
                      svgPathData={EMAIL_PATH}
                      ariaLabel="Send an email"
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </RootLayout>
  );
}

export default About;
