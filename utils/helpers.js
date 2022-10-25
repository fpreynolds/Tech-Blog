module.exports = {
  format_date: (date) => {
    reutnr`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
};
