const path = require("path");
const router = require("express").Router();
const visionRoutes = require("./api/visionRoutes");
const rateBeerRoutes = require("./api/rateBeerRoutes");
const beerRoute = require("./api/beerRoute");
const userController = require("../controllers/user_controller");
const beerController = require("../controllers/beer_controller");
const reviewController = require("../controllers/review_controller");

// API Routes
router.use("/api/vision", visionRoutes);
// router.use("/api/ratebeer", rateBeerRoutes);
router.use("/api/identifybeer", beerRoute);

router.use("/api/user", userController);
router.use("/api/beers", beerController);
router.use("/api/reviews", reviewController);
router.use("/api/postReview", reviewController);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;