/**
 * Created by tangjiang on 2017/5/14.
 */
const path = require('path');
const fs = require('fs')
    , cheerio = require('cheerio')
    , read = fs.readFileSync
    , tpl = read(path.join(__dirname,'tpl.html'),'utf8')
    , v_script = read(path.join(__dirname,'v_script.js'), 'utf8');

const $ = cheerio.load(tpl);

module.exports = function (rootDir,treeJson) {
    /**
     * md文件路径
     * @param filePath
     * @returns {string|*}
     */
    let mdPath = function (filePath) {
        return path.join(rootDir,filePath)
    };

    /**
     * 页面路径
     * @param filePath
     */
    let vuePath = function (filePath) {
        let _path = filePath.replace(/^pages/, path.join(rootDir,'app/views'));
        _path = _path.replace('.md', '.vue');
        return _path
    };

    /**
     * 创建vue文件
     * @param fileName
     * @param sourcePath
     */
    let create = function (fileName,sourcePath) {
        let _fileName = vuePath(sourcePath);
        let requireString = `\nimport md from "${mdPath(sourcePath)}"\n`;
        let _script = requireString + v_script;
        $('script').text(_script);
        let vueFile = $.html();
        fs.writeFile(`${_fileName}`, vueFile,  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log(`创建 "${_fileName}" 文件成功！`);
        });
    };

    /**
     * 检查文件夹是否存在
     * @param dirName
     * @param dirPath
     * @param callback
     */
    let checkDir = function (dirName,dirPath,callback) {
        let _dirName = dirName.replace('.md','.vue');
        let _dirPath = vuePath(dirPath).replace(_dirName,'');
        console.log(dirName)
        console.log(_dirPath)
        if (fs.existsSync(_dirPath)) {
           callback()
        } else {
            fs.mkdir(_dirPath, function (err) {
                if (err) {
                    return console.log(err);
                }
                callback()
            })
        }
    };

    treeJson.children.forEach((item)=>{
        if(item.children){
            item.children.forEach((i)=>{
                checkDir(i.name,i.path,function () {
                    create(i.name,i.path)
                })
            })
        }else {
            checkDir(item.name,item.path,function () {
                create(item.name,item.path)
            })
        }
    })
}