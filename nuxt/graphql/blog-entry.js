import pageBuilder from '~/graphql/page-builder';

export default (slug) => (`
    {
        entry(section: "blog", slug: "${slug}") {
            title
            ... on blog_default_Entry {
                image {
                    title
                    srcset(sizes: ["400w", "800w", "1400w"])
                }
                plainText
                ${pageBuilder}
            }
        }
    }
`);