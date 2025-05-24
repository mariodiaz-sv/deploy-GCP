fetch('http://localhost:8080/api/notas')
  .then(res => res.json())
  .then(data => {
    const tbody = document.getElementById('tabla-notas');
    tbody.innerHTML = '';
    data.forEach(est => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${est.id}</td>
        <td>${est.nombre}</td>
        <td>${est.nota}</td>
      `;
      tbody.appendChild(fila);
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById('tabla-notas').innerHTML = `
      <tr><td colspan="3">Error al cargar datos</td></tr>
    `;
  });