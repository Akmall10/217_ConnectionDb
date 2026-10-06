require('dotenv').config();
const express = require('express');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Connection DB - gunakan GET /biodata' });
});

// GET semua data biodata
app.get('/biodata', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM biodata ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Gagal mengambil data dari database' });
  }
});

// GET biodata berdasarkan id
app.get('/biodata/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM biodata WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Data tidak ditemukan' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Gagal mengambil data dari database' });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
