/**
 * Created by tangjiang on 2017/5/12.
 */
let fs = require('fs')
const dirTree = require('./core/utils/directory-tree');
const create_route = require('./core/create_route');
const create_vue = require('./core/create_vue');
const tree = dirTree('./pages');

new create_route(__dirname,tree)
create_vue(__dirname,tree)



