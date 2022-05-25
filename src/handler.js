export const handler = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url.includes('/movies')) {
    res.writeHead(200);
    res.end(JSON.stringify({ movies: [] }));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ statusCode: 404, message: 'Not Found' }));
}
