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

As a hobbyist, I have a passion for using computation to solve complex problems. My areas of expertise include linux, networking, environmental monitoring, geospatial analysis, parametric modeling, and artificial intelligence. My goal is to simplify complexity and make the world a smarter, more sustainable place.

I am always looking for new and creative ways to make a positive impact, and I believe that by bringing together the worlds of nature and technology, we can find innovative solutions to some of the biggest challenges facing humanity. Thank you for visiting my website, and I hope you find my work and interests interesting and inspiring.


Reuben's professional background encompasses a range of fields, including architecture, stone masonry, and network engineering.
    
He practices dry stone walling, a time-honored technique for building walls with stones. 
    
He gained valuable experience during an internship at Heatherwick Studio, a renowned firm known for its creative and award-winning architectural designs. 
    
He has also held a position as a network field engineer at Etherlive, a company that offers temporary broadband services for events.
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
