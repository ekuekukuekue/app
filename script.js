// 共通関数

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

function addPhotoToZukan(id, photoData) {
  const zukans = getZukans();
  const index = zukans.findIndex(z => z.id === id);
  if (index === -1) return;

  if (!zukans[index].photos) {
    zukans[index].photos = [];
  }
  
  zukans[index].photos.push(photoData);
  saveZukans(zukans);
}

// updateZukan 関数は不要になったため削除しました。
