const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const assignmentsRoutes = require("./routes/assignments");

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://cloudlovesu:10012004@cluster0.9a6gkmo.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('✅ MongoDB successfully connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Подключение маршрутов
app.use("/api/assignments", assignmentsRoutes);

// Запуск сервера
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
