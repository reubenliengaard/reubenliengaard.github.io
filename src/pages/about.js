import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
          padding: '300px'
        }}>
        <p>
        My name is Reuben Liengaard and I am an designer with a background in applied technology. I have a passion for using computation to solve complex problems. My areas of expertise include linux, networking, environmental monitoring, geospatial analysis, parametric modeling, and artificial intelligence. My goal is to simplify complexity with clean code that processes large qauntities of data in order to make the world a smarter, more sustainable place. I am always looking for creative ways to make a positive impact. I believe that by bringing together the worlds of nature and technology, we can find innovative solutions. for example we can identify  heat loss in buildings using infra-red satelite imagery, or use data querying to locate, protect, or re-instate wildlife corridors. My professional background encompasses a range of fields, including architecture, and network engineering. I gained valuable experience during an internship at Heatherwick Studio, a renowned firm known for its creative and award-winning architectural designs. I also held a position as a network field engineer at Etherlive, a company that offers temporary broadband services for events. Thank you for visiting my website, I hope you find my work inspiring.
        </p>
      </div>
    </Layout>
  );
}