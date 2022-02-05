(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5330:function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.LunrWorkQueryService=void 0;const o=r(5578),i=n(r(8437)),s=n(r(4672)),a=r(8166)("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");class l{constructor(t){this.configuration=t.configuration,this.dataset=t.dataset,this.index=(0,i.default)((function(){var e;this.field("abstract"),this.field("title");const r={},n=null!==(e=t.configuration.workProperties)&&void 0!==e?e:[];for(const t of n){if(!t.searchable)continue;const e=t.uri,n=l.encodeFieldName(e);r[e]=n,this.field(n)}this.ref("uri");for(const o of t.dataset.works){const t={title:o.title,uri:o.uri};o.abstract&&(t.abstract=o.abstract.toString());for(const e of n){const n=r[e.uri];if(n)for(const r of o.propertyValues(e.uri))t[n]=r.value}this.add(t)}}))}static encodeFieldName(t){return a.encode((new TextEncoder).encode(t))}facetizeWorks(t){const{filters:e,valueFacetValueThumbnailSelector:r,works:n}=t,o=[];for(const i of e)switch(i.type){case"CollectionValue":{const t={};let e=0;for(const o of n){o.collectionUris&&0!==o.collectionUris.length||e++;for(const e of o.collectionUris){const n=t[e];if(n)n.count++;else{const n=this.dataset.collectionByUri(e);t[e]={count:1,label:n.title,thumbnail:r?l.toValueFacetValueThumbnail(n.thumbnail(r)):null,value:e}}}}const i={type:"CollectionValue",unknownCount:e,values:Object.keys(t).map((e=>t[e]))};o.push(i);break}case"InstitutionValue":{const t={};for(const o of n){const e=t[o.institutionUri];if(e)e.count++;else{const e=this.dataset.institutionByUri(o.institutionUri);t[o.institutionUri]={count:1,label:e.name,thumbnail:r?l.toValueFacetValueThumbnail(e.thumbnail(r)):null,value:o.institutionUri}}}const e={type:"InstitutionValue",unknownCount:0,values:Object.keys(t).map((e=>t[e]))};o.push(e);break}case"StringPropertyValue":{const t=i;let e=0;const s={};for(const o of n){let n=!1;for(const e of o.propertyValues(t.propertyUri)){const t=e.value,o=s[t];o?o.count++:s[t]={count:1,label:e.label,value:t,thumbnail:r?l.toValueFacetValueThumbnail(e.thumbnail(r)):null},n=!0}n||e++}const a={propertyUri:t.propertyUri,type:"StringPropertyValue",unknownCount:e,values:Object.keys(s).map((t=>s[t]))};o.push(a);break}}return o}filterWorks(t){const{filters:e,works:r}=t;let n=r;for(const o of e)switch(o.type){case"CollectionValue":n=n.filter((t=>l.testValueFilter(o,t.collectionUris)));break;case"InstitutionValue":n=n.filter((t=>l.testValueFilter(o,[t.institutionUri])));break;case"StringPropertyValue":n=n.filter((t=>l.testValueFilter(o,t.propertyValues(o.propertyUri).map((t=>t.value)))))}return n}getWorkAgents(t,e){const{agentJoinSelector:r,limit:n,offset:i}=t;return(0,s.default)(!!e,"query must be defined"),(0,s.default)(n>0,"limit must be > 0"),(0,s.default)(i>=0,"offset must be >= 0"),new Promise((t=>{const s=this.filterWorks({filters:e.filters,works:this.searchWorks(e)}),a={};for(const e of s)for(const t of e.agents)a[t.agent.uri]||(a[t.agent.uri]=t.agent);const l=Object.keys(a).map((t=>a[t])).sort(((t,e)=>t.name.localeCompare(e.name))),u=l.slice(i,i+n);t({dataset:new o.DataSubsetter({completeDataset:this.dataset,configuration:this.configuration}).agentsDataset(u,r),totalWorkAgentsCount:l.length,workAgentUris:u.map((t=>t.uri))})}))}getWorks(t,e){const{limit:r,offset:n,valueFacetValueThumbnailSelector:i,workJoinSelector:a}=t;return(0,s.default)(!!e,"query must be defined"),(0,s.default)(r>0,"limit must be > 0"),(0,s.default)(n>=0,"offset must be >= 0"),new Promise((t=>{const s=this.searchWorks(e),l=this.facetizeWorks({filters:e.filters,valueFacetValueThumbnailSelector:i,works:s}),u=this.filterWorks({filters:e.filters,works:s}),c=(e.text?u:u.concat().sort(((t,e)=>t.title.localeCompare(e.title)))).slice(n,n+r),f=new o.DataSubsetter({completeDataset:this.dataset,configuration:this.configuration}).worksDataset(c,a);console.debug("Search results dataset:",Object.keys(f).map((t=>`${t}: ${f[t].length}`)).join(", ")),t({dataset:f,facets:l,totalWorksCount:u.length})}))}searchWorks(t){return t.text?this.index.search(t.text).map((({ref:t})=>this.dataset.workByUri(t))):this.dataset.works}static testValueFilter(t,e){var r,n;if(0===e.length&&t.excludeUnknown)return!1;const o=null!==(r=t.excludeValues)&&void 0!==r?r:[],i=null!==(n=t.includeValues)&&void 0!==n?n:[];if(0===o.length&&0===i.length)return!0;if(o.length>0)for(const s of e)if(o.some((t=>t===s)))return!1;if(i.length>0){let t=!1;for(const r of e)if(i.some((t=>t===r))){t=!0;break}if(!t)return!1}return!0}static toValueFacetValueThumbnail(t){var e,r,n,o;if(!t)return null;const i=t.src;if(!i)return null;const s=t.rights;return{exactDimensions:t.exactDimensions,maxDimensions:t.maxDimensions,rights:s?{creators:s.creators.map((t=>t.toString())),holders:s.holders.map((t=>t.toString())),license:null!==(r=null===(e=s.license)||void 0===e?void 0:e.toString())&&void 0!==r?r:null,statement:null!==(o=null===(n=s.statement)||void 0===n?void 0:n.toString())&&void 0!==o?o:null}:null,src:i}}getWorkEvents(t,e){const{limit:r,offset:n,requireDate:i,workEventJoinSelector:a}=t;return(0,s.default)(!!e,"query must be defined"),(0,s.default)(r>0,"limit must be > 0"),(0,s.default)(n>=0,"offset must be >= 0"),new Promise((t=>{const s=this.filterWorks({filters:e.filters,works:this.searchWorks(e)}).flatMap((t=>t.events.filter((t=>!i||null!==t.sortDate)))).sort(((t,e)=>t.compareByDate(e))),l=s.slice(n,n+r);t({dataset:new o.DataSubsetter({completeDataset:this.dataset,configuration:this.configuration}).workEventsDataset(s,a),totalWorkEventsCount:s.length,workEventUris:l.map((t=>t.uri))})}))}getWorkLocations(t,e){return(0,s.default)(!!e,"query must be defined"),new Promise((t=>{t({workLocations:this.filterWorks({filters:e.filters,works:this.searchWorks(e)}).flatMap((t=>t.locations.map((e=>({location:{lat:e.location.lat,long:e.location.long},role:e.role,title:e.title,work:{title:t.title,uri:t.uri}})))))})}))}}e.LunrWorkQueryService=l},3753:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(5330),e)},3255:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4796)}])},4796:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return b}});var n=r(2322),o=r(2784),i=r(5578),s=r(6627),a=r(2304),l=r(3241),u=r(9097),c=r(3753),f=r(4671);function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){d(t,e,r[e])}))}return t}function m(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=(0,r(5237).default)((function(){return Promise.all([r.e(164),r.e(381)]).then(r.bind(r,3381)).then((function(t){return t.WorkLocationsMap}))}),{loadableGenerated:{webpack:function(){return[3381]},modules:["index.tsx -> ../components/WorkLocationsMap"]},ssr:!1}),b=!0;e.default=function(t){var e=t.collectionUri,r=t.configuration,d=t.datasetString,b=(0,o.useMemo)((function(){return i.Dataset.parse(d)}),[d]),k=(0,o.useMemo)((function(){return b.collectionByUri(e)}),[e,d]),g=(0,o.useMemo)((function(){return new c.LunrWorkQueryService({configuration:r,dataset:b})}),[r,b]),y=(0,f.useWorkSearchQueryParams)(r),v=y.onSearch,w=m(y,["onSearch"]);return(0,n.jsx)(s.A,{collection:k,configuration:r,onSearch:v,children:(0,n.jsx)(a.WorkSearchContainer,h({renderWorkLink:function(t,e){return(0,n.jsx)(u.default,{href:l.P.work(t),children:(0,n.jsx)("a",{children:e})})},workLocationsMapComponent:p,workQueryService:g},w))})}}},function(t){t.O(0,[774,890,66,90,7,410,627,888,179],(function(){return e=3255,t(t.s=e);var e}));var e=t.O();_N_E=e}]);