# User API Spec

## Register User API

Endpoint : POST /api/users

Request Body :
```json
{
    "username" : "pzn",
    "password" : "rahasia",
    "name" : "Programmer Zaman Now"
}
```

Response Body Success : 
```json
{
    "data" : {
        "username" : "pzn",
        "name" : "Programmer Zaman Now"
    }
}
```

Response Body Error : 
```json
{
    "errors" : "username already registered"
}
```


## Login User API

Endpoint : POST /api/users/login

Request Body :
```json
{
    "username" : "pzn",
    "password" : "rahasia",
}
```

Response Body Success : 
```json
{
    "data" : {
        "token" : "unique-token"
    }
}
```

Response Body Error : 
```json
{
    "errors" : "username or password wrong"
}
```


## Update User API

Endpoint : PATCH /api/users/current

Headers :
- Authorization : token

Request Body :
```json
{
    "name" : "bla bla bla", //optional
    "password" : "asdjsaahkhjhdas", //optional
}
```

Response Body Success : 
```json
{
    "data" : {
        {
            "name" : "bla bla bla", //optional
            "password" : "asdjsaahkhjhdas lagi", //optional
        }
    }
}
```

Response Body Error : 
```json
{
    "errors" : "name length max 100"
}
```


## Get User API

Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body Success : 
```json
{
    "data" : {
        {
            "username" : "bla bla bla",
            "name" : "asdjsaahkhjhdas lagi",
        }
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Unauthorized"
}
```


## Logout User API

Endpoint : DELETE /api/users/logout

Headers :
- Authorization : token

Response Body Success : 
```json
{
    "data" : "OK"
}
```

Response Body Error : 
```json
{
    "errors" : "Unauthorized"
}
```