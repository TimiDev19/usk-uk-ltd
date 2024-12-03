import products from  './src/helpers/products'

const generateMetadata = (product) => {
    return {
        title: `${product.name} - ${product.description}`,
        description: product.description,
        keywords: product.keywords.join(', '),
    }
}

const metadata = products.map(generateMetadata);

export default metadata;