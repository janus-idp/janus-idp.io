import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const PluginsList = [
  {
    title: '3scale',
    Svg: require('@site/static/img/plugin-janus-3scale.svg').default,
    description: (
      <>
        Need description.
      </>
    ),
    pagelink: '/plugin-3scale',
  },
  {
    title: 'Authentication and Authorization with Keycloak',
    Svg: require('@site/static/img/plugin-janus-keycloak.svg').default,
    description: (
      <>
        Load users and groups from Keycloak, enabling use of multiple authentication providers to be applied to Backstage entities.
      </>
    ),
    pagelink: '/plugin-keycloak',
  },
  {
    title: 'Container Image Registry for ACR',
    Svg: require('@site/static/img/plugin-janus-oci-acr.svg').default,
    description: (
      <>
        View container image details from ACR in Backstage.
      </>
    ),
    pagelink: '/plugin-acr',
  },
  {
    title: 'Container Image Registry for JFrog Artifactory',
    Svg: require('@site/static/img/plugin-janus-oci-jfrog.svg').default,
    description: (
      <>
        View container image details from Quay in Backstage.
      </>
    ),
    pagelink: '/plugin-jfrog-artifactory',
  },
  {
    title: 'Container Image Registry for Quay',
    Svg: require('@site/static/img/plugin-janus-oci-quay.svg').default,
    description: (
      <>
        View container image details from Quay in Backstage.
      </>
    ),
    pagelink: '/plugin-quay',
  },
  {
    title: 'Multi Cluster View with OCM',
    Svg: require('@site/static/img/plugin-janus-ocm.svg').default,
    description: (
      <>
        View clusters from OCM’s MultiClusterHub and MultiCluster Engine in Backstage.
      </>
    ),
    pagelink: '/plugin-ocm',
  },
  {
    title: 'Application Topology for Kubernetes',
    Svg: require('@site/static/img/plugin-janus-topology.svg').default,
    description: (
      <>
        Visualize the deployment status and related resources of your applications deployed on any Kubernetes cluster.
      </>
    ),
    pagelink: '/plugin-topology',
  },
  {
    title: 'Pipelines with Tekton',
    Svg: require('@site/static/img/plugin-janus-tekton.svg').default,
    description: (
      <>
        Easily view Tekton PipelineRun status for your services in Backstage.
      </>
    ),
    pagelink: '/plugin-tekton',
  },
];

function Plugins({Svg, title, description, pagelink}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.buttons}>
        <Link
          className={styles.buttons}
          to={pagelink}>

          <div className="rounded-lg dark:text-gray-400 text-gray-900  bg-zinc-300/25 dark:bg-zinc-700/25 bg-blend-multiply text-center items-center">
            <div className="text--center">
              <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md no">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className={styles.buttons}>
                  Learn more!
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function PluginsFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {PluginsList.map((props, idx) => (
            <Plugins key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
