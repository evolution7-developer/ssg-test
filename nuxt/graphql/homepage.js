export default `
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
`