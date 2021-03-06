import React from 'react';

import styles from './404.module.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404 Not Found" />
      <div className={`container ${styles.banner}`}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Not Found</h2>
      </div>
    </Layout>
  );
}
