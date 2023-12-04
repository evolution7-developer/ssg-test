export default `
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
`;
