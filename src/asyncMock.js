const products = [
  {
    id: '1',
    name: 'CLASSIC PEACE LILY',
    price: "$18",
    category: 'plants',
    img: 'https://falabella.scene7.com/is/image/FalabellaPE/881999884_1?wid=800&hei=800&qlt=70',
    stock: 10,
    description: 'Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbon and butterfly pick.',
    subDescription: 'POPULAR HOUSE PLANT'
  },

  {
    id: '2',
    name: 'Jean Small',
    price: "$70",
    category: 'clothes',
    img: 'https://gtbfashion.com.pe/wp-content/uploads/2022/12/DSC07540-Editar.jpg',
    stock: 10,
    description: 'Jean Small is a classic denim jean perfect for everyday wear.',
    subDescription: 'TRENDY DENIM'
  },

  {
    id: '3',
    name: 'Iphone 20',
    price: "$2000",
    category: 'electronics',
    img: 'https://xiaomiperu.com/media/magefan_blog/foto1_1_.jpg',
    stock: 10,
    description: 'The Iphone 20 is the latest innovation in smartphone technology, featuring advanced camera capabilities and enhanced performance.',
    subDescription: 'STATE-OF-THE-ART TECHNOLOGY'
  },

  {
    id: '4',
    name: 'Cuadro antiguo',
    price: "$2500",
    category: 'collectibles',
    img: 'https://images.pexels.com/photos/8123024/pexels-photo-8123024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stock: 10,
    description: 'This antique painting captures the essence of a bygone era, adding a touch of elegance to any room.',
    subDescription: 'TIMELESS MASTERPIECE'
  },

  {
    id: '5',
    name: 'Bicicleta',
    price: "$2000",
    category: 'others',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    stock: 10,
    description: 'Hit the trails with this durable and versatile bicycle, designed for adventure seekers.',
    subDescription: 'ULTIMATE OUTDOOR COMPANION'
  },

  {
    id: '6',
    name: 'Fiddle Leaf Fig',
    price: '$56',
    category: "plants",
    img: 'https://www.espineiracj.es/sites/default/files/styles/producto_teaser_370x370_/public/productos/1004132.jpg?itok=VkKW8f7V',
    stock: 10,
    description: 'The Fiddle Leaf Fig is a stunning indoor plant with large, violin-shaped leaves, adding a touch of elegance to any space.',
    subDescription: 'NATURAL STATEMENT PIECE'
  },

  {
    id: '7',
    name: 'Tshirt medium',
    price: '$20',
    category: 'clothes',
    img: 'https://rematexperu.com/cdn/shop/products/31_54bab928-3963-4452-b95d-19cac64c793e_800x.png?v=1668045776',
    stock: 10,
    description: 'This medium-sized T-shirt offers both style and comfort, perfect for casual outings.',
    subDescription: 'EVERYDAY ESSENTIAL'
  },

  {
    id: '8',
    name: 'Laptop gamer',
    price: '$3400',
    category: 'electronics',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwXx-4cg5_1NkLrMJLlxjJKZPshpxRbTzhHVrOu9kYWtLrWVPdMuVt2ZjjHERqqMNobo&usqp=CAU',
    stock: 10,
    description: 'The ultimate gaming experience awaits with this high-performance gaming laptop, equipped with cutting-edge graphics and processing power.',
    subDescription: 'POWERFUL GAMING COMPANION'
  },

  {
    id: '9',
    name: 'Sculpture',
    price: '$250',
    category: 'collectibles',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJ_iPmTbvF5Cmck0b1yDuHoADmujS5Oats6uhm8N90P8JPT-y6dm2WL5Ksy0AOSyJAKo&usqp=CAU',
    stock: 10,
    description: 'This exquisite sculpture embodies the beauty of human form and expression, making it a timeless addition to any art collection.',
    subDescription: 'ELEGANT ARTISTRY'
  },

  {
    id: '10',
    name: 'Electric screwdriver',
    price: '$500',
    category: 'others',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhToLxbmFITCNcnoLMShWJBYlbBytEwGhKeOWqNLNzoA&s',
    stock: 10,
    description: 'Get the job done quickly and efficiently with this powerful electric screwdriver, perfect for DIY enthusiasts.',
    subDescription: 'PRECISION TOOL'
  }
];
  
  export function getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  }

  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(()=>{
        resolve(products.find(prod => prod.id === productId))
      }, 500)
    })
  }

  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('filtrando por categoria...');
        resolve(products.filter(prod => prod.category.toString() === categoryId.toString()))
      }, 500);
    });
  }