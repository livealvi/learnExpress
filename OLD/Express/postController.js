exports.getAllPost = (req, res) => {
    let {
        catagory,
        page,
        filters
    } = req.query;

    res.send('Render All Post');
}

exports.getSinglePost = (req, res) => {
    res.send('I am POST = ' + req.params.postID);
}

exports.createNewPost = (req, res) => {
    res.send('Create New Post');
}

exports.updatePost = (req, res) => {
    res.send('Update Your Existing Post = ' + req.params.postID);
}

exports.deletePost = (req, res) => {
    res.send('Delete Your Existing Post = ' + req.params.postID);
}