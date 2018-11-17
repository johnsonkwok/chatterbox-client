var Friends = {
  toggleStatus: function (username) {
    if (!this[username]) {
      this[username] = true;
    } else {
      this[username] = false;
    }
  }
};