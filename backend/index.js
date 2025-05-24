const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
app.use(cors());
const notas = [
{ id: 1, nombre: "Juan", nota: 8.5 },
{ id: 2, nombre: "María", nota: 9.2 },
{ id: 3, nombre: "Pedro", nota: 7.3 }
];
app.get('/api/notas', (req, res) => {
res.json(notas);
});
app.listen(PORT, () => {
console.log(`API escuchando en http://localhost:${PORT}`);
});
