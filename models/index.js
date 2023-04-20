// model associations

const Blog = require('./blog');
const Comment = require('./comment');
const User = require('./user');

  // user_id from Blog
Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

// blog_id from Comment
Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
    as:'Blog_id'
});

// user_id from Comment
Comment.belongsTo(User, {
    foreignKey: 'user_id',
})

// user_id from Blog
User.hasMany(Blog, {
    foreignKey: 'user_id'
});

 // user_id from Comment
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

   // blog_id from Comment
Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
})

module.exports = {
    Blog,
    Comment,
    User
};