const path = require('path');
const { getFileContent, setFileContent } = require('./fs');

const POSTS_FILE_PATH = path.resolve(__dirname, '..', 'data', 'users.json');

const getUsers = async () => await getFileContent(POSTS_FILE_PATH);

const setUsers = async (newUsers) => await setFileContent(POSTS_FILE_PATH, newUsers);

module.exports = {
  getUsers,
  setUsers
}
