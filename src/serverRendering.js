export default function(req, res) {
  const HTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Isomorphic React Redux Tutorial</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
      </head>
      <body>
        <div id="app"></div>
        <script src="/assets/bundle.js"></script>
      </body>
    </html>    
  `
  res.send(HTML);
};