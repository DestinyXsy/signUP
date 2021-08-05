import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

function rewriteImport(content) {
    return content.replace(/from ['"]([^'"]+)['"]/g, function (s0, s1) {
        // . ../ /开头的，都是相对路径
        if (s1[0] !== '.' && s1[1] !== '/') {
            return `from '/@modules/${s1}'`
        } else {
            return s0
        }
    })
}


if (url.endsWith('.js')) {
    // js文件
    const p = path.resolve(__dirname, url.slice(1))
    ctx.type = 'application/javascript'
    const content = fs.readFileSync(p, 'utf-8')
    ctx.body = rewriteImport(content)
}