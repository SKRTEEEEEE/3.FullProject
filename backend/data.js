import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Adan',
      email: 'admin@example.com',
      password: bcrypt.hashSync('queen420'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      //_id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //_id: '2',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p2.jpg',
      price: 20,
      countInStock: 12,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //_id: '3',
      name: 'Adidas Slim Shirt',
      slug: 'adidas-slim-shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 100,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'Adidas Slim Pant',
      slug: 'adidas-slim-pant',
      category: 'pants',
      image: '/images/p4.jpg',
      price: 70,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 12,
      description: 'high quality product',
    },
  ],
};

export default data;
