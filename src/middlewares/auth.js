const adminAuth = (req, res, next) => {
  const token = "xyz1234";
  const isAdminAuthoized = token === "xyz1234";
  if (isAdminAuthoized) {
    next();
  } else {
    res.status(403).send("Access Denied");
  }
};

const userAuth = (req, res, next) => {
  const token = "xyz1234";
  const isUserAuthoized = token === "xyz1234";
  if (isUserAuthoized) {
    next();
  } else {
    res.status(403).send("Access Denied");
  }
};

module.exports = { adminAuth , userAuth};