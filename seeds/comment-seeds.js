const { Comment } = require('../models');

const CommentData = [
    {
        comment: "BLAH BLAH BLAH 1",
        blog_id: 1,
        user_id: 2
    },
    {
        comment: "BLAH BLAH BLAH 2",
        blog_id: 2,
        user_id: 3
    },
    {
        comment: "BLAH BLAH BLAH 3",
        blog_id: 3,
        user_id: 1
    }

];

const seedComments = () => Comment.bulkCreate(CommentData);

module.exports = seedComments;