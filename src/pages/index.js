import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p id="p">
        Welcome to my personal website! My name is Reuben Liengaard and I am a hobbyist with a passion for using technology to solve complex problems and bridge the gap between nature and technology.

I specialize in desktop Linux, environmental monitoring, geospatial analysis, parametric modeling, and artificial intelligence, and my goal is to simplify complexity and make the world a smarter, more sustainable place.

I have always been fascinated by the intersection of nature and technology, and I believe that by bringing these two worlds together, we can create innovative solutions to some of the biggest challenges facing humanity. Whether it's using Linux to build more efficient and secure systems, or using geospatial analysis to understand and protect the environment, I am always looking for new and creative ways to make a positive impact.

On this website, you can learn more about my work, my background, and my passions. I hope you find my content interesting and informative, and I welcome any feedback or questions you may have. Thank you for visiting!
        </p>
        <div className={styles.buttons}>

        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
