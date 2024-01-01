const middlewareLogRequest = (req, res, next) => {
    console.log("Requesting in PATH: ", req.path);
    next();
}

export default middlewareLogRequest;