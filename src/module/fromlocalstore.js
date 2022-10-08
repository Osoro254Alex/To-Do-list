// Retrieve from localstorage
const getLocalStore = () => JSON.parse(localStorage.getItem('arraylist'));

export default (getLocalStore);