function getZukans() {
  const json = localStorage.getItem('zukans');
  return json ? JSON.parse(json) : [];
}

function saveZukans(zukans) {
  localStorage.setItem('zukans', JSON.stringify(zukans));
}

function addZukan(name) {
  const zukans = getZukans();
  const newZukan = {
    id: Date.now().toString(),
    name: name,
    photos: []
  };
  zukans.push(newZukan);
  saveZukans(zukans);
  return newZukan.id;
}

function deleteZukan(id) {
  let zukans = getZukans();
  zukans = zukans.filter(zukan => zukan.id !== id);
  saveZukans(zukans);
}

function getZukanById(id) {
  const zukans = getZukans();
  return zukans.find(zukan => zukan.id === id);
}
