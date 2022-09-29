const User = require("../models/User.js");
const CatchAsync = require("../utils/catch-async.js");
const ErrorObject = require("../utils/error.js");

// Delete A User
exports.deleteUser = CatchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorObject(`There is no user With the id ${req.params.id}`, 400)
    );
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
  });
});

// Update A User
exports.updateUser = CatchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorObject(`There is no user with the id ${req.params.id}`, 400)
    );
  }
  const email = req.body.email === undefined ? user.email : req.body.email;
  const fullName =
    req.body.fullName === undefined ? user.fullName : req.body.fullName;
  const update = { email, fullName };
  const updatedUser = await User.findByIdAndUpdate(req.params.id, update, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

//  Get All Users
exports.getAllUser = CatchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

//  Get One User
exports.getOneUser = CatchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorObject(`There is no user with the id ${req.params.id}`, 400)
    );
  }
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});
