Object.defineProperty(document, 'title', {
  set: function (value) {
    console.log("阻止了标题修改：", value);
    // 阻止前端修改标题
  }
});
