module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    const errorMessages = err.details.map(({ message }) => message).join('\n')
    return res.status(401).send(errorMessages);
  }

  res.status(500).send(err.message);
}
