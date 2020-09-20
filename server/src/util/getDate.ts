export default function getDate() {
  const date = new Date();
  const day = date.getDate();
  const month = ('0' + date.getMonth()).slice(-2);
  const year = date.getFullYear();
  const hour = ('0' + date.getHours()).slice(-2);
  const minute = ('0' + date.getMinutes()).slice(-2);
  const second = ('0' + date.getSeconds()).slice(-2);

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}