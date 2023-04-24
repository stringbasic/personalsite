module.exports = {
  eleventyComputed: {
    buildTime: data => {
      const now = new Date();

      const date = ("0" + now.getDate()).slice(-2);
      const month = ("0" + (now.getMonth() + 1)).slice(-2);
      const year = now.getFullYear();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    }
  }
}
