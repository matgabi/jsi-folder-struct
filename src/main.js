const folders =  [
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
      }
    ]
let list = "";
let names = [];
let matches = [];
let list2 = "";
let a =  "<ul class ='folder-container'><li class='folder-item'>";
let b = "</ul>";
let c = "<li class = 'folder-wrapper file-item'>";
let d = "</li>";
function goTrough(dir){
  if(dir instanceof Object){

    for(prop in dir){
      if(prop == 'type'){
        if( dir[prop] == 'dir'){
          list += a;
        }
        else{
          list += c;
        }
      }
      else if(prop == 'name'){
        names.push(dir[prop]);
        list += dir[prop] + d ;
      }
      else{
        goTrough(dir[prop]);
      }
    }

    if( dir instanceof Array){
      list += b;
    }

  }
}
goTrough(folders);
var htmlFolder = document.getElementsByClassName('folder')[0];
htmlFolder.innerHTML = list;
function search(dir,isGood,name){
  if(dir instanceof Object){
    for(prop in dir){
      if( prop == 'type'){
        if(isGood){
          if(dir[prop] == 'dir'){
            list2 += a;
          }
          else {
            list2 += c;
          }
        }
      }
      else if(prop == 'name'){
        if( dir[prop]==(name)){
          console.log(dir);
          name = dir[prop];
          isGood = true;
        }
        if(isGood){
          var x = matches.indexOf(dir[prop]);
          if( x != -1)
            matches.splice(x,1,"");

          list2 += dir[prop] + d;
        }
      }
      else{
        search(dir[prop],isGood,name)
      }
    }
    if( dir instanceof Array && isGood) {
      list2 += b;
    }
  }
}