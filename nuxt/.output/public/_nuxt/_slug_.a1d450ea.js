import{o as t,c as s,q as d,a as c,t as l,s as u,F as p,u as m,v as g,x as r,b as y}from"./entry.54622b68.js";import{u as x}from"./craft-api.84503f60.js";const h=`
pageBuilder {
    ... on pageBuilder_MatrixField {
        ... on MatrixBlockInterface {
            ... on pageBuilder_image_BlockType {
                typeHandle
                id
                source {
                    title
                    srcset(sizes: ["400w", "800w", "1400w"])
                }
                caption
            }
            ... on pageBuilder_text_BlockType {
                editor
                typeHandle
                id
            }
        }
    }
}
`,f=o=>`
    {
        entry(section: "blog", slug: "${o}") {
            title
            ... on blog_default_Entry {
                image {
                    title
                    srcset(sizes: ["400w", "800w", "1400w"])
                }
                plainText
                ${h}
            }
        }
    }
`,B=["innerHTML"],w={key:1,class:"text-center italic"},k=["srcset","alt"],$={key:0},H={__name:"PageBuilder",props:{blocks:{type:Array,required:!0}},setup(o){return(n,i)=>(t(!0),s(p,null,d(o.blocks,e=>(t(),s("div",{key:e.id,class:"my-20"},[e.typeHandle==="text"?(t(),s("div",{key:0,innerHTML:e.editor},null,8,B)):e.typeHandle==="image"?(t(),s("figure",w,[c("img",{class:"w-1/2 mb-2 mx-auto",srcset:e.source[0].srcset,alt:e.source[0].title},null,8,k),e.caption?(t(),s("figcaption",$,l(e.caption),1)):u("",!0)])):u("",!0)]))),128))}},T={class:"container mx-auto"},v=["srcset","alt"],b={class:"text-3xl font-bold text-center"},M={class:"text-2xl font-bold text-center"},L={__name:"[[slug]]",async setup(o){let n,i;const e=m(),{data:_}=([n,i]=g(()=>x(f(e.params.slug))),n=await n,i(),n),{entry:a}=_.value.data;return(A,C)=>(t(),s("div",T,[r(a).image.length?(t(),s("img",{key:0,class:"w-1/5 my-12 mx-auto",srcset:r(a).image[0].srcset,alt:r(a).image[0].title},null,8,v)):u("",!0),c("h1",b,l(r(a).title),1),c("h2",M,l(r(a).plainText),1),y(H,{blocks:r(a).pageBuilder},null,8,["blocks"])]))}};export{L as default};
