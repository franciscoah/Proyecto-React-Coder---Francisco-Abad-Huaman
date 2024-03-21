const products = [
    {
      id: '1',
      name: 'Bicicleta Z34',
      price: "$1900",
      category: 'celular',
      img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      stock: 25,
      description: 'Descripcion de Iphone 12',
    },

    {
      id: '2',
      name: 'Jean Small',
      price: "$2000",
      category: 'celular',
      img: 'https://gtbfashion.com.pe/wp-content/uploads/2022/12/DSC07540-Editar.jpg',
      stock: 10,
      description: 'Descripcion de Iphone 12',
    },

    {
      id: '3',
      name: 'Iphone 20',
      price: "$2000",
      category: 'celular',
      img: 'https://images.pexels.com/photos/1290515/pexels-photo-1290515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stock: 10,
      description: 'Descripcion de Iphone 12',
    },

    {
      id: '4',
      name: 'Cuadro antiguo',
      price: "$2000",
      category: 'celular',
      img: 'https://images.pexels.com/photos/8123024/pexels-photo-8123024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stock: 10,
      description: 'Descripcion de Iphone 12',
    },

  ];
  
  export function getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  }