"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(g,s(s({ref:t},h),{},{components:n})):a.createElement(g,s({ref:t},h))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={title:"Deploying Backstage onto OpenShift Using the Backstage Helm Chart",authors:["sabre1041"],tags:["helm"],description:"Deploying Backstage onto OpenShift Using the Backstage Helm Chart"},s="Deploying Backstage onto OpenShift Using the Backstage Helm Chart",r={permalink:"/blog/2023/02/17/deploying-backstage-onto-openshift-using-helm",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-02-17-deploying-backstage-onto-openshift-using-helm/index.mdx",source:"@site/blog/2023-02-17-deploying-backstage-onto-openshift-using-helm/index.mdx",title:"Deploying Backstage onto OpenShift Using the Backstage Helm Chart",description:"Deploying Backstage onto OpenShift Using the Backstage Helm Chart",date:"2023-02-17T00:00:00.000Z",formattedDate:"February 17, 2023",tags:[{label:"helm",permalink:"/blog/tags/helm"}],readingTime:7.315,hasTruncateMarker:!1,authors:[{name:"Andrew Block",title:"Maintainer of Janus Helm Charts & Plugin Contributor",url:"https://github.com/sabre1041",imageURL:"https://github.com/sabre1041.png",key:"sabre1041"}],frontMatter:{title:"Deploying Backstage onto OpenShift Using the Backstage Helm Chart",authors:["sabre1041"],tags:["helm"],description:"Deploying Backstage onto OpenShift Using the Backstage Helm Chart"},prevItem:{title:"Using OpenShift Authentication to Secure Access to Backstage",permalink:"/blog/2023/02/20/using-openshift-authentication-to-secure-access-to-backstage"},nextItem:{title:"Ingesting Keycloak Organizational Data into the Backstage Catalog",permalink:"/blog/2023/02/06/ingesting-keycloak-org-data-into-the-backstage-catalog"}},l={authorsImageUrls:[void 0]},c=[{value:"OpenShift Environment Considerations",id:"openshift-environment-considerations",level:2},{value:"Image Source and Content",id:"image-source-and-content",level:3},{value:"Ingress Strategy",id:"ingress-strategy",level:3},{value:"Security",id:"security",level:3},{value:"Deploying the Backstage Helm Chart",id:"deploying-the-backstage-helm-chart",level:2}],h={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Backstage is a framework for building developer portals and has become an important tool that is complementary with establishing an ",(0,o.kt)("a",{parentName:"p",href:"https://internaldeveloperplatform.org/what-is-an-internal-developer-platform/"},"Internal Development Platform")," (IDP). Many of the same organizations who are seeking the benefits that Backstage and an IDP can provide are also using Kubernetes as a platform for building and running containerized workloads. As described within previous articles (",(0,o.kt)("a",{parentName:"p",href:"/blog/2023/01/15/getting-started-with-the-backstage-helm-chart"},"Part 1"),", ",(0,o.kt)("a",{parentName:"p",href:"/blog/2023/01/25/exploring-the-flexibility-of-the-backstage-helm-chart"},"Part 2"),", the Backstage Helm chart can be used to not only simplify the process for deploying Backstage to Kubernetes, but also how its flexibility can adapt to a variety of conditions and constraints."),(0,o.kt)("p",null,"While Kubernetes has become the de-facto container orchestration platform, there are a number of Kubernetes distributions on the market. The ",(0,o.kt)("a",{parentName:"p",href:"https://janus-idp.io"},"Janus Project")," is an upstream community sponsored by Red Hat and OpenShift (along with the upstream OKD) is their Kubernetes distribution. The features and capabilities that are included within OpenShift greatly benefit from a framework like Backstage as it enables end users the ability to simplify their interactions with each of these services. This article will describe the considerations that must be accounted for and the process to deploy the Backstage Helm chart to OpenShift. "),(0,o.kt)("h2",{id:"openshift-environment-considerations"},"OpenShift Environment Considerations"),(0,o.kt)("p",null,"As with any target environment, there are a variety of considerations that must be accounted for in order to ensure an integration is successful -- OpenShift is no different and the following are the areas that must be addressed prior to deploying the Helm chart:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Image Source and Content"),(0,o.kt)("li",{parentName:"ul"},"Ingress Strategy"),(0,o.kt)("li",{parentName:"ul"},"Security")),(0,o.kt)("p",null,"Fortunately, as described in the prior articles, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/backstage/charts/tree/main/charts/backstage"},"Backstage Helm chart")," provides the necessary options to customize the deployment to suit the necessary requirements. These customizations are managed via Helm values and the following sections describe the significance of these areas as well as how they can be accomplished within the Backstage Helm chart. "),(0,o.kt)("h3",{id:"image-source-and-content"},"Image Source and Content"),(0,o.kt)("p",null,"OpenShift encompasses an entire container platform that is built upon certified and vetted content. The majority of this content is sourced from one of the Red Hat managed container registries and include everything from the foundational platform services to content designed for application developers. Previously, it was described how the PostgreSQL instance supporting the persistence of Backstage was customized to make use of a PostgreSQL image from Software Collections instead of from Bitnami. "),(0,o.kt)("p",null,"Using a similar approach, the PostgreSQL instance that is leveraged as part of the Backstage Helm chart can be configured to make use of an image from the Red Hat Container Catalog (RHCC) to provide a greater level of security and assurance. Since the official supported image from Red Hat is the downstream of the PostgreSQL from Software Collections, the only configuration that needs to be modified is the source location as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"postgresql:\n  image:\n    registry: registry.redhat.io\n    repository: rhel9/postgresql-13\n    tag: 1-73\n")),(0,o.kt)("p",null,"Images originating from Red Hat container registries can be deployed to environments other than OpenShift. However, additional configurations with regards to how to enable access to the image content needs to be applied as standard Kubernetes environments do not include the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.11/openshift_images/managing_images/using-image-pull-secrets.html"},"Global Pull Secret")," which include the credentials for accessing the image source. The steps for enabling this functionality is beyond the scope of this article, but the Backstage Helm chart does support this capability."),(0,o.kt)("h3",{id:"ingress-strategy"},"Ingress Strategy"),(0,o.kt)("p",null,"Exposing applications externally for the purpose of enabling access from end users or systems is a common concern when operating in a Kubernetes environment. OpenShift saw the need for this feature from the beginning of the Kubernetes based distribution of the platform and has included a component called ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.9/networking/understanding-networking.html#nw-ne-comparing-ingress-route_understanding-networking"},(0,o.kt)("inlineCode",{parentName:"a"},"Routes"))," to enable this capability. Since then, the Kubernetes community has introduced a similar concept called ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},(0,o.kt)("inlineCode",{parentName:"a"},"Ingress"))," which similarly provides support for exposing applications externally."),(0,o.kt)("p",null,"Given the wide adoption of Ingress in the Kubernetes community, and to provide OpenShift users with the freedom to choose from the existing Routes approach or the more Kubernetes native Ingress feature, support was added in OpenShift to \u201cupconvert\u201d any Ingress resource that is deployed within OpenShift to an OpenShift native Route resources. This provides the best of both worlds by giving end users the flexibility to choose the approach for which they feel the most comfortable with. In addition, the up-conversion can be customized to enable Route specific features, such as specifying the TLS termination type when exposing Ingress resources in a secure fashion. The feature can be enabled by specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"route.openshift.io/termination")," on the Ingress object itself and supports edge, passthrough and termination types."),(0,o.kt)("p",null,"For simplicity in this implementation so that TLS is offloaded at the OpenShift router, edge termination can be specified by setting the following within the Backstage Helm Values file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ingress:\n  enabled: true\n  annotations:\n    route.openshift.io/termination: "edge"\n')),(0,o.kt)("p",null,"By setting this annotation, the resulting Route resource in OpenShift will be configured as a secure route with edge termination so that connections to the Backstage dashboard are secure."),(0,o.kt)("h3",{id:"security"},"Security"),(0,o.kt)("p",null,"One of the most important aspects of OpenShift is its \u201csecure by default\u201d approach for managing the platform and all of the workloads. By default, OpenShift approaches security by enforcing that workloads conform to certain criteria including not running with elevated permissions (specifically as the root user) as well as not requesting access to privileged resources, such as file systems on each container host. This posture is inverse to a standard deployment of Kubernetes which does not require such considerations to be placed upon workloads. While this does require additional onus on those implementing and managing workloads, it does provide for a more secure operating environment."),(0,o.kt)("p",null,"While the Backstage component of the Helm chart itself does not include any specific parameters that would require modification from a security perspective, the included ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/main/bitnami/postgresql"},"Bitnami postgres Helm chart")," does specify certain configurations that would conflict when running using OpenShift\u2019s default security profile; specifically within the ",(0,o.kt)("inlineCode",{parentName:"p"},"securityContext")," properties of the Statefulset. Fortunately, the Bitnami postgres chart does contain options that can be used to modify the default configuration to enable a deployment into OpenShift without requiring additional configurations that would need to be employed. All that needs to be configured is to set ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled: false")," within the pod level, container level and default ",(0,o.kt)("inlineCode",{parentName:"p"},"securityContext")," properties within the Values file as shown below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"postgresql:\n  primary:\n    securityContext:\n      enabled: false\n    podSecurityContext:\n      enabled: false\n    containerSecurityContext:\n      enabled: false\n")),(0,o.kt)("h2",{id:"deploying-the-backstage-helm-chart"},"Deploying the Backstage Helm Chart"),(0,o.kt)("p",null,"Taking into account each of the considerations that were discussed in the previous sections as well as the baseline configurations that need to be applied to a Fedora based container -- whether it be from the upstream Software Collections or from Red Hat\u2019s certified RHEL based images. The following is a encompassing Helm Values file that should be included in a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"values-openshift.yaml")," can be used to deploy a Red Hat based set of content (including both Backstage and PostgreSQL) in a manner that is compatible with an OpenShift environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'filename="values-openshift.yaml"',filename:'"values-openshift.yaml"'},'backstage:\n  image:\n    registry: ghcr.io\n    repository: janus-idp/redhat-backstage-build\n    tag: latest\n  extraEnvVars:\n    - name: "APP_CONFIG_app_baseUrl"\n      value: "https://{{ .Values.ingress.host }}"\n    - name: "APP_CONFIG_backend_baseUrl"\n      value: "https://{{ .Values.ingress.host }}"\n    - name: "APP_CONFIG_backend_cors_origin"\n      value: "https://{{ .Values.ingress.host }}"\n    - name: "APP_CONFIG_backend_database_client"\n      value: pg\n    - name: "APP_CONFIG_backend_database_connection_host"\n      value: "{{ include \\"backstage.postgresql.host\\" . }}"\n    - name: "APP_CONFIG_backend_database_connection_port"\n      value: \'5432\'\n    - name: "APP_CONFIG_backend_database_connection_user"\n      value: "{{ .Values.postgresql.auth.username }}"\n    - name: "APP_CONFIG_backend_database_connection_password"\n      valueFrom:\n        secretKeyRef:\n          key: postgres-password\n          name: "{{ include \\"backstage.postgresql.fullname\\" . }}"\n  installDir: /opt/app-root/src\n\ningress:\n  enabled: true\n  host: backstage.apps.example.com\n  annotations:\n    route.openshift.io/termination: "edge"\n\npostgresql:\n  enabled: true\n  database: backstage\n  postgresqlDataDir: /var/lib/pgsql/data/userdata\n  auth:\n    username: postgres\n    database: backstage\n  image:\n    registry: registry.redhat.io\n    repository: rhel9/postgresql-13\n    tag: 1-73\n  primary:\n    securityContext:\n      enabled: false\n    podSecurityContext:\n      enabled: false\n    containerSecurityContext:\n      enabled: false\n    persistence:\n      enabled: true\n      mountPath: /var/lib/pgsql/data\n    extraEnvVars:\n    - name: POSTGRESQL_ADMIN_PASSWORD\n      valueFrom:\n        secretKeyRef:\n          key: postgres-password\n          name: backstage-postgresql\n')),(0,o.kt)("p",null,"Be sure to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"ingress.host")," property with the desired hostname of the exposed Route."),(0,o.kt)("p",null,"Install the Backstage Helm chart by executing the following command that includes the location of the previously created Values file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install backstage backstage/backstage -f values-openshift.yaml\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The prior command assumes that the Helm CLI and the Backstage Helm repository have been added to the local machine. Consult prior articles for instructions on how to configure these steps.")),(0,o.kt)("p",null,"Once the Chart release is successful, confirm that not only that both Backstage and PostgreSQL pods are running, but that an edge terminated Route has been created to enable external access to the Backstage user interface. Open a web browser to the hostname defined within the Route to confirm the Backstage user interface can be accessed securely."),(0,o.kt)("p",null,"With only a few small steps as demonstrated within this article and thanks to the Backstage Helm chart, Backstage and its required dependencies can be deployed to an OpenShift environment. In no time at all, teams can begin building and consuming developer portals that are built on a hardened and secure foundation to enable organizations the ability to realize the benefits offered by Internal Development Platforms."))}d.isMDXComponent=!0}}]);