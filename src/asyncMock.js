const products = [
    {
      id: '1',
      name: 'CLASSIC PEACE LILY',
      price: "$18",
      category: 'plant',
      img: 'https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg',
      stock: 8,
      description: 'Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbon and butterfly pick.',
      subDescription: 'POPULAR HOUSE PLANT'
    },

    {
      id: '2',
      name: 'Jean Small',
      price: "$2000",
      category: 'celular',
      img: 'https://gtbfashion.com.pe/wp-content/uploads/2022/12/DSC07540-Editar.jpg',
      stock: 10,
      description: 'Descripcion de Iphone 12',
      subDescription: 'POPULAR HOUSE PLANT'
    },

    {
      id: '3',
      name: 'Iphone 20',
      price: "$2000",
      category: 'celular',
      img: 'https://images.pexels.com/photos/1290515/pexels-photo-1290515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stock: 10,
      description: 'Descripcion de Iphone 12',
      subDescription: 'POPULAR HOUSE PLANT'
    },

    {
      id: '4',
      name: 'Cuadro antiguo',
      price: "$2000",
      category: 'celular',
      img: 'https://images.pexels.com/photos/8123024/pexels-photo-8123024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stock: 10,
      description: 'Descripcion de Iphone 12',
      subDescription: 'POPULAR HOUSE PLANT'
    },



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