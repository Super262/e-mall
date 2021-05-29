module.exports = {
    devServer: {
        disableHostCheck: true,
        host: "localhost",
        port: 8080,
        proxy: {
            '/dev-api': {
                target: 'http://dev-mall-pre.springboot.cn',
                changeOrigin: false
            },
            '/test-api': {
                target: 'http://test-mall-pre.springboot.cn',
                changeOrigin: false
            },
            '/prod-api': {
                target: 'http://super262test01.natapp1.cc',
                changeOrigin: true,
                pathRewrite: {
                    '/prod-api': ''
                }
            },
            '/mock-api': {
                target: 'http://localhost:8080/api/user/login',
                changeOrigin: false
            }
        }
    }
}