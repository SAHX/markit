/**
 * Created by tangjiang on 2017/5/14.
 */
const fs = require('fs');
const path = require('path');
function Create (rootDir, treeJson) {

    /**
     * 路由链接
     * @type {[*]}
     */
    this.routeLink = [
        {
            link: '/',
            name: '首页'
        }];

    /**
     * 访问路径
     * @param path
     */
    this.urlPath = function (path) {
        let _path = path
            .replace('pages', '')
            .replace('.md', '')
            .replace(/\s+/g, '')
            .trim();
        return _path;
    };
    /**
     * vue文件路径
     * @param path
     */
    this.vuePath = function (path) {
        let _path = path
            .replace('pages', './views')
            .replace('.md', '.vue')
            .replace(/\s+/g, '')
            .trim();
        return _path;
    };

    /**
     * index路由模板
     * @type {string}
     */
    this.indexRoute = `{"path": "/",
                        "component": resolve => {
                            require.ensure(['./index.vue'], () => {
                                resolve(require('./index.vue'))
                            })}
                        },\n`;

    /**
     * 组件路由加载模板
     * @param vuePath
     * @returns {string}
     */
    this.requireTpl = function (vuePath) {
        return `resolve => {
                    require.ensure(['${vuePath}'], () => {
                        resolve(require('${vuePath}'))
                    })
                },\n`
    };

    /**
     * 路由子模板
     * @param urlPath
     * @param vuePath
     * @returns {string}
     */
    this.itemTpl = function (urlPath,vuePath) {
        return `{"path": "${urlPath}",
                 "component": ${this.requireTpl(vuePath)}
                },\n`
    };

    /**
     * 路由模板
     * @param routeItemObj
     * @returns {string}
     */
    this.routItemStr = function (routeItemObj) {
        let _path = this.vuePath(routeItemObj.path);
        if (routeItemObj.children) {
            let childrenItemStr = '';
            routeItemObj.children.forEach((item) => {
                childrenItemStr += this.itemTpl(this.urlPath(item.path),this.vuePath(item.path))
            });
            return `{"path": "${this.urlPath(routeItemObj.path)}",
                    "component": ${this.requireTpl('./index.vue')}
                     },\n
                     ${childrenItemStr}\n`;
        } else {
            return `{"path": "${this.urlPath(routeItemObj.path)}",
                     "component": ${this.requireTpl(_path)}
                    },\n`
        }
    };

    /**
     * 路由链接处理
     * @param routeItemObj
     * @returns {{}}
     */
    this.routeItemLink = function (routeItemObj) {
        let itemLinkObj = {};
        itemLinkObj.link = this.urlPath(routeItemObj.path);
        itemLinkObj.name = routeItemObj.name;
        if(routeItemObj.children){
            let itemLinkChidlren = [];
            routeItemObj.children.forEach((item) => {
                itemLinkChidlren.push({link:this.urlPath(item.path),name:item.name})
            });
            itemLinkObj.children = itemLinkChidlren;
            return itemLinkObj;
        }
        return itemLinkObj;
    };


    let pages = treeJson.children;
    let router = '';
    pages.forEach((item) => {
        router += this.routItemStr(item);
        this.routeLink.push(this.routeItemLink(item));
    });
    let routerTpl = `export default [${this.indexRoute}${router}]`;
    let routeFilePath = path.join(rootDir, 'app/routers.js');
    let linkFilePath = path.join(rootDir, 'app/link.json');
    fs.writeFile(routeFilePath, routerTpl, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log(`创建路由文件 "${routeFilePath}" 成功！`);
    });
    fs.writeFile(linkFilePath, JSON.stringify(this.routeLink), function (err) {
        if (err) {
            return console.error(err);
        }
        console.log(`创建路由文件 "${linkFilePath}" 成功！`);
    });
}

module.exports =  Create;