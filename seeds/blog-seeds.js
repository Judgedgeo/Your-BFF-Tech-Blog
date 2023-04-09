const { Blog } = require('../models');

const BlogData = [
    {
        title: 'Test Blog #1',
        description: 'Test description #1',
        user_id: 1
    },
    {
        title: 'Test Blog #2',
        description: 'Test description #2',
        user_id: 2
    },
    {
        title: 'Test Blog #3',
        description: 'Test description #3',
        user_id: 3
    },
];

const seedBlogs = () => Blog.bulkCreate(BlogData);
module.exports = seedBlogs;