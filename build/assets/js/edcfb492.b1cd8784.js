"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8235],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=i,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return a?n.createElement(g,o(o({ref:t},h),{},{components:a})):n.createElement(g,o({ref:t},h))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={title:"Enabling Keycloak Authentication in Backstage",authors:["sabre1041"],tags:["keycloak","authentication"],description:"Enabling Keycloak Authentication in Backstage"},o="Enabling Keycloak Authentication in Backstage",s={permalink:"/blog/2023/01/17/enabling-keycloak-authentication-in-backstage",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-01-17-enabling-keycloak-authentication-in-backstage/index.mdx",source:"@site/blog/2023-01-17-enabling-keycloak-authentication-in-backstage/index.mdx",title:"Enabling Keycloak Authentication in Backstage",description:"Enabling Keycloak Authentication in Backstage",date:"2023-01-17T00:00:00.000Z",formattedDate:"January 17, 2023",tags:[{label:"keycloak",permalink:"/blog/tags/keycloak"},{label:"authentication",permalink:"/blog/tags/authentication"}],readingTime:11.86,hasTruncateMarker:!1,authors:[{name:"Andrew Block",title:"Maintainer of Janus Helm Charts & Plugin Contributor",url:"https://github.com/sabre1041",imageURL:"https://github.com/sabre1041.png",key:"sabre1041"}],frontMatter:{title:"Enabling Keycloak Authentication in Backstage",authors:["sabre1041"],tags:["keycloak","authentication"],description:"Enabling Keycloak Authentication in Backstage"},prevItem:{title:"Exploring the Flexibility of the Backstage Helm Chart",permalink:"/blog/2023/01/25/exploring-the-flexibility-of-the-backstage-helm-chart"},nextItem:{title:"Getting Started with the Backstage Helm Chart",permalink:"/blog/2023/01/15/getting-started-with-the-backstage-helm-chart"}},l={authorsImageUrls:[void 0]},c=[{value:"Backstage Configuration",id:"backstage-configuration",level:2},{value:"Configuring Keycloak",id:"configuring-keycloak",level:2},{value:"Deploying Backstage using the Backstage Helm Chart",id:"deploying-backstage-using-the-backstage-helm-chart",level:2}],h={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The software catalog is the heart of Backstage as it provides a centralized mechanism for organizing all of the assets within a particular domain. This content can include everything from services, websites, pipelines and everything in between and the catalog provides a facility for managing these assets in a declarative fashion along with assigning ownership against them. Identity records within Backstage are represented as Users (individual entities) and Groups (a collection of users) and they enable the association of ownership and policies to resources within the software catalog. The determination of who the user is and their association to a User entity within the software catalog is the core functionality of the authentication system within Backstage. Every installation of Backstage includes a number of ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.io/docs/auth/#built-in-authentication-providers"},"built-in")," authentication providers, and while GitHub is the most common, several alternatives are available to choose from including GitLab, Google and Azure."),(0,i.kt)("p",null,"Keycloak is an Open Source identity and access management tool and provides capabilities including Single Sign On (SSO), user management and support for fine grained authorization policies. In addition to these features, one of the biggest benefits of Keycloak is that it can federate identities from other external providers including many of the built-in authentication providers within Backstage. By integrating Backstage with Keycloak, a single source of truth as it relates to identity can be attained. The benefits include avoiding the process of having to manage multiple authentication providers along with allowing for a more \u201ccloud native\u201d method of authentication and authorization using the OpenID Connect (OIDC) protocol. Enabling users to authenticate against Keycloak to gain access to Backstage is a straightforward process and will be described throughout the remainder of this article."),(0,i.kt)("p",null,"Prior to performing any configuration within either Keycloak or Backstage, the first step is to better understand the architecture and the overall process. Unlike other providers, such as those that were introduced previously (GitHub, Google, etc), there is no direct integration between Backstage and Keycloak. Instead, the ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.io/docs/auth/oauth2-proxy/provider"},"OAuth2 proxy provider")," is implemented through the use of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oauth2-proxy/oauth2-proxy"},"oauth2-proxy")," to act as an intermediate for offloading the entire authentication process which passes the resulting request for Backstage to process. An overview of the entire flow is described below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"OIDC client is created within Keycloak representing the integration with Backstage and configured within the OAuth2 proxy."),(0,i.kt)("li",{parentName:"ol"},"Users attempts to access Backstage and is redirected to Keycloak by the OAuth2 proxy"),(0,i.kt)("li",{parentName:"ol"},"User authenticates against Keycloak"),(0,i.kt)("li",{parentName:"ol"},"Upon successful authentication to Keycloak, OAuth process verifies user has met all necessary requirements that are needed to access Backstage"),(0,i.kt)("li",{parentName:"ol"},"Request to Backstage for the processing of the authentication"),(0,i.kt)("li",{parentName:"ol"},"Backstage ",(0,i.kt)("a",{parentName:"li",href:"https://backstage.io/docs/auth/identity-resolver"},"Sign In Resolver")," ingests request (reading headers provided by the OAuth2 proxy) and either associates the user within an existing entry in the software catalog or a new entry is created"),(0,i.kt)("li",{parentName:"ol"},"Authentication process is complete and the user can make use of Backstage based on their level of access")),(0,i.kt)("p",null,"As this list illustrates, there are several steps involved to enable Backstage users to authenticate against Keycloak. The first step is to set up Backstage with the necessary configurations to enable the OAuth2 provider."),(0,i.kt)("h2",{id:"backstage-configuration"},"Backstage Configuration"),(0,i.kt)("p",null,"Similar to the other authentication providers that are included with Backstage, there are steps that must be completed within Backstage itself to support using Keycloak authentication by way of the OAuth 2 Proxy Provider including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adding the provider to the Backstage frontend"),(0,i.kt)("li",{parentName:"ul"},"Updating the Backstage app-config.yaml configuration file to enable the OAuth2 Proxy Provider"),(0,i.kt)("li",{parentName:"ul"},"Configuring a Sign in Resolver within the Backstage backend")),(0,i.kt)("p",null,"First, update the Backstage frontend by enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"ProxiedSignInPage")," by making the following changes in the ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/app/src/App.tsx")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'filename="packages/app/src/App.tsx" {1,5-7}',filename:'"packages/app/src/App.tsx"',"{1,5-7}":!0},"import { ProxiedSignInPage } from '@backstage/core-components';\n\nconst app = createApp({\n  // ...\n  components: {\n    SignInPage: (props) => <ProxiedSignInPage {...props} provider=\"oauth2Proxy\" />,\n  },\n});\n")),(0,i.kt)("p",null,"Next, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"oauth2Proxy")," to the list of authentication providers within the Backstage ",(0,i.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'filename="app-config.yaml"',filename:'"app-config.yaml"'},"auth:\n  providers:\n    oauth2Proxy: {}\n")),(0,i.kt)("p",null,"The final required configuration within backstage is to set up an ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.io/docs/auth/identity-resolver"},"Identity Resolver")," which will translate the parameters (headers) that are received from the OAuth2 proxy and translate them into an authenticated backstage user.\nUpdate the ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/backend/src/plugins/auth.ts")," file with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'filename="packages/backend/src/plugins/auth.ts" {1,9-40}',filename:'"packages/backend/src/plugins/auth.ts"',"{1,9-40}":!0},"import { DEFAULT_NAMESPACE, stringifyEntityRef } from '@backstage/catalog-model';\n\nexport default async function createPlugin(env: PluginEnvironment): Promise<Router> {\n  return await createRouter({\n    // ...\n    providerFactories: {\n      ...defaultAuthProviderFactories,\n      // ...\n      oauth2Proxy: providers.oauth2Proxy.create({\n        signIn: {\n          async resolver({ result }, ctx) {\n            const name = result.getHeader('x-forwarded-preferred-username');\n            if (!name) {\n              throw new Error('Request did not contain a user');\n            }\n\n            try {\n              // Attempts to sign in existing user\n              const signedInUser = await ctx.signInWithCatalogUser({\n                entityRef: { name },\n              });\n\n              return Promise.resolve(signedInUser);\n            } catch (e) {\n              // Create stub user\n              const userEntityRef = stringifyEntityRef({\n                kind: 'User',\n                name: name,\n                namespace: DEFAULT_NAMESPACE,\n              });\n              return ctx.issueToken({\n                claims: {\n                  sub: userEntityRef,\n                  ent: [userEntityRef],\n                },\n              });\n            }\n          },\n        },\n      }),\n    },\n  });\n}\n")),(0,i.kt)("p",null,"The logic included within the identity resolver above is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Obtain the username that is provided in the x-forwarded-preferred-username by the OAuth2 proxy."),(0,i.kt)("li",{parentName:"ol"},"Attempt to locate the user in the Backstage catalog",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"If found, sign in the user"))),(0,i.kt)("li",{parentName:"ol"},"If a user is not found, create a user on the fly and sign them in")),(0,i.kt)("p",null,"Once each of the actions detailed within this section have been completed, the final step is to produce a build of Backstage. Since the target environment for this demonstration will be a Kubernetes environment, a container image will be the end result of the build process. The steps for producing a container image ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.io/docs/deployment/docker"},"can be found here"),"."),(0,i.kt)("p",null,"A reference container image is located at ",(0,i.kt)("a",{parentName:"p",href:"https://quay.io/repository/ablock/backstage-keycloak"},(0,i.kt)("inlineCode",{parentName:"a"},"quay.io/ablock/backstage-keycloak:latest"))," if there was a desire to forgo producing a container image."),(0,i.kt)("h2",{id:"configuring-keycloak"},"Configuring Keycloak"),(0,i.kt)("p",null,"Now that Backstage has been configured to support OAuth based authentication, the next step is to set up and configure Keycloak as an identity provider. Keycloak supports being installed in a variety of different ways including as a standalone application or within a container. Consult the ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/guides#server"},"documentation")," for instructions on how to get started and the process involved to install Keycloak. The easiest method, especially when deploying to a Kubernetes environment, is to use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/operator/installation"},"Keycloak Operator"),". Once Keycloak has been installed and is running, launch a web browser and navigate to the web administration console and login."),(0,i.kt)("p",null,"After authenticating to Keycloak, either create a new Realm called ",(0,i.kt)("strong",{parentName:"p"},"backstage")," or select the name of an existing Realm that will be reused."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"  If you choose to leverage a realm with a name other than backstage, be sure to substitute the name\nappropriately throughout the remainder of the article.")),(0,i.kt)("p",null,"In order to demonstrate users authenticating against Backstage, several users and groups will be created within the Realm. First select ",(0,i.kt)("strong",{parentName:"p"},"Groups")," on the left hand navigation pane and then enter the names of the two groups that should be created:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Admins"),(0,i.kt)("li",{parentName:"ol"},"Users")),(0,i.kt)("p",null,"Once the groups have been provisioned, select ",(0,i.kt)("strong",{parentName:"p"},"Users")," from the left hand navigation pane and create two users with the following details:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"User 1"),(0,i.kt)("th",{parentName:"tr",align:null},"User 2"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Username"),(0,i.kt)("td",{parentName:"tr",align:null},"backstageadmin"),(0,i.kt)("td",{parentName:"tr",align:null},"backstageuser")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Email"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:backstageadmin@janus-idp.io"},"backstageadmin@janus-idp.io")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:backstageuser@janus-idp.io"},"backstageuser@janus-idp.io"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Email Verified"),(0,i.kt)("td",{parentName:"tr",align:null},"Checked"),(0,i.kt)("td",{parentName:"tr",align:null},"Checked")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"First Name"),(0,i.kt)("td",{parentName:"tr",align:null},"Backstage"),(0,i.kt)("td",{parentName:"tr",align:null},"Backstage")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Last Name"),(0,i.kt)("td",{parentName:"tr",align:null},"Admin"),(0,i.kt)("td",{parentName:"tr",align:null},"User")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Groups"),(0,i.kt)("td",{parentName:"tr",align:null},"Admins"),(0,i.kt)("td",{parentName:"tr",align:null},"Users")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create User",src:a(7419).Z,width:"1600",height:"592"})),(0,i.kt)("p",null,"After the accounts have been created, click the ",(0,i.kt)("strong",{parentName:"p"},"Credentials")," tab and then select ",(0,i.kt)("strong",{parentName:"p"},"Set Password")," to set an initial password for each account. Feel free to specify a password of your choosing for each user. Uncheck the ",(0,i.kt)("strong",{parentName:"p"},"temporary")," options so that a password reset is not required upon first login."),(0,i.kt)("p",null,"Next, an OAuth client needs to be created that will be used by the Backstage OAuth proxy. Select the ",(0,i.kt)("strong",{parentName:"p"},"Clients")," button on the left hand navigation pane and then click ",(0,i.kt)("strong",{parentName:"p"},"Create Client"),"."),(0,i.kt)("p",null,"Retain the Client Type as OpenID Connect, enter ",(0,i.kt)("strong",{parentName:"p"},"backstage")," as the Client ID, and then optionally set a name and description that should be applied to the newly created client and click ",(0,i.kt)("strong",{parentName:"p"},"Next"),"."),(0,i.kt)("p",null,"On the Capability Config page, ensure the Client authentication checkbox is enabled and click ",(0,i.kt)("strong",{parentName:"p"},"Save")," to create the client."),(0,i.kt)("p",null,"Only one configuration needs to be specified on the Settings tab, the Valid redirect URI's. This value represents the endpoint that is exposed by the OAuth2 proxy that will be sitting in front of the Backstage instance, so there is a requirement that the hostname that will be used for Backstage be known."),(0,i.kt)("p",null,"The OAuth callback url that needs to be configured in the Keycloak Valid Redirect URI's field takes the form ",(0,i.kt)("inlineCode",{parentName:"p"},"<BACKSTAGE_URL>/oauth2/callback"),". So for example, if Backstage is to be accessed at ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.example.com"},"https://backstage.example.com"),", the value that should be entered into the field would be ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.example.com/oauth2/callback"},"https://backstage.example.com/oauth2/callback"),". Once the value has been entered, click ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."),(0,i.kt)("p",null,"The next step is to obtain the Client Secret so that it can be used later on as part of the OAuth2-proxy configuration. Navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Credentials")," page and copy the value present in the ",(0,i.kt)("em",{parentName:"p"},"Client Secret")," textbox."),(0,i.kt)("h2",{id:"deploying-backstage-using-the-backstage-helm-chart"},"Deploying Backstage using the Backstage Helm Chart"),(0,i.kt)("p",null,"Given that the required prerequisites have been completed and there is a container image of Backstage available and Keycloak has been configured as an Identity Provider, the final step is to deploy Backstage. As previously mentioned, Backstage can be deployed in a variety of ways, but in this case, a deployment to a Kubernetes cluster will be used and the easiest method for deploying Backstage to Kubernetes is to use the Backstage Helm chart as it not only streamlines the deployment process, but provides the capabilities to define the required configurations to enable OAuth authentication with Keycloak. A full writeup on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/backstage/charts/tree/main/charts/backstage"},"Backstage Helm chart")," including the various configurations that it enables can be found ",(0,i.kt)("a",{parentName:"p",href:"/blog/2023/01/15/getting-started-with-the-backstage-helm-chart"},"here"),"."),(0,i.kt)("p",null,"The OAuth2 proxy that bridges the integration between Backstage and Keycloak is deployed as a sidecar container alongside Backstage. Sidecar containers can be enabled by specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"backstage.extraContainer")," Helm Value. The entire definition of the OAuth proxy container as well as the ability to templatize the required configurations is also supported."),(0,i.kt)("p",null,"Create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"values-backstage-keycloak.yaml")," with the following content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'filename="values-backstage-keycloak.yaml"',filename:'"values-backstage-keycloak.yaml"'},"backstage:\n  image:\n    registry: quay.io\n    repository: ablock/backstage-keycloak\n    tag: latest\n  extraEnvVars:\n    - name: 'APP_CONFIG_app_baseUrl'\n      value: 'https://{{ .Values.ingress.host }}'\n    - name: 'APP_CONFIG_backend_baseUrl'\n      value: 'https://{{ .Values.ingress.host }}'\n    - name: 'APP_CONFIG_backend_cors_origin'\n      value: 'https://{{ .Values.ingress.host }}'\n\n  extraContainers:\n    - name: oauth2-proxy\n      env:\n        - name: OAUTH2_PROXY_CLIENT_ID\n          value: '{{ required \"Keycloak Client Secret is Required\" .Values.keycloak.clientId }}'\n        - name: OAUTH2_PROXY_CLIENT_SECRET\n          value: '{{ required \"Keycloak Client Secret is Required\" .Values.keycloak.clientSecret }}'\n        - name: OAUTH2_PROXY_COOKIE_SECRET\n          value: '{{ default (randAlpha 32 | lower | b64enc) .Values.keycloak.cookieSecret }}'\n        - name: OAUTH2_PROXY_OIDC_ISSUER_URL\n          value: '{{ required \"Keycloak Issuer URL is Required\" .Values.keycloak.issuerUrl }}'\n        - name: OAUTH2_PROXY_SSL_INSECURE_SKIP_VERIFY\n          value: 'true'\n      ports:\n        - name: oauth2-proxy\n          containerPort: 4180\n          protocol: TCP\n      imagePullPolicy: IfNotPresent\n      image: 'quay.io/oauth2-proxy/oauth2-proxy:latest'\n      args:\n        - '--provider=oidc'\n        - '--email-domain=*'\n        - '--upstream=http://localhost:7007'\n        - '--http-address=0.0.0.0:4180'\n        - '--skip-provider-button'\n\nservice:\n  ports:\n    backend: 4180\n    targetPort: oauth2-proxy\n\ningress:\n  enabled: true\n  host: backstage.example.com\n\nkeycloak:\n  issuerUrl: '<KEYCLOAK_URL>/realms/backstage'\n  clientId: 'backstage'\n  clientSecret: ''\n  cookieSecret: ''\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"  The specific configurations provided within this Values file defines a minimum amount of\nparameters needed to enable the integration between Backstage and Keycloak. It is recommended that\nthe configurations of the OAuth2 proxy be hardened to increase the overall level of security. See\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://oauth2-proxy.github.io/oauth2-proxy/docs/configuration/oauth_provider"},"OAuth2 proxy\ndocumentation")," for\nthe full set of supported options available.")),(0,i.kt)("p",null,"Before installing the Helm chart into the Kubernetes cluster, let\u2019s review the contents of the Values file for the significance of certain parameters. The ",(0,i.kt)("inlineCode",{parentName:"p"},"backstage.extraContainers")," parameter includes the definition of the OAuth2 Proxy and configurations are provided through a combination of container arguments and environment variables."),(0,i.kt)("p",null,"The location of the Keycloak instance is specified by providing the location of the OpenID Endpoint Configuration. This address can be identified within the Realm Settings page of the backstage Keycloak realm."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Realm Settings",src:a(7070).Z,width:"1600",height:"736"})),(0,i.kt)("p",null,"Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"keycloak.issuerURL")," parameter by providing the value that was obtained from the OpenID Endpoint Configuration. The ",(0,i.kt)("inlineCode",{parentName:"p"},"/.well-known/openid-configuration")," portion of the URL can be omitted as it is inferred automatically."),(0,i.kt)("p",null,"Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"keycloak.clientId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"keycloak.clientSecret")," parameters with the values that were obtained from the backstage OAuth client Credentials tab previously."),(0,i.kt)("p",null,"Next, specify the hostname of the backstage instance by updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress.host")," parameter."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"  An ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"},"Ingress\nController")," must be\npresent within the cluster in order to properly serve requests destined for Backstage from sources\noriginating outside the cluster.")),(0,i.kt)("p",null,"Finally, if there was a desire to make use of a custom Backstage image that was built previously instead of the provided image, update the set of parameters underneath the ",(0,i.kt)("inlineCode",{parentName:"p"},"backstage.image parameter"),"."),(0,i.kt)("p",null,"Alternatively, instead of updating the contents of the ",(0,i.kt)("inlineCode",{parentName:"p"},"values-backstage-keycloak.yaml")," Values file, parameters can be provided during the installation of the Helm chart by each parameter using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--set")," option of the ",(0,i.kt)("inlineCode",{parentName:"p"},"helm install")," command."),(0,i.kt)("p",null,"Before the chart can be installed, add the Backstage chart repository as well as the dependant Bitnami repository using the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo add backstage https://backstage.github.io/charts\n")),(0,i.kt)("p",null,"Install the Backstage Helm chart to the Kubernetes cluster in a new namespace called backstage by executing the following command referencing the customized Values file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm install -n backstage --create-namespace backstage backstage/backstage -f values-backstage-keycloak.yaml\n")),(0,i.kt)("p",null,"Once the Helm release is complete and the backstage container is running, open a web browser and navigate to the location of the Backstage instance."),(0,i.kt)("p",null,"When navigating to the Backstage, the OAuth2 proxy will intercept the request and redirect the browser to the Keycloak login page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Keyclock Login",src:a(1834).Z,width:"1226",height:"1072"})),(0,i.kt)("p",null,"Login with either of the users that were created previously and if successful, the browser will redirect back to the Backstage user interface."),(0,i.kt)("p",null,"Verify the user details have been passed from Keycloak to Backstage by clicking the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," button on the left hand navigation pane."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Backstage Settings",src:a(842).Z,width:"1600",height:"495"})),(0,i.kt)("p",null,"Notice how the username and email address associated with the Keycloak user were passed along to Backstage for which policies and relationships can be created to customize their interactions within the portal."),(0,i.kt)("p",null,"The integration between Keycloak and Backstage enables Backstage to take advantage of the robust identity capabilities that are provided by Keycloak. By enabling users to authenticate against an instance of Keycloak, the same set of credentials can be used to access the Backstage instance and simplifies the adoption of Backstage within organizations big and small."))}u.isMDXComponent=!0},842:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/backstage-settings-43a8a1d9d971fa629bf96e08977a27e5.png"},7419:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-user-9a94bd8b5982c310309a2ec737e01bb0.png"},1834:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak-login-03b0d51e39a2efafe4d4acedd2003618.png"},7070:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/realm-settings-d81e735012a5785a56848eab779ef6bc.png"}}]);