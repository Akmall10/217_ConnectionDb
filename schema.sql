-- Jalankan di psql / pgAdmin
CREATE DATABASE mahasiswa;

-- Setelah itu connect ke database mahasiswa (\c mahasiswa), lalu:
CREATE TABLE biodata (
  id    SERIAL PRIMARY KEY,
  nama  VARCHAR(100) NOT NULL,
  nim   VARCHAR(20)  NOT NULL,
  kelas VARCHAR(20)  NOT NULL
);

-- Contoh data (ganti dengan data kamu)
INSERT INTO biodata (nama, nim, kelas) VALUES
  ('Akmall', '20240140217', 'E');
