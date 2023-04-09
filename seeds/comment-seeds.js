const { Comment } = require('../models');

const CommentData = [
    {
        comment: "This is the first fake comment, meant to be on the #1 blog post and made by user with the id of 2",
        blog_id: 1,
        user_id: 2
    },
    {
        comment: "This is the second fake comment, meant to be on the #2 blog post and made by user with the id of 3",
        blog_id: 2,
        user_id: 3
    },
    {
        comment: "This is the third fake comment, meant to be on the #3 blog post and made by user with the id of 1",
        blog_id: 3,
        user_id: 1
    }

];

const seedComments = () => Comment.bulkCreate(CommentData);

module.exports = seedComments;