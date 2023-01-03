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
        Welcome to my personal website! My name is Reuben Liengaard and I am an designer with a background in technology and innovation.

As a hobbyist, I have a passion for using computation to solve complex problems. My areas of expertise include desktop Linux, environmental monitoring, geospatial analysis, parametric modeling, and artificial intelligence. My goal is to simplify complexity and make the world a smarter, more sustainable place.

I am always looking for new and creative ways to make a positive impact, and I believe that by bringing together the worlds of nature and technology, we can find innovative solutions to some of the biggest challenges facing humanity. Thank you for visiting my website, and I hope you find my work and interests interesting and inspiring.
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
