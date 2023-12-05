import{v as g,c as a,a as t,t as c,x as s,s as r,F as _,q as h,o as n,b as x,w as p,e as f}from"./entry.54622b68.js";import{u as w}from"./craft-api.84503f60.js";const y=`
    {
        entry(section: "homepage") {
            ... on homepage_homepage_Entry {
                title
                plainText
                image {
                    title
                    srcset(sizes: ["400w", "800w", "1400w"])
                }
            }
        }
        articles: entries(section: "blog") {
            title
            slug
            ... on blog_default_Entry {
                image {
                    title
                    srcset(sizes: ["400w", "800w", "1400w"])
                }
            }
        }
    }
`,b={class:"container mx-auto"},k={class:"text-3xl font-bold text-center"},v={class:"text-xl font-bold text-center pt-6"},C=["srcset","alt"],N=t("h2",{class:"text-center text-2xl font-bold my-10"},"Artcles",-1),A={class:"container mx-auto grid grid-cols-3 gap-4 mb-20"},B={class:"h-32 relative"},E=["srcset","alt"],V={class:"font-bold"},q={__name:"index",async setup(z){let l,i;const{data:m}=([l,i]=g(()=>w(y)),l=await l,i(),l),{entry:o,articles:u}=m.value.data;return(F,L)=>{const d=f;return n(),a(_,null,[t("div",b,[t("h1",k,c(s(o).title),1),t("h3",v,c(s(o).plainText),1),s(o).image.length?(n(),a("img",{key:0,class:"w-1/2 my-12 mx-auto",srcset:s(o).image[0].srcset,alt:s(o).image[0].title},null,8,C)):r("",!0)]),N,t("ul",A,[(n(!0),a(_,null,h(s(u),e=>(n(),a("li",{key:e.title},[x(d,{to:/blog/+e.slug},{default:p(()=>[t("div",B,[e.image.length?(n(),a("img",{key:0,srcset:e.image[0].srcset,alt:e.image[0].title,class:"object-cover absolute w-full h-full"},null,8,E)):r("",!0)]),t("h3",V,c(e.title),1)]),_:2},1032,["to"])]))),128))])],64)}}};export{q as default};
