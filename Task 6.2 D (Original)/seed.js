const mongoose = require('mongoose');
const Project = require('./Models/project.js');

mongoose.connect('mongodb://localhost:27017/SIT725');

const seedProjects = [
  {
    title: 'Project 1',
    image: 'images/image3.png',
    link: 'https://example.com',
    description: 'This is the first project.',
  },
  {
    title: 'Project 2',
    image: 'images/image4.jpg',
    link: 'https://example.com',
    description: 'This is the second project.',
  },
  {
    title: 'Project 3',
    image: 'images/image5.jpg',
    link: 'https://example.com',
    description: 'This is the third project.',
  },
];

Project.insertMany(seedProjects)
  .then(() => {
    console.log('Database seeded!');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
  });
