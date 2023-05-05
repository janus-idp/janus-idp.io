"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2500],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,m=p["".concat(l,".").concat(u)]||p[u]||g[u]||o;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6204:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"Getting Started with the Backstage Helm Chart",authors:["sabre1041"],tags:["Helm"],description:"Getting Started with the Backstage Helm Chart, first of a blog series"},i="Getting Started with the Backstage Helm Chart (Part 1)",s={permalink:"/blog/2023/01/15/getting-started-with-the-backstage-helm-chart",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-01-15-getting-started-with-the-backstage-helm-chart/index.mdx",source:"@site/blog/2023-01-15-getting-started-with-the-backstage-helm-chart/index.mdx",title:"Getting Started with the Backstage Helm Chart",description:"Getting Started with the Backstage Helm Chart, first of a blog series",date:"2023-01-15T00:00:00.000Z",formattedDate:"January 15, 2023",tags:[{label:"Helm",permalink:"/blog/tags/helm"}],readingTime:4.715,hasTruncateMarker:!1,authors:[{name:"Andrew Block",title:"Maintainer of Janus Helm Charts & Plugin Contributor",url:"https://github.com/sabre1041",imageURL:"https://github.com/sabre1041.png",key:"sabre1041"}],frontMatter:{title:"Getting Started with the Backstage Helm Chart",authors:["sabre1041"],tags:["Helm"],description:"Getting Started with the Backstage Helm Chart, first of a blog series"},prevItem:{title:"Enabling Keycloak Authentication in Backstage",permalink:"/blog/2023/01/17/enabling-keycloak-authentication-in-backstage"},nextItem:{title:"Newly Released Backstage plugins from the Janus IDP community",permalink:"/blog/2022/12/21/newly-released-backstage-plugins"}},l={authorsImageUrls:[void 0]},c=[{value:"Installing Helm",id:"installing-helm",level:2},{value:"Deploying to Kubernetes",id:"deploying-to-kubernetes",level:2}],h={toc:c},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Red Hat ",(0,r.kt)("a",{parentName:"p",href:"https://developers.redhat.com/articles/2022/10/24/red-hat-joins-backstageio-community"},"recently announced")," its intention of joining the Backstage community to help shepherd the adoption of Internal Development Platforms more broadly. While there are many aspects that one needs to consider when establishing an IDP, where and how the platform will be deployed is certainly near the top of the list. Backstage can be deployed on a variety of target systems ranging from traditional infrastructure (physical servers or virtual machines) to more cloud native options. Given the popularity of Kubernetes these days, it has become a common choice for running applications and Backstage is no exception to the rule. The Janus project is Red Hat\u2019s upstream community for running Internal Development Platforms and in addition to a series of ",(0,r.kt)("a",{parentName:"p",href:"/blog/2022/12/21/newly-released-backstage-plugins"},"Backstage plugins")," that have been recently developed, it has been working with the community to simplify the process for deploying Backstage on Kubernetes. Deploying an application in Kubernetes can take on many forms, and given that the Helm package manager has become the de facto standard for deploying applications on Kubernetes, the Janus project in conjunction with the greater Backstage community have come together to establish a canonical ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/charts"},"Helm chart")," for deploying and maintaining Backstage on Kubernetes. This article will describe how easy it is to get started with the Backstage Helm chart so that an instance of Backstage can be up and running on Kubernetes in no time."),(0,r.kt)("h2",{id:"installing-helm"},"Installing Helm"),(0,r.kt)("p",null,"Helm is a versatile tool and has been integrated into a number of popular solutions as its adoption grows. However, the simplest way to demonstrate the use of the Backstage Helm chart is to utilize the standalone command line tool from a local machine. Download and install the Helm CLI from the Helm website using the method of your choosing for the target Operating System."),(0,r.kt)("p",null,"Once Helm has been installed, add the backstage Helm chart repository and its dependent repository using the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo add backstage https://backstage.github.io/charts\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"  The Backstage Helm chart is also available as an OCI artifact. However, the steps described in\nthis article will focus on the installation from a Helm Chart repository. Instructions on how to\nleverage the chart from an OCI registry can be found on the chart GitHub project repository.")),(0,r.kt)("h2",{id:"deploying-to-kubernetes"},"Deploying to Kubernetes"),(0,r.kt)("p",null,"Several options are available for accessing a Kubernetes cluster, ranging from a managed cloud provider or running one locally. Let's start by using Minikube, a solution for running a Kubernetes cluster locally, as the target environment for deploying the Backstage Helm chart by first installing and configuring Minikube on the local machine based on the steps described on the ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/"},"Minikube website")," for the target Operating System."),(0,r.kt)("p",null,"Once Minikube has been installed and configured, start an instance by executing the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"  The Kubernetes CLI (kubectl) may be desired in order to perform commands against the minikube\ninstance. By default, it is not installed when minikube is installed. Follow ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/handbook/kubectl/"},"these\nsteps")," to configure kubectl on the local\nmachine.")),(0,r.kt)("p",null,"Now that the minikube instance is up running, the next step is to deploy the Backstage Helm chart to Kubernetes. Regardless of the operating environment that is used for Backstage, there are a few configuration details that need to be specified, particularly the baseUrl that will be used to access the platform. Backstage configuration properties can be provided in several ways and the Backstage Helm chart (thanks to both Helm\u2019s templating capabilities along with the ability to specify parameterized values) includes support for many of the most common types, including as environment variables, additional configuration files that are contained within ConfigMaps, and as inline configuration files that are transformed into ConfigMaps."),(0,r.kt)("p",null,"The most straightforward method for the purposes of this article is to define any configuration properties as environment variables which are then added as environment variables that are added to the Backstage container."),(0,r.kt)("p",null,"Following a similar pattern as described in the documentation related to ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/deployment/k8s"},"deploying Backstage to Kubernetes"),", create a file called values-minikube-default.yaml with the following content:"),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"backstage:\n  extraEnvVars:\n    - name: 'APP_CONFIG_app_baseUrl'\n      value: 'http://{{ .Values.ingress.host }}:7007'\n    - name: 'APP_CONFIG_backend_baseUrl'\n      value: 'http://{{ .Values.ingress.host }}:7007'\n    - name: 'APP_CONFIG_backend_cors_origin'\n      value: 'http://{{ .Values.ingress.host }}:7007`'\n\ningress:\n  enabled: false\n  host: localhost\n")),(0,r.kt)("p",null,"Environment variables with the prefix APP_CONFIG are eligible to be interpreted by Backstage as configuration properties and any field underneath the extraEnvVars property will be added to the Backstage container. The full list of how Backstage configuration properties can be defined can be found here. Also note that by default, the Backstage Helm chart creates an Ingress resource to expose Backstage outside of the Kubernetes cluster. However, minikube does not contain an Ingress controller in its default state. To access Backstage, the port-forward capability of kubectl will be used."),(0,r.kt)("p",null,"Deploy Backstage to minikube by executing the following command including specifying the Values file created previously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install -n backstage --create-namespace backstage backstage/backstage -f values-minikube-default.yaml\n")),(0,r.kt)("p",null,"The preceding command deploys Backstage in a new namespace called backstage. Confirm the Backstage pod is running by executing the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n backstage\n")),(0,r.kt)("p",null,"Now, forward a local port to gain access to the Backstage service from the local machine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward -n backstage svc/backstage 7007:7007\n")),(0,r.kt)("p",null,"Open a web browser and navigate to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:7007"},"http://localhost:7007")," to view the deployed instance of Backstage."),(0,r.kt)("p",null,"And just like that, after only a few steps, Backstage has been deployed to Kubernetes. Establishing an instance of Backstage within a Kubernetes environment is just the beginning of the journey towards achieving a robust developer platform within an organization. With the help of the Backstage Helm chart, realizing this goal becomes much more attainable."))}g.isMDXComponent=!0}}]);