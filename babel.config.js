module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //vant 库 
  //npm i vant
  //npm i babel-plugin-import -D
  //再加这一段
  "plugins":[
    [
      "import",
      {
        "libraryName":"vant",
        "libraryDirectory":"es",
        "style":true
      }
    ]
  ]
}
