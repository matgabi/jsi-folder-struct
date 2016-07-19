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