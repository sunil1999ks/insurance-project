const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: "Access Denied: You don't have permission for this action." });
      }
      next();
    };
  };
  
  module.exports = authorizeRoles;
  