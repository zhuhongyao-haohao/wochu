const path = require("path")
module.exports = {
    //跨域的配置
    devServer:{
        proxy:{
            "/jog":{
                target:"http://api9.wochu.cn",
                changeOrigin:true,
                pathRewrite:{  //重写路径，当碰到/jog时，转化为“”
                    "^/jog":""
                }
            },
            "/act":{
                target:"https://wmall.wochu.cn",
                changeOrigin:true,
                pathRewrite:{  //重写路径，当碰到/jog时，转化为“”
                    "^/act":""
                }
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@common":path.join(__dirname,"./src/common"),
                "@components":path.join(__dirname,"./src/components"),
                "@lib":path.join(__dirname,"./src/lib"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@static":path.join(__dirname,"./src/static"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils"),
                "@public":path.join(__dirname,"./public")
            }
        }
    }
}