var usersService = {
  getUsers: function(req, res, next) {
    res.status(200).send([]);
  },
};

module.exports = usersService;