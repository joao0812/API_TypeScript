import app from "./app";

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`Listenning on port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close();
});
