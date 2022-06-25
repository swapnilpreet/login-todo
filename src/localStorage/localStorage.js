function loadData(key) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse;
    return data;
  } catch (err) {
    return undefined;
  }
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { loadData, saveData };
