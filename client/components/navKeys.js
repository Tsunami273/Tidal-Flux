var navKeys = function(scope, key, action){   
      return {"keys": key,
          "on_keydown": function(event){
            action();
          },
          "on_keyup": function(event){
          }, 
          "this": scope
        };
}

module.exports = navKeys;
