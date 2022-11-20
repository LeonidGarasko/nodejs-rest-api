const express = require("express");
const {
  signupUserController,
  loginUserController,
  patchSubscriptionUserController,
  getCurrentUserController,
} = require("../../controllers/usersController");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  loginValidation,
} = require("../../middlewares/validationLoginMiddlware");
const { logoutMiddleware } = require("../../middlewares/logoutMiddleware");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const router = express.Router();

router.post("/signup", loginValidation, asyncWrapper(signupUserController));

router.post("/login", loginValidation, asyncWrapper(loginUserController));

router.get("/logout", asyncWrapper(logoutMiddleware));

router.get("/current", authMiddleware, asyncWrapper(getCurrentUserController));

router.patch(
  "/",
  authMiddleware,
  asyncWrapper(patchSubscriptionUserController)
);

module.exports = router;
