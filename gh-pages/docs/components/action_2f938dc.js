amis.define('docs/components/action.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Action 行为按钮",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Action 行为按钮",
    "icon": null,
    "order": 26,
    "html": "<p>Action 行为按钮，是触发页面行为的主要方法之一</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2><p>我们这里简单实现一个点击按钮弹框的交互。</p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n  \"label\": \"弹框\",\n  \"type\": \"action\",\n  \"actionType\": \"dialog\",\n  \"dialog\": {\n    \"title\": \"弹框\",\n    \"body\": \"这是个简单的弹框。\"\n  }\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E6%A0%B7%E5%BC%8F\" href=\"#%E6%A0%B7%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>样式</h2><h3><a class=\"anchor\" name=\"%E5%B0%BA%E5%AF%B8\" href=\"#%E5%B0%BA%E5%AF%B8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>尺寸</h3><p>配置<code>size</code>，显示不同尺寸</p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n  \"type\": \"button-toolbar\",\n  \"buttons\": [\n    {\n      \"type\": \"action\",\n      \"label\": \"默认尺寸\"\n    },\n    {\n      \"type\": \"action\",\n      \"label\": \"极小\",\n      \"size\": \"xs\"\n    },\n    {\n      \"type\": \"action\",\n      \"label\": \"小\",\n      \"size\": \"sm\"\n    },\n    {\n      \"type\": \"action\",\n      \"label\": \"中等\",\n      \"size\": \"md\"\n    },\n    {\n      \"type\": \"action\",\n      \"label\": \"大\",\n      \"size\": \"lg\"\n    }\n  ]\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"%E4%B8%BB%E9%A2%98\" href=\"#%E4%B8%BB%E9%A2%98\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>主题</h3><p>可以配置<code>level</code>或者<code>primary</code>，显示不同样式。</p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n  \"type\": \"button-toolbar\",\n  \"buttons\": [\n    {\n      \"type\": \"action\",\n      \"label\": \"默认\"\n    },\n    {\n      \"type\": \"action\",\n      \"label\": \"主要\",\n      \"level\": \"primary\"\n    },\n    {\n      \"type\": \"action\",\n      \"label\": \"次要\",\n      \"level\": \"secondary\"\n    },\n    {\n      \"type\": \"action\",\n      \"label\": \"成功\",\n      \"level\": \"success\"\n    },\n    {\n      \"type\": \"action\",\n      \"label\": \"警告\",\n      \"level\": \"warning\"\n    },\n    {\n      \"type\": \"action\",\n      \"label\": \"危险\",\n      \"level\": \"danger\"\n    },\n    {\n      \"type\": \"action\",\n      \"label\": \"浅色\",\n      \"level\": \"light\"\n    },\n    {\n      \"type\": \"action\",\n      \"label\": \"深色\",\n      \"level\": \"dark\"\n    },\n    {\n      \"type\": \"action\",\n      \"label\": \"链接\",\n      \"level\": \"link\"\n    }\n  ]\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"%E5%9B%BE%E6%A0%87\" href=\"#%E5%9B%BE%E6%A0%87\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>图标</h3><p>可以配置<code>icon</code>配置项，实现按钮显示图标</p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n  \"label\": \"弹框\",\n  \"type\": \"action\",\n  \"actionType\": \"dialog\",\n  \"icon\": \"fa fa-plus\",\n  \"dialog\": {\n    \"title\": \"弹框\",\n    \"body\": \"这是个简单的弹框。\"\n  }\n}\n</script></div>\n<p>如果<code>label</code>配置为空字符串，可以只显示<code>icon</code></p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n  \"label\": \"\",\n  \"type\": \"action\",\n  \"actionType\": \"dialog\",\n  \"icon\": \"fa fa-plus\",\n  \"dialog\": {\n    \"title\": \"弹框\",\n    \"body\": \"这是个简单的弹框。\"\n  }\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E6%93%8D%E4%BD%9C%E5%89%8D%E7%A1%AE%E8%AE%A4\" href=\"#%E6%93%8D%E4%BD%9C%E5%89%8D%E7%A1%AE%E8%AE%A4\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>操作前确认</h2><p>可以通过配置<code>confirmText</code>，实现在任意操作前，弹出提示框确认是否进行该操作。</p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"label\": \"ajax请求\",\n    \"type\": \"button\",\n    \"actionType\": \"ajax\",\n    \"confirmText\": \"确认要发出这个请求？\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\"\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"ajax-%E8%AF%B7%E6%B1%82\" href=\"#ajax-%E8%AF%B7%E6%B1%82\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>ajax 请求</h2><p>通过配置<code>&quot;actionType&quot;:&quot;ajax&quot;</code>和<code>api</code>，可以实现 ajax 请求。</p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"label\": \"ajax请求\",\n    \"type\": \"button\",\n    \"actionType\": \"ajax\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\"\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F%E5%90%8E-%E8%B7%B3%E8%BD%AC%E8%87%B3%E6%9F%90%E4%B8%AA%E9%A1%B5%E9%9D%A2\" href=\"#%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F%E5%90%8E-%E8%B7%B3%E8%BD%AC%E8%87%B3%E6%9F%90%E4%B8%AA%E9%A1%B5%E9%9D%A2\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>请求成功后，跳转至某个页面</h3><h5><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84-%E5%AE%9E%E7%8E%B0%E5%8D%95%E9%A1%B5%E8%B7%B3%E8%BD%AC\" href=\"#%E9%85%8D%E7%BD%AE%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84-%E5%AE%9E%E7%8E%B0%E5%8D%95%E9%A1%B5%E8%B7%B3%E8%BD%AC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置相对路径，实现单页跳转</h5><div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"label\": \"ajax请求\",\n    \"type\": \"button\",\n    \"actionType\": \"ajax\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"redirect\": \"./getting-started\"\n}\n</script></div>\n<h5><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E5%AE%8C%E6%95%B4%E8%B7%AF%E5%BE%84-%E7%9B%B4%E6%8E%A5%E8%B7%B3%E8%BD%AC%E6%8C%87%E5%AE%9A%E8%B7%AF%E5%BE%84\" href=\"#%E9%85%8D%E7%BD%AE%E5%AE%8C%E6%95%B4%E8%B7%AF%E5%BE%84-%E7%9B%B4%E6%8E%A5%E8%B7%B3%E8%BD%AC%E6%8C%87%E5%AE%9A%E8%B7%AF%E5%BE%84\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置完整路径，直接跳转指定路径</h5><div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"label\": \"ajax请求\",\n    \"type\": \"button\",\n    \"actionType\": \"ajax\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"redirect\": \"https://www.baidu.com/\"\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F%E5%90%8E-%E6%98%BE%E7%A4%BA%E5%8F%8D%E9%A6%88%E5%BC%B9%E6%A1%86\" href=\"#%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F%E5%90%8E-%E6%98%BE%E7%A4%BA%E5%8F%8D%E9%A6%88%E5%BC%B9%E6%A1%86\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>请求成功后，显示反馈弹框</h3><div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"type\": \"button\",\n    \"label\": \"ajax 反馈弹框\",\n    \"actionType\": \"ajax\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"feedback\": {\n        \"title\": \"操作成功\",\n        \"body\": \"xxx 已操作成功\"\n    }\n}\n</script></div>\n<p>更多内容查看<a href=\"./dialog#feedback-%E5%8F%8D%E9%A6%88%E5%BC%B9%E6%A1%86\">Dialog 文档</a></p>\n<h3><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89-toast-%E6%96%87%E5%AD%97\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89-toast-%E6%96%87%E5%AD%97\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义 toast 文字</h3><p>可以通过配置<code>messages</code>，自定义接口返回<code>toast</code>信息</p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"type\": \"button\",\n    \"label\": \"ajax 请求\",\n    \"actionType\": \"ajax\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"messages\": {\n        \"success\": \"成功了！欧耶\",\n        \"failed\": \"失败了呢。。\"\n    }\n}\n</script></div>\n<p><strong> 属性表 </strong></p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>api</td>\n<td><a href=\"../types/api\">Api</a></td>\n<td>-</td>\n<td>请求地址，参考 <a href=\"../types/api\">api</a> 格式说明。</td>\n</tr>\n<tr>\n<td>redirect</td>\n<td><a href=\"../concepts/template#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2\">模板字符串</a></td>\n<td>-</td>\n<td>指定当前请求结束后跳转的路径，可用 <code>${xxx}</code> 取值。</td>\n</tr>\n<tr>\n<td>feedback</td>\n<td><code>DialogObject</code></td>\n<td>-</td>\n<td>如果 ajax 类型的，当 ajax 返回正常后，还能接着弹出一个 dialog 做其他交互。返回的数据可用于这个 dialog 中。格式可参考<a href=\"/amis/docs/components/Dialog\">Dialog</a></td>\n</tr>\n<tr>\n<td>messages</td>\n<td><code>object</code></td>\n<td>-</td>\n<td><code>success</code>：ajax 操作成功后提示，可以不指定，不指定时以 api 返回为准。<code>failed</code>：ajax 操作失败提示。</td>\n</tr>\n</tbody>\n</table>\n<h2><a class=\"anchor\" name=\"%E8%B7%B3%E8%BD%AC%E9%93%BE%E6%8E%A5\" href=\"#%E8%B7%B3%E8%BD%AC%E9%93%BE%E6%8E%A5\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>跳转链接</h2><h3><a class=\"anchor\" name=\"%E5%8D%95%E9%A1%B5%E8%B7%B3%E8%BD%AC\" href=\"#%E5%8D%95%E9%A1%B5%E8%B7%B3%E8%BD%AC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>单页跳转</h3><div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\">{\n  \"body\": {\n    \"label\": \"进入介绍页\",\n    \"type\": \"button\",\n    \"level\": \"info\",\n    \"actionType\": \"link\",\n    \"link\": \"../index\"\n  }\n}\n</script></div>\n<p><strong> 属性表 </strong></p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td><code>link</code></td>\n<td>单页跳转</td>\n</tr>\n<tr>\n<td>link</td>\n<td><code>string</code></td>\n<td><code>link</code></td>\n<td>用来指定跳转地址，跟 url 不同的是，这是单页跳转方式，不会渲染浏览器，请指定 amis 平台内的页面。可用 <code>${xxx}</code> 取值。</td>\n</tr>\n</tbody>\n</table>\n<h3><a class=\"anchor\" name=\"%E7%9B%B4%E6%8E%A5%E8%B7%B3%E8%BD%AC\" href=\"#%E7%9B%B4%E6%8E%A5%E8%B7%B3%E8%BD%AC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>直接跳转</h3><div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\">{\n  \"body\": {\n    \"label\": \"打开 Baidu\",\n    \"type\": \"button\",\n    \"level\": \"success\",\n    \"actionType\": \"url\",\n    \"url\": \"http://www.baidu.com/\"\n  }\n}\n</script></div>\n<p><strong> 属性表 </strong></p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td><code>url</code></td>\n<td>页面跳转</td>\n</tr>\n<tr>\n<td>url</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>按钮点击后，会打开指定页面。可用 <code>${xxx}</code> 取值。</td>\n</tr>\n<tr>\n<td>blank</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>如果为 <code>true</code> 将在新 tab 页面打开。</td>\n</tr>\n</tbody>\n</table>\n<p><code>注意：由于 amis 平台内 http 地址会被替换成 proxy 地址，所以在 amis 平台内使用请加上 raw: 作为前缀。 比如：raw:http://www.baidu.com</code></p>\n<h2><a class=\"anchor\" name=\"%E5%BC%B9%E6%A1%86\" href=\"#%E5%BC%B9%E6%A1%86\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>弹框</h2><div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\">{\n  \"body\": {\n    \"label\": \"Dialog Form\",\n    \"type\": \"button\",\n    \"level\": \"primary\",\n    \"actionType\": \"dialog\",\n    \"dialog\": {\n      \"title\": \"表单设置\",\n      \"body\": {\n        \"type\": \"form\",\n        \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=1\",\n        \"controls\": [\n          {\n            \"type\": \"text\",\n            \"name\": \"text\",\n            \"label\": \"文本\"\n          }\n        ]\n      }\n    }\n  }\n}\n</script></div>\n<p><strong> 属性表 </strong></p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td><code>dialog</code></td>\n<td>点击后显示一个弹出框</td>\n</tr>\n<tr>\n<td>dialog</td>\n<td><code>string</code> 或 <code>DialogObject</code></td>\n<td>-</td>\n<td>指定弹框内容，格式可参考<a href=\"./dialog\">Dialog</a></td>\n</tr>\n<tr>\n<td>nextCondition</td>\n<td><code>boolean</code></td>\n<td>-</td>\n<td>可以用来设置下一条数据的条件，默认为 <code>true</code>。</td>\n</tr>\n</tbody>\n</table>\n<h2><a class=\"anchor\" name=\"%E6%8A%BD%E5%B1%89\" href=\"#%E6%8A%BD%E5%B1%89\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>抽屉</h2><div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\">  {\n    \"body\": {\n      \"label\": \"Drawer Form\",\n      \"type\": \"button\",\n      \"actionType\": \"drawer\",\n      \"drawer\": {\n        \"title\": \"表单设置\",\n        \"body\": {\n          \"type\": \"form\",\n          \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=1\",\n          \"controls\": [\n            {\n              \"type\": \"text\",\n              \"name\": \"text\",\n              \"label\": \"文本\"\n            }\n          ]\n        }\n      }\n    }\n  }\n</script></div>\n<p><strong> 属性表 </strong></p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td><code>drawer</code></td>\n<td>点击后显示一个侧边栏</td>\n</tr>\n<tr>\n<td>drawer</td>\n<td><code>string</code> 或 <code>DrawerObject</code></td>\n<td>-</td>\n<td>指定弹框内容，格式可参考<a href=\"./drawer\">Drawer</a></td>\n</tr>\n</tbody>\n</table>\n<h2><a class=\"anchor\" name=\"%E5%A4%8D%E5%88%B6%E6%96%87%E6%9C%AC\" href=\"#%E5%A4%8D%E5%88%B6%E6%96%87%E6%9C%AC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>复制文本</h2><div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n    \"label\": \"复制一段文本\",\n    \"type\": \"button\",\n    \"actionType\": \"copy\",\n    \"content\": \"http://www.baidu.com\"\n}\n</script></div>\n<p><strong> 属性表 </strong></p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td><code>copy</code></td>\n<td>复制一段内容到粘贴板</td>\n</tr>\n<tr>\n<td>content</td>\n<td><a href=\"../concepts/template\">模板</a></td>\n<td>-</td>\n<td>指定复制的内容。可用 <code>${xxx}</code> 取值。</td>\n</tr>\n</tbody>\n</table>\n<h2><a class=\"anchor\" name=\"%E5%88%B7%E6%96%B0%E5%85%B6%E4%BB%96%E7%BB%84%E4%BB%B6\" href=\"#%E5%88%B7%E6%96%B0%E5%85%B6%E4%BB%96%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>刷新其他组件</h2><p><strong> 属性表 </strong></p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td><code>reload</code></td>\n<td>刷新目标组件</td>\n</tr>\n<tr>\n<td>target</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>需要刷新的目标组件名字（组件的<code>name</code>值，自己配置的），多个请用 <code>,</code> 号隔开。</td>\n</tr>\n</tbody>\n</table>\n<h2><a class=\"anchor\" name=\"%E7%BB%84%E4%BB%B6%E7%89%B9%E6%9C%89%E7%9A%84%E8%A1%8C%E4%B8%BA%E7%B1%BB%E5%9E%8B\" href=\"#%E7%BB%84%E4%BB%B6%E7%89%B9%E6%9C%89%E7%9A%84%E8%A1%8C%E4%B8%BA%E7%B1%BB%E5%9E%8B\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>组件特有的行为类型</h2><h3><a class=\"anchor\" name=\"%E8%A1%A8%E5%8D%95%E4%B8%AD%E8%A1%A8%E6%A0%BC%E6%B7%BB%E5%8A%A0%E4%B8%80%E8%A1%8C\" href=\"#%E8%A1%A8%E5%8D%95%E4%B8%AD%E8%A1%A8%E6%A0%BC%E6%B7%BB%E5%8A%A0%E4%B8%80%E8%A1%8C\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>表单中表格添加一行</h3><p>该 actionType 为<a href=\"./form/table\">FormItem-Table</a>专用行为</p>\n<h3><a class=\"anchor\" name=\"%E9%87%8D%E7%BD%AE%E8%A1%A8%E5%8D%95\" href=\"#%E9%87%8D%E7%BD%AE%E8%A1%A8%E5%8D%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>重置表单</h3><p>在 form 中，配置<code>&quot;type&quot;: &quot;reset&quot;</code>的按钮，可以实现重置表单数据的功能</p>\n<div class=\"amis-preview\" style=\"height: 600px\"><script type=\"text/schema\" height=\"600\" scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"controls\": [\n        {\n            \"type\": \"text\",\n            \"name\": \"username\",\n            \"placeholder\": \"请输入用户名\",\n            \"label\": \"用户名\"\n        },\n        {\n            \"type\": \"password\",\n            \"name\": \"password\",\n            \"label\": \"密码\",\n            \"placeholder\": \"请输入密码\"\n        },\n        {\n            \"type\": \"checkbox\",\n            \"name\": \"rememberMe\",\n            \"option\": \"记住登录\"\n        }\n    ],\n    \"actions\": [\n        {\n            \"type\": \"reset\",\n            \"label\": \"重置\"\n        },\n        {\n            \"type\": \"submit\",\n            \"label\": \"提交\",\n            \"level\": \"primary\"\n        }\n    ]\n}\n</script></div>\n<h2><a class=\"anchor\" name=\"%E9%80%9A%E7%94%A8%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E9%80%9A%E7%94%A8%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>通用属性表</h2><p>所有<code>actionType</code>都支持的通用配置项</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>action</code></td>\n<td>指定为 Page 渲染器。</td>\n</tr>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>【必填】这是 action 最核心的配置，来指定该 action 的作用类型，支持：<code>ajax</code>、<code>link</code>、<code>url</code>、<code>drawer</code>、<code>dialog</code>、<code>confirm</code>、<code>cancel</code>、<code>prev</code>、<code>next</code>、<code>copy</code>、<code>close</code>。</td>\n</tr>\n<tr>\n<td>label</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>按钮文本。可用 <code>${xxx}</code> 取值。</td>\n</tr>\n<tr>\n<td>level</td>\n<td><code>string</code></td>\n<td><code>default</code></td>\n<td>按钮样式，支持：<code>link</code>、<code>primary</code>、<code>secondary</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>danger</code>、<code>light</code>、<code>dark</code>、<code>default</code>。</td>\n</tr>\n<tr>\n<td>size</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>按钮大小，支持：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>。</td>\n</tr>\n<tr>\n<td>icon</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>设置图标，例如<code>fa fa-plus</code>。</td>\n</tr>\n<tr>\n<td>iconClassName</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>给图标上添加类名。</td>\n</tr>\n<tr>\n<td>active</td>\n<td><code>boolean</code></td>\n<td>-</td>\n<td>按钮是否高亮。</td>\n</tr>\n<tr>\n<td>activeLevel</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>按钮高亮时的样式，配置支持同<code>level</code>。</td>\n</tr>\n<tr>\n<td>activeClassName</td>\n<td><code>string</code></td>\n<td><code>is-active</code></td>\n<td>给按钮高亮添加类名。</td>\n</tr>\n<tr>\n<td>block</td>\n<td><code>boolean</code></td>\n<td>-</td>\n<td>用<code>display:&quot;block&quot;</code>来显示按钮。</td>\n</tr>\n<tr>\n<td>confirmText</td>\n<td><a href=\"../concepts/template\">模板</a></td>\n<td>-</td>\n<td>当设置后，操作在开始前会询问用户。可用 <code>${xxx}</code> 取值。</td>\n</tr>\n<tr>\n<td>reload</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>指定此次操作完后，需要刷新的目标组件名字（组件的<code>name</code>值，自己配置的），多个请用 <code>,</code> 号隔开。</td>\n</tr>\n<tr>\n<td>tooltip</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>鼠标停留时弹出该段文字，也可以配置对象类型：字段为<code>title</code>和<code>content</code>。可用 <code>${xxx}</code> 取值。</td>\n</tr>\n<tr>\n<td>disabledTip</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>被禁用后鼠标停留时弹出该段文字，也可以配置对象类型：字段为<code>title</code>和<code>content</code>。可用 <code>${xxx}</code> 取值。</td>\n</tr>\n<tr>\n<td>tooltipPlacement</td>\n<td><code>string</code></td>\n<td><code>top</code></td>\n<td>如果配置了<code>tooltip</code>或者<code>disabledTip</code>，指定提示信息位置，可配置<code>top</code>、<code>bottom</code>、<code>left</code>、<code>right</code>。</td>\n</tr>\n<tr>\n<td>close</td>\n<td><code>boolean</code></td>\n<td>-</td>\n<td>当<code>action</code>配置在<code>dialog</code>或<code>drawer</code>的<code>actions</code>中时，配置为<code>true</code>指定此次操作完后关闭当前<code>dialog</code>或<code>drawer</code>。</td>\n</tr>\n<tr>\n<td>required</td>\n<td><code>Array&lt;string&gt;</code></td>\n<td>-</td>\n<td>配置字符串数组，指定在<code>form</code>中进行操作之前，需要指定的字段名的表单项通过验证</td>\n</tr>\n</tbody>\n</table>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "样式",
          "fragment": "%E6%A0%B7%E5%BC%8F",
          "fullPath": "#%E6%A0%B7%E5%BC%8F",
          "level": 2,
          "children": [
            {
              "label": "尺寸",
              "fragment": "%E5%B0%BA%E5%AF%B8",
              "fullPath": "#%E5%B0%BA%E5%AF%B8",
              "level": 3
            },
            {
              "label": "主题",
              "fragment": "%E4%B8%BB%E9%A2%98",
              "fullPath": "#%E4%B8%BB%E9%A2%98",
              "level": 3
            },
            {
              "label": "图标",
              "fragment": "%E5%9B%BE%E6%A0%87",
              "fullPath": "#%E5%9B%BE%E6%A0%87",
              "level": 3
            }
          ]
        },
        {
          "label": "操作前确认",
          "fragment": "%E6%93%8D%E4%BD%9C%E5%89%8D%E7%A1%AE%E8%AE%A4",
          "fullPath": "#%E6%93%8D%E4%BD%9C%E5%89%8D%E7%A1%AE%E8%AE%A4",
          "level": 2
        },
        {
          "label": "ajax 请求",
          "fragment": "ajax-%E8%AF%B7%E6%B1%82",
          "fullPath": "#ajax-%E8%AF%B7%E6%B1%82",
          "level": 2,
          "children": [
            {
              "label": "请求成功后，跳转至某个页面",
              "fragment": "%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F%E5%90%8E-%E8%B7%B3%E8%BD%AC%E8%87%B3%E6%9F%90%E4%B8%AA%E9%A1%B5%E9%9D%A2",
              "fullPath": "#%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F%E5%90%8E-%E8%B7%B3%E8%BD%AC%E8%87%B3%E6%9F%90%E4%B8%AA%E9%A1%B5%E9%9D%A2",
              "level": 3
            },
            {
              "label": "请求成功后，显示反馈弹框",
              "fragment": "%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F%E5%90%8E-%E6%98%BE%E7%A4%BA%E5%8F%8D%E9%A6%88%E5%BC%B9%E6%A1%86",
              "fullPath": "#%E8%AF%B7%E6%B1%82%E6%88%90%E5%8A%9F%E5%90%8E-%E6%98%BE%E7%A4%BA%E5%8F%8D%E9%A6%88%E5%BC%B9%E6%A1%86",
              "level": 3
            },
            {
              "label": "自定义 toast 文字",
              "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89-toast-%E6%96%87%E5%AD%97",
              "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89-toast-%E6%96%87%E5%AD%97",
              "level": 3
            }
          ]
        },
        {
          "label": "跳转链接",
          "fragment": "%E8%B7%B3%E8%BD%AC%E9%93%BE%E6%8E%A5",
          "fullPath": "#%E8%B7%B3%E8%BD%AC%E9%93%BE%E6%8E%A5",
          "level": 2,
          "children": [
            {
              "label": "单页跳转",
              "fragment": "%E5%8D%95%E9%A1%B5%E8%B7%B3%E8%BD%AC",
              "fullPath": "#%E5%8D%95%E9%A1%B5%E8%B7%B3%E8%BD%AC",
              "level": 3
            },
            {
              "label": "直接跳转",
              "fragment": "%E7%9B%B4%E6%8E%A5%E8%B7%B3%E8%BD%AC",
              "fullPath": "#%E7%9B%B4%E6%8E%A5%E8%B7%B3%E8%BD%AC",
              "level": 3
            }
          ]
        },
        {
          "label": "弹框",
          "fragment": "%E5%BC%B9%E6%A1%86",
          "fullPath": "#%E5%BC%B9%E6%A1%86",
          "level": 2
        },
        {
          "label": "抽屉",
          "fragment": "%E6%8A%BD%E5%B1%89",
          "fullPath": "#%E6%8A%BD%E5%B1%89",
          "level": 2
        },
        {
          "label": "复制文本",
          "fragment": "%E5%A4%8D%E5%88%B6%E6%96%87%E6%9C%AC",
          "fullPath": "#%E5%A4%8D%E5%88%B6%E6%96%87%E6%9C%AC",
          "level": 2
        },
        {
          "label": "刷新其他组件",
          "fragment": "%E5%88%B7%E6%96%B0%E5%85%B6%E4%BB%96%E7%BB%84%E4%BB%B6",
          "fullPath": "#%E5%88%B7%E6%96%B0%E5%85%B6%E4%BB%96%E7%BB%84%E4%BB%B6",
          "level": 2
        },
        {
          "label": "组件特有的行为类型",
          "fragment": "%E7%BB%84%E4%BB%B6%E7%89%B9%E6%9C%89%E7%9A%84%E8%A1%8C%E4%B8%BA%E7%B1%BB%E5%9E%8B",
          "fullPath": "#%E7%BB%84%E4%BB%B6%E7%89%B9%E6%9C%89%E7%9A%84%E8%A1%8C%E4%B8%BA%E7%B1%BB%E5%9E%8B",
          "level": 2,
          "children": [
            {
              "label": "表单中表格添加一行",
              "fragment": "%E8%A1%A8%E5%8D%95%E4%B8%AD%E8%A1%A8%E6%A0%BC%E6%B7%BB%E5%8A%A0%E4%B8%80%E8%A1%8C",
              "fullPath": "#%E8%A1%A8%E5%8D%95%E4%B8%AD%E8%A1%A8%E6%A0%BC%E6%B7%BB%E5%8A%A0%E4%B8%80%E8%A1%8C",
              "level": 3
            },
            {
              "label": "重置表单",
              "fragment": "%E9%87%8D%E7%BD%AE%E8%A1%A8%E5%8D%95",
              "fullPath": "#%E9%87%8D%E7%BD%AE%E8%A1%A8%E5%8D%95",
              "level": 3
            }
          ]
        },
        {
          "label": "通用属性表",
          "fragment": "%E9%80%9A%E7%94%A8%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E9%80%9A%E7%94%A8%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
