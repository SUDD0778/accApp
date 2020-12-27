# kashware

Some info about the APIs

3 APIs :

########## Public Endpoint ##########
  LOGIN 
  
  Request : {
    method : "POST",
    url : "/api/login"
    body : {
      "username" : "kashware",
      "password" : "round1"
    }
  }

 The response will return a JWT which you need to use for the protected endpoints
================================================================================================================================================================================ 
########## Protected Endpoints ##########
  
  APPLY JSON PATCH
  
  Request : {
    method : "POST",
    headers : {
      Authorization : "Bearer /jwt/",
      content-type : "application/json"
    },    
    url : "/api/applyJSONpatch"
    body : {
        "doc" : {
            "baz": "qux",
            "foo": "bar"
        },
        "patch" : [
            { "op": "replace", "path": "/baz", "value": "boo" }
        ]
    }
  }
  
  the body can contain any value for doc and patch
========================================================================================
  
THUMBNAIL
  
  Request : {
    method : "POST",
    headers : {
      Authorization : "Bearer /jwt/",
      content-type : "application/json"
    },    
    url : "/api/downloadThumbnail"
    body : {
        "imgUrl" : "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-464163411.jpg?crop=1.0xw:1xh;center,top&resize=980:*"
    }
 }
 
 the body can contain any value for imgUrl
 
