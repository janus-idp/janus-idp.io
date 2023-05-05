import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import PluginsFeatures from '@site/src/components/PluginsFeatures';

import styles from './index.module.css';

function PluginsHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Janus Plugins</h1>
        <p className="hero__subtitle">Check out our plugins for Backstage</p>
      </div>
    </header>
  );
}

export default function Plugins() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello!`}
      description="Description will go into a meta tag in <head />">
      <PluginsHeader />
      <main>
        <PluginsFeatures />
      </main>
    </Layout>
  );
}
