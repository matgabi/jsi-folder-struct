const folders = [
    {
        type: 'dir',
        name: 'app',
        children: [
            {
                type: 'file',
                name: 'index.html'
            },
            {
                type: 'dir',
                name: 'js',
                children: [
                    {
                        type: 'file',
                        name: 'main.js'
                    },
                    {
                        type: 'file',
                        name: 'app.js'
                    },
                    {
                        type: 'file',
                        name: 'misc.js'
                    },
                    {
                        type: 'dir',
                        name: 'vendor',
                        children: [
                            {
                                type: 'file',
                                name: 'jquery.js'
                            },
                            {
                                type: 'file',
                                name: 'underscore.js'
                            }
                        ]
                    }
                ]
            },
            {
                type: 'dir',
                name: 'css',
                children: [
                    {
                        type: 'file',
                        name: 'reset.css'
                    },
                    {
                        type: 'file',
                        name: 'main.css'
                    }
                ]
            }
        ]
    },
    {
        type: 'dir',
        name: 'mere',
        children: [
            {
                type: 'file',
                name: 'mere.bune'
            },
            {
                type: 'file',
                name: 'mere.rele'
            },
            {
                type: 'dir',
                name: 'pere',
                children: [
                    {
                        type: 'file',
                        name: 'pere.mere'
                    },

                ]
            }
        ]
    },
    {
        type: 'dir',
        name: 'banane',
        children: [
            {
                type: 'file',
                name: 'banane.bune'
            },
            {
                type: 'file',
                name: 'banane.rele'
            },
            {
                type: 'dir',
                name: 'kiwi',
                children: [
                    {
                        type: 'file',
                        name: 'hiwi.mere'
                    }
                ]
            },
            {
                type: 'dir',
                name: 'caise',
                children: [
                    {
                        type: 'file',
                        name: 'caise.bune'
                    },


                ]
            }
        ]
    }
];
let htmlFolder = document.getElementsByClassName('folder')[0];
let list = "";
let names = [];
let matches = [];
let list2 = "";
let a = "<ul class ='folder-container'><li class='folder-item'>";
let b = "</ul>";
let c = "<li class = 'folder-wrapper file-item'>";
let d = "</li>";
(function goTrough(dir) {
    if (dir instanceof Object) {
        for (prop in dir) {
            if (prop == 'type') {
                if (dir[prop] == 'dir') {
                    list += a;
                }
                else {
                    list += c;
                }
            }
            else if (prop == 'name') {
                names.push(dir[prop]);
                list += dir[prop] + d;
            }
            else {
                goTrough(dir[prop]);
            }
        }

        if (dir instanceof Array) {
            list += b;
        }
    }
})(folders)
htmlFolder.innerHTML = list;
function search(dir, isGood, name) {
    if (dir instanceof Object) {
        for (prop in dir) {
            if (prop == 'type') {
                if (isGood) {
                    if (dir[prop] == 'dir') {
                        list2 += a;
                    }
                    else {
                        list2 += c;
                    }
                }
            }
            else if (prop == 'name') {
                if (dir[prop] == (name)) {
                    isGood = true;
                }
                if (isGood) {
                    var x = matches.indexOf(dir[prop]);
                    if (x != -1)
                        matches.splice(x, 1, "");

                    list2 += dir[prop] + d;
                }
            }
            else {
                search(dir[prop], isGood, name)
            }
        }
        if (dir instanceof Array && isGood) {
            list2 += b;
        }
    }
}
function getBestMatch(name) {
    matches = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i].match(name))
            matches.push(names[i])
    }
}
function liveSearch() {
    let paragraph = document.getElementById("search");
    paragraph.style.visibility = 'visible';
    let s = document.getElementById("search1");
    let name = document.getElementsByTagName('input')[0].value;
    let htmlFolder = document.getElementsByClassName('folder')[0];
    htmlFolder.innerHTML = "";
    if (name == "") {
        paragraph.style.visibility = 'hidden';
        htmlFolder.innerHTML = list;
    }
    else {
        s.innerHTML = name;
        getBestMatch(name);
        if (matches.length != 0) {
            for (let i = 0; i < matches.length; i++) {
                if (matches[i] != "") {
                    list2 = "";
                    name = matches[i];
                    search(folders, false, name);
                    if (name.indexOf('.') != -1)
                        list2 = c + list2;
                    else
                        list2 = a + list2;
                    htmlFolder.innerHTML += list2;
                }
            }
        }
        else
            setTimeout(function () {
                list2 = "";
                list2 += "Item not found";
                htmlFolder.innerHTML = list2;
            }, 400);
    }
}

