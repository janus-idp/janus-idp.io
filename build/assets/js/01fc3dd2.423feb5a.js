"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[442],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,d=p["".concat(u,".").concat(m)]||p[m]||h[m]||o;return a?n.createElement(d,r(r({ref:t},l),{},{components:a})):n.createElement(d,r({ref:t},l))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1325:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const o={title:"Janus Backstage Images Now Available on quay.io",authors:["sabre1041"],tags:["Quay","Plugins"],description:"Learn how to consume content hosted on quay.io, and why it matters!"},r="Janus Backstage Images Now Available on quay.io",s={permalink:"/blog/2023/03/01/janus-backstage-images-on-quay",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-01-janus-backstage-images-on-quay/index.mdx",source:"@site/blog/2023-03-01-janus-backstage-images-on-quay/index.mdx",title:"Janus Backstage Images Now Available on quay.io",description:"Learn how to consume content hosted on quay.io, and why it matters!",date:"2023-03-01T00:00:00.000Z",formattedDate:"March 1, 2023",tags:[{label:"Quay",permalink:"/blog/tags/quay"},{label:"Plugins",permalink:"/blog/tags/plugins"}],readingTime:3.53,hasTruncateMarker:!1,authors:[{name:"Andrew Block",title:"Maintainer of Janus Helm Charts & Plugin Contributor",url:"https://github.com/sabre1041",imageURL:"https://github.com/sabre1041.png",key:"sabre1041"}],frontMatter:{title:"Janus Backstage Images Now Available on quay.io",authors:["sabre1041"],tags:["Quay","Plugins"],description:"Learn how to consume content hosted on quay.io, and why it matters!"},prevItem:{title:"Topology plugin coming soon to a Backstage near you!",permalink:"/blog/2023/03/06/topology"},nextItem:{title:"Exposing your 3scale APIs through the Backstage catalog",permalink:"/blog/2023/02/28/exposing-your-3scale-apis"}},u={authorsImageUrls:[void 0]},c=[{value:"The Significance of quay.io Integration",id:"the-significance-of-quayio-integration",level:2},{value:"Security First",id:"security-first",level:3},{value:"Support Within Enterprise Environments",id:"support-within-enterprise-environments",level:3},{value:"Continued Investment of Quay as a Container Registry",id:"continued-investment-of-quay-as-a-container-registry",level:3}],l={toc:c},p="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Janus project produces container images to support many of the active initiatives within the community. These images, built on top Red Hat certified content, help provide a stable and secure base to enable use in most environments. Previously, these images were only available within the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/orgs/janus-idp/packages"},"GitHub Container Registry")," service associated with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/janus-idp/"},"janus-idp GitHub organization"),". The Janus community is happy to announce that all images produced by the Janus project are now available on ",(0,i.kt)("a",{parentName:"p",href:"https://quay.io"},"quay.io")," within the ",(0,i.kt)("a",{parentName:"p",href:"https://quay.io/organization/janus-idp"},"janus-idp organization"),". quay.io is a hosted registry service for storing and building container images and distributing other OCI artifacts. With this new offering, community members and consumers can take full advantage of the benefits now provided by sourcing container content from quay.io."),(0,i.kt)("h2",{id:"the-significance-of-quayio-integration"},"The Significance of quay.io Integration"),(0,i.kt)("p",null,"You might be wondering why serving content on quay.io is noteworthy. Let's expound upon several of these reasons:"),(0,i.kt)("h3",{id:"security-first"},"Security First"),(0,i.kt)("p",null,"Security is a top of mind concern these days, and steps should be taken to ensure that all phases of development and deployment use a secure-first mentality. It was already described how the Janus Project images use certified Red Hat container images, specifically those based on the ",(0,i.kt)("a",{parentName:"p",href:"https://catalog.redhat.com/software/base-images"},"Universal Base Image (UBI)"),". These freely available images contain the same enterprise grade packages and content as found in Red Hat Enterprise Linux (RHEL), so security and lifecycle management is top of mind."),(0,i.kt)("p",null,"Another security feature provided out-of-the-box when making use of quay.io as a container registry: image scanning. Each and every image that is published to quay.io undergoes a scan from ",(0,i.kt)("a",{parentName:"p",href:"https://quay.github.io/clair/"},"Clair")," to determine if any vulnerabilities are present within the image. Having an understanding of whether the image contains any current security concerns is important for both producers and consumers. Producers need to be able to determine whether the content they are producing contains any vulnerabilities and mitigate them appropriately. Consumers, more importantly, seek the ability to understand if the content they are leveraging includes any risks. This is crucial information to have at one's fingertips, as up to half of the content in some publicly hosted registries contain at least one critical vulnerability (",(0,i.kt)("a",{parentName:"p",href:"https://www.infoq.com/news/2020/12/dockerhub-image-vulnerabilities/"},"Reference"),"). With the Janus images hosted on quay.io, these benefits are now available."),(0,i.kt)("h3",{id:"support-within-enterprise-environments"},"Support Within Enterprise Environments"),(0,i.kt)("p",null,"Backstage along with the concepts preached by Internal Development Platforms are seeing adoption within many types of environments, including those with enterprise concerns. While every organization is unique, there are some common traits that they share - one of which is leveraging content from trusted sources. Many of these same organizations forbid accessing external resources and operate in a fully disconnected mode. For those that use externally sourced content, steps are typically put in place to enable and allow access to these assets. "),(0,i.kt)("p",null,"OpenShift, Red Hat's Kubernetes distribution, serves platform container images from quay.io. Given that any necessary approval to access external content may have been already completed to use quay.io as a source of content, no additional steps would be needed. Otherwise, adding another namespace (quay.io/janus-idp for example) as an allowed content source may be easier to have approved since other namespaces within the same registry as there is already an existing precedent in place."),(0,i.kt)("h3",{id:"continued-investment-of-quay-as-a-container-registry"},"Continued Investment of Quay as a Container Registry"),(0,i.kt)("p",null,"Hosting assets within quay.io is another example of the Janus Project supporting the Quay ecosystem. Content stored in Quay (either the hosted quay.io or self managed standalone Product Red Hat Quay) can be visualized thanks to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/janus-idp/backstage-plugins/tree/main/plugins/quay"},"Quay Backstage plugin")," providing many of the same data points, including security related data, all available within the Backstage dashboard. A full overview of the Quay Backstage plugin and its features can be found in ",(0,i.kt)("a",{parentName:"p",href:"/blog/2023/02/20/exploring-quay-registry-in-backstage"},"this article"),". The Quay Backstage plugin is just one of many plugins developed by the Janus community and can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/janus-idp/backstage-plugins"},"backstage-plugins repository")," within the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/janus-idp/"},"janus-idp GitHub organization"),"."),(0,i.kt)("p",null,"Simplifying the experience surrounding the use of an Internal Development Platform is one of the core tenets of the Janus Project, and one way to stay true to this mission is making content more readily accessible and as feature rich as possible. By serving Janus Project related OCI assets within quay.io, project contributors, community members, and consumers can take advantage of this globally hosted service and all of the features it provides."))}h.isMDXComponent=!0}}]);