"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8554],{3905:(e,a,t)=>{t.d(a,{Zo:()=>g,kt:()=>k});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},g=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,k=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return t?n.createElement(k,r(r({ref:a},g),{},{components:t})):n.createElement(k,r({ref:a},g))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9786:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const o={title:"Ingesting Keycloak Organizational Data into the Backstage Catalog",authors:["sabre1041"],tags:["Keycloak","plugin"],description:"Ingesting Keycloak Organizational Data into the Backstage Catalog"},r="Ingesting Keycloak Organizational Data into the Backstage Catalog",l={permalink:"/blog/2023/02/06/ingesting-keycloak-org-data-into-the-backstage-catalog",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-02-06-ingesting-keycloak-org-data-into-the-backstage-catalog/index.mdx",source:"@site/blog/2023-02-06-ingesting-keycloak-org-data-into-the-backstage-catalog/index.mdx",title:"Ingesting Keycloak Organizational Data into the Backstage Catalog",description:"Ingesting Keycloak Organizational Data into the Backstage Catalog",date:"2023-02-06T00:00:00.000Z",formattedDate:"February 6, 2023",tags:[{label:"Keycloak",permalink:"/blog/tags/keycloak"},{label:"plugin",permalink:"/blog/tags/plugin"}],readingTime:10.11,hasTruncateMarker:!1,authors:[{name:"Andrew Block",title:"Maintainer of Janus Helm Charts & Plugin Contributor",url:"https://github.com/sabre1041",imageURL:"https://github.com/sabre1041.png",key:"sabre1041"}],frontMatter:{title:"Ingesting Keycloak Organizational Data into the Backstage Catalog",authors:["sabre1041"],tags:["Keycloak","plugin"],description:"Ingesting Keycloak Organizational Data into the Backstage Catalog"},prevItem:{title:"Deploying Backstage onto OpenShift Using the Backstage Helm Chart",permalink:"/blog/2023/02/17/deploying-backstage-onto-openshift-using-helm"},nextItem:{title:"Exploring the Flexibility of the Backstage Helm Chart",permalink:"/blog/2023/01/25/exploring-the-flexibility-of-the-backstage-helm-chart"}},s={authorsImageUrls:[void 0]},c=[{value:"Backstage Configuration",id:"backstage-configuration",level:2},{value:"Configuring Keycloak",id:"configuring-keycloak",level:2},{value:"Backstage Kubernetes Deployment",id:"backstage-kubernetes-deployment",level:2}],g={toc:c},p="wrapper";function u(e){let{components:a,...o}=e;return(0,i.kt)(p,(0,n.Z)({},g,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"  This article is a followup to the article ",(0,i.kt)("a",{parentName:"p",href:"/blog/2023/01/17/enabling-keycloak-authentication-in-backstage"},"Enabling Keycloak Authentication in\nBackstage"),". It is important that the steps\noutlined within this article are completed prior as described prior to starting this article.")),(0,i.kt)("p",null,"A directory service is a common component found in organizations big and small as it includes a facility for maintaining key assets including users, groups and their relationships. The Backstage catalog provides similar capabilities to assemble not only identity records, but other resources related to various software components. Items are added to the catalog manually or they are sourced from external locations. Several plugins associated with external providers including Azure, GitHub, GitLab and LDAP, support ingesting organizational data (Users and Groups) directly into the Backstage catalog."),(0,i.kt)("p",null,"In a ",(0,i.kt)("a",{parentName:"p",href:"/blog/2023/01/17/enabling-keycloak-authentication-in-backstage"},"prior article"),", it was described how Keycloak can be used to act as an identity provider to store users and groups along with enforcing that users accessing Backstage authenticate against the Keycloak instance. Even though users are authenticated into Backstage, records are not added to the Backstage catalog, thus restricting the ability to fully utilize the capabilities of Backstage. Fortunately, a plugin has been developed by the Janus community to perform similar functionality as the other external providers to integrate Keycloak user and group entities into the Backstage catalog."),(0,i.kt)("p",null,"This article will describe the steps involved to implement its use within Backstage. The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/janus-idp/backstage-plugins/tree/main/plugins/keycloak-backend"},"keycloak-backend")," plugin is one of an increasing set of plugins found within the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/janus-idp/backstage-plugins"},"backstage-plugins repository")," that have been developed by the Janus community to expand the interoperability between Backstage and a variety of open source projects. These plugins are published within the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@janus-idp/backstage-plugin-keycloak-backend"},"@janus-idp npm repository")," which allows them to be added to Backstage with ease. Support for ingesting users and groups from Keycloak by way of the plugin only requires a few steps within Backstage itself."),(0,i.kt)("h2",{id:"backstage-configuration"},"Backstage Configuration"),(0,i.kt)("p",null,"The Backstage plugin to ingest Keycloak organizational data is implemented as a ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.io/docs/plugins/backend-plugin"},"backend plugin"),". Architecturally, Backstage is separated into two separate components: the ",(0,i.kt)("em",{parentName:"p"},"frontend")," which includes the user interface and many other user facing features, and the ",(0,i.kt)("em",{parentName:"p"},"backend")," which powers a variety of plugins including the software catalog. Since the purpose of a provider (plugin) is to synchronize organization data into the Backstage catalog, it is clear to see why it is implemented as a backend plugin."),(0,i.kt)("p",null,"Unlike the ",(0,i.kt)("inlineCode",{parentName:"p"},"oauth2Proxy")," provider which was detailed in the prior article, the Keycloak backend plugin is not included as part of the standard installation of Backstage and must be installed. Plugins that are not included by default can be installed using the ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add")," command."),(0,i.kt)("p",null,"From the Backstage root directory, execute the following command to add the Keycloak backend plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn --cwd packages/backend add @janus-idp/backstage-plugin-keycloak-backend\n")),(0,i.kt)("p",null,"Now that the plugin has been installed, register the plugin by adding the following content to the ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/backend/src/plugins/catalog.ts")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="packages/backend/src/plugins/catalog.ts" {2,7-17}',filename:'"packages/backend/src/plugins/catalog.ts"',"{2,7-17}":!0},"// ..\nimport { KeycloakOrgEntityProvider } from '@janus-idp/backstage-plugin-keycloak-backend';\n\nexport default async function createPlugin(env: PluginEnvironment): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n\n  builder.addEntityProvider(\n    KeycloakOrgEntityProvider.fromConfig(env.config, {\n      id: 'development',\n      logger: env.logger,\n      schedule: env.scheduler.createScheduledTaskRunner({\n        frequency: { hours: 1 },\n        timeout: { minutes: 50 },\n        initialDelay: { seconds: 15 },\n      }),\n    }),\n  );\n\n  // ..\n}\n")),(0,i.kt)("p",null,"Feel free to customize the values of the ",(0,i.kt)("inlineCode",{parentName:"p"},"frequency"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"initialDelay")," parameters as desired."),(0,i.kt)("p",null,"Build an updated container image according to the steps described ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.io/docs/deployment/docker"},"here")," so that it can be deployed to a Kubernetes environment."),(0,i.kt)("p",null,"The Keycloak backend plugin as well as the configurations described previously are included within the reference container image is located at ",(0,i.kt)("a",{parentName:"p",href:"https://quay.io/repository/ablock/backstage-keycloak"},"quay.io/ablock/backstage-keycloak:latest")," if there was a desire to once again forgo producing a container image."),(0,i.kt)("h2",{id:"configuring-keycloak"},"Configuring Keycloak"),(0,i.kt)("p",null,"Even though the majority of the configuration within Keycloak to populate Users, Groups and an OAuth client was completed previously, additional actions must be completed so that the Keycloak backend plugin has the necessary permissions to query the resources that are stored within the backstage Keycloak realm. Keycloak clients can be configured to act as a Service Account allowing for additional permissions to be granted to the client to query the Keycloak API."),(0,i.kt)("p",null,"To enable a Client to act as a Service Account, this capability, login to the Keycloak instance and navigate to the Keycloak Client created previously within the backstage realm and navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Capability config")," section and check the ",(0,i.kt)("strong",{parentName:"p"},"Service accounts roles")," checkbox. Click ",(0,i.kt)("strong",{parentName:"p"},"Save")," to apply the changes."),(0,i.kt)("p",null,"By default, Keycloak Service Accounts are not granted the necessary permissions to obtain user and group information within the realm. Additional configurations are needed so that the Backstage Keycloak plugin can perform user and group queries."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Login to the Keycloak instance and navigate to the backstage OAuth client within the backstage realm. Click on the Service Account roles tab so that the necessary permissions can be associated with the OAuth client.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on the ",(0,i.kt)("strong",{parentName:"p"},"Assign role")," button to associate existing roles and enable permissions against the Keycloak Service Account.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"Filter by realm roles")," dropdown and click ",(0,i.kt)("strong",{parentName:"p"},"Filter by clients")," to display client specific roles.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"realm-management")," into the textbox in order to limit the number of values that are returned.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check the following roles keeping in mind that the option to select the role may only be available within a separate page:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"query-groups"),(0,i.kt)("li",{parentName:"ul"},"query-users"),(0,i.kt)("li",{parentName:"ul"},"view-users"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Assign")," to add the roles to the backstage service account. Once completed, the values present within the Service accounts role tab is represented by the screenshot below."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Keycloak - Service accounts roles",src:t(1197).Z,width:"1600",height:"557"})),(0,i.kt)("p",null,"With the necessary Service Account roles associated with the OAuth client, the Keycloak backend plugin will be able to query the necessary information from the Keycloak API."),(0,i.kt)("h2",{id:"backstage-kubernetes-deployment"},"Backstage Kubernetes Deployment"),(0,i.kt)("p",null,"Now that both a container image of Backstage containing the necessary components to ingest Keycloak organizational data has been created and Keycloak itself has been configured to enable the Keycloak backend plugin to query the Keycloak API, the final step is to deploy an instance of Backstage to a Kubernetes environment using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/backstage/charts/tree/main/charts/backstage"},"Backstage Helm chart"),"."),(0,i.kt)("p",null,"Once again the versatility of the Backstage Helm charts allows for a wide range of options to be configured, including the ability to enable the provider by way of environment variables within the backstage container."),(0,i.kt)("p",null,"Create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"values-backstage-keycloak-plugin.yaml")," containing the Helm values that will be used to enable the Keycloak backend plugin with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'filename="values-backstage-keycloak-plugin.yaml"',filename:'"values-backstage-keycloak-plugin.yaml"'},"backstage:\n  image:\n    registry: quay.io\n    repository: ablock/backstage-keycloak\n    tag: latest\n  extraEnvVars:\n    - name: 'APP_CONFIG_app_baseUrl'\n      value: 'https://{{ .Values.ingress.host }}'\n    - name: 'APP_CONFIG_backend_baseUrl'\n      value: 'https://{{ .Values.ingress.host }}'\n    - name: 'APP_CONFIG_backend_cors_origin'\n      value: 'https://{{ .Values.ingress.host }}'\n    - name: 'APP_CONFIG_backend_cors_origin'\n      value: 'https://{{ .Values.ingress.host }}'\n    - name: 'APP_CONFIG_catalog_providers_keycloakOrg_default_baseUrl'\n      value: '{{ required \"Keycloak BaseUrl is Required\" .Values.keycloak.baseUrl }}'\n    - name: 'APP_CONFIG_catalog_providers_keycloakOrg_default_loginRealm'\n      value: '{{ required \"Keycloak Realm is Required\" .Values.keycloak.realm }}'\n    - name: 'APP_CONFIG_catalog_providers_keycloakOrg_default_realm'\n      value: '{{ required \"Keycloak Realm is Required\" .Values.keycloak.realm }}'\n    - name: 'APP_CONFIG_catalog_providers_keycloakOrg_default_clientId'\n      value: '{{ required \"Keycloak Client Secret is Required\" .Values.keycloak.clientId }}'\n    - name: 'APP_CONFIG_catalog_providers_keycloakOrg_default_clientSecret'\n      value: '{{ required \"Keycloak Client Secret is Required\" .Values.keycloak.clientSecret }}'\n\n  extraContainers:\n    - name: oauth2-proxy\n      env:\n        - name: OAUTH2_PROXY_CLIENT_ID\n          value: '{{ required \"Keycloak Client Secret is Required\" .Values.keycloak.clientId }}'\n        - name: OAUTH2_PROXY_CLIENT_SECRET\n          value: '{{ required \"Keycloak Client Secret is Required\" .Values.keycloak.clientSecret }}'\n        - name: OAUTH2_PROXY_COOKIE_SECRET\n          value: '{{ default (randAlpha 32 | lower | b64enc) .Values.keycloak.cookieSecret }}'\n        - name: OAUTH2_PROXY_OIDC_ISSUER_URL\n          value: '{{ required \"Keycloak Issuer URL is Required\" .Values.keycloak.baseUrl }}/realms/{{ required \"Keycloak Realm is Required\" .Values.keycloak.realm }}'\n        - name: OAUTH2_PROXY_SSL_INSECURE_SKIP_VERIFY\n          value: 'true'\n      ports:\n        - name: oauth-proxy\n          containerPort: 4180\n          protocol: TCP\n      imagePullPolicy: IfNotPresent\n      image: 'quay.io/oauth2-proxy/oauth2-proxy:latest'\n      args:\n        - '--provider=oidc'\n        - '--email-domain=*'\n        - '--upstream=http://localhost:7007'\n        - '--http-address=0.0.0.0:4180'\n        - '--skip-provider-button'\n\nservice:\n  ports:\n    backend: 4180\n    targetPort: oauth-proxy\n\ningress:\n  enabled: true\n  host: backstage.example.com\n\nkeycloak:\n  baseUrl: '<KEYCLOAK_URL>'\n  realm: 'backstage'\n  clientId: 'backstage'\n  clientSecret: ''\n  cookieSecret: ''\n")),(0,i.kt)("p",null,"The Keycloak backend plugin is enabled by declaring environment variables with the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"APP_CONFIG_catalog_providers_keycloakOrg_default_*")," and when rendered at runtime take a form similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"catalog:\n  providers:\n    keycloakOrg:\n      default:\n        baseUrl: <BASE_URL>\n        loginRealm: <KEYCLOAK_LOGIN_REALM>\n        realm: <KEYCLOAK_REALM>\n        clientId: <KEYCLOAK_CLIENTID>\n        clientSecret: <KEYCLOAK_CLIENTSECRET>\n")),(0,i.kt)("p",null,"Several fields require that the parameters be provided either within the Values file itself or as parameters using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--set")," option when deploying the chart."),(0,i.kt)("p",null,"Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"keycloak.baseUrl")," parameter to reference the location of the Keycloak instance along with specifying the backstage OAuth client secret within the ",(0,i.kt)("inlineCode",{parentName:"p"},"keycloak.clientSecret")," parameter. In addition, specify the hostname of the backstage instance within the ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress.host")," property. If a container image was created that includes the configurations to support not only the Keycloak backend plugin as well as OAuth integration as described in the previous article, specify the details within the ",(0,i.kt)("inlineCode",{parentName:"p"},"backstage.image")," property."),(0,i.kt)("p",null,"With the necessary parameters configured, perform an upgrade of the Backstage helm chart by executing the following command. If an existing release does not already exist, the inclusion of the ",(0,i.kt)("inlineCode",{parentName:"p"},"-i")," parameter ensures that it will be installed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade -i -n backstage --create-namespace backstage\nbackstage/backstage -f values-backstage-keycloak-plugin.yaml\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"  If the Backstage Helm chart was previously installed with persistence enabled using a random\npassword generation strategy, the chart must be uninstalled first.")),(0,i.kt)("p",null,"Once the release is complete, the Backstage user interface can be accessed via the created Ingress and continues to be governed by Keycloak based OAuth authentication. However, if the log from the Backstage container is inspected, the Keycloak backend plugin can be seen in action."),(0,i.kt)("p",null,"Execute the following command to view the Backstage container log:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n backstage logs deployment/backstage\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2022-12-24T23:24:36.299Z catalog info Reading Keycloak users and groups type=plugin class=KeycloakOrgEntityProvider taskId=KeycloakOrgEntityProvider:default:refresh taskInstanceId=a8c1693c-b5cb-439a-866d-c1b6b7754a77\n2022-12-24T23:24:36.382Z catalog info Read 2 Keycloak users and 2 Keycloak groups in 0.1 seconds. Committing... type=plugin class=KeycloakOrgEntityProvider taskId=KeycloakOrgEntityProvider:default:refresh taskInstanceId=a8c1693c-b5cb-439a-866d-c1b6b7754a77\n2022-12-24T23:24:36.386Z catalog info **Committed 2 Keycloak users and 2 Keycloak groups in 0.0 seconds.** type=plugin class=KeycloakOrgEntityProvider taskId=KeycloakOrgEntityProvider:default:refresh taskInstanceId=a8c1693c-b5cb-439a-866d-c1b6b7754a77\n")),(0,i.kt)("p",null,"Observe in the container log that the plugin identified two users and two groups from the Keycloak realm which have been imported into the backstage catalog. The contents of the Backstage catalog can be inspected by querying the Backstage API. Execute the following command to execute a command within the Backstage pod to query the API and format the results using ",(0,i.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"jq")," is not installed on the local machine, it can be removed from the command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n backstage exec -c oauth2-proxy deployment/backstage -- wget -q --output-document - "http://localhost:7007/api/catalog/entities?filter=kind=user" | jq -r\n\n[\n  {\n    "metadata": {\n      "namespace": "default",\n      "annotations": {\n        "backstage.io/managed-by-location": "url:https://keycloak.apps.cluster-cmwgv.cmwgv.sandbox2741.opentlc.com/admin/realms/backstage/users/1e703d12-cb09-4c7e-b615-7ea620725006",\n        "backstage.io/managed-by-origin-location": "url:https://keycloak.apps.cluster-cmwgv.cmwgv.sandbox2741.opentlc.com/admin/realms/backstage/users/1e703d12-cb09-4c7e-b615-7ea620725006",\n        "backstage.io/view-url": "https://keycloak.apps.cluster-cmwgv.cmwgv.sandbox2741.opentlc.com/admin/realms/backstage/users/1e703d12-cb09-4c7e-b615-7ea620725006",\n        "keycloak.org/id": "1e703d12-cb09-4c7e-b615-7ea620725006",\n        "keycloak.org/realm": "backstage"\n      },\n      "name": "backstageadmin",\n      "uid": "25f4a1bb-e035-4f3a-b618-4d16876325d7",\n      "etag": "ab5c4076701c76d9a6215a9f7e2fd5b1e6035790"\n    },\n    "apiVersion": "backstage.io/v1beta1",\n    "kind": "User",\n    "spec": {\n      "profile": {\n        "email": "backstageadmin@janus-idp.io",\n        "displayName": "Backstage Admin"\n      },\n      "memberOf": [\n        "Admins"\n      ]\n    },\n    "relations": [\n      {\n        "type": "memberOf",\n        "targetRef": "group:default/admins",\n        "target": {\n          "kind": "group",\n          "namespace": "default",\n          "name": "admins"\n        }\n      }\n    ]\n  },\n  {\n    "metadata": {\n      "namespace": "default",\n      "annotations": {\n        "backstage.io/managed-by-location": "url:https://keycloak.apps.cluster-cmwgv.cmwgv.sandbox2741.opentlc.com/admin/realms/backstage/users/90625bf5-5e63-434e-96b7-288908907134",\n        "backstage.io/managed-by-origin-location": "url:https://keycloak.apps.cluster-cmwgv.cmwgv.sandbox2741.opentlc.com/admin/realms/backstage/users/90625bf5-5e63-434e-96b7-288908907134",\n        "backstage.io/view-url": "https://keycloak.apps.cluster-cmwgv.cmwgv.sandbox2741.opentlc.com/admin/realms/backstage/users/90625bf5-5e63-434e-96b7-288908907134",\n        "keycloak.org/id": "90625bf5-5e63-434e-96b7-288908907134",\n        "keycloak.org/realm": "backstage"\n      },\n      "name": "backstageuser",\n      "uid": "96f3f8a1-aaa2-4d4c-89dc-b3e5d22aa049",\n      "etag": "ad2d9c10fbfad74bb685ad10fdca178b2869516c"\n    },\n    "apiVersion": "backstage.io/v1beta1",\n    "kind": "User",\n    "spec": {\n      "profile": {\n        "email": "backstageuser@janus-idp.io",\n        "displayName": "Backstage User"\n      },\n      "memberOf": [\n        "Users"\n      ]\n    },\n    "relations": [\n      {\n        "type": "memberOf",\n        "targetRef": "group:default/users",\n        "target": {\n          "kind": "group",\n          "namespace": "default",\n          "name": "users"\n        }\n      }\n    ]\n  }\n]\n')),(0,i.kt)("p",null,"Observe that the relationships between users and groups are also present. Groups imported to the catalog can be inspected by executing the following command to invoke the Backstage API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n backstage exec -c oauth2-proxy deployment/backstage -- wget -q --output-document - "http://localhost:7007/api/catalog/entities?filter=kind=group" | jq -r\n')),(0,i.kt)("p",null,"Now that the Backstage catalog has been populated, additional metadata will now be associated with users when they authenticate to the Backstage user interface. Launch a web browser and navigate to the Backstage user interface and login using either of the previously created Keycloak users."),(0,i.kt)("p",null,"Click on the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," button on the bottom left corner of the page. Ensure the additional relationship details (groups) are present to confirm that the authenticated user has been linked properly to the user in the catalog."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Backstage Settings - Profile identity",src:t(3928).Z,width:"1600",height:"505"})),(0,i.kt)("p",null,"The Keycloak backend plugin will run periodically based on the parameters defined within the ",(0,i.kt)("inlineCode",{parentName:"p"},"catalog.ts")," file to ensure that the Backstage catalog is updated with the current state as defined within keycloak. By providing the capability to ingest organizational data into the Backstage catalog from Keycloak, the benefits that are offered through the use of Keycloak as an identity source can be realized within Backstage."))}u.isMDXComponent=!0},3928:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/backstage-profile-identity-ad7d3333270523f0cb7a9fd5e70b0936.png"},1197:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/keycloak-service-accounts-roles-0430cab6aca3a6c0ebc9f6340f9de3d2.png"}}]);