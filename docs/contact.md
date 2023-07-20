# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers :
- Authorization : token

Request Body :
```json
{
    "first_name" : "",
    "last_name" : "",
    "email" : "",
    "phone" : "",
}
```

Response Body Success :
```json
{
    "data" : {
        "id" : "",
        "first_name" : "",
        "last_name" : "",
        "email" : "",
        "phone" : "",
    }
}
```

Response Body Error :
```json
{
    "errors" : "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers :
- Authorization : token

Request Body :
```json
{
    "id" : "",
    "first_name" : "",
    "last_name" : "",
    "email" : "",
    "phone" : "",
}
```

Response Body Success :
```json
{
    "data" : {
        "id" : "",
        "first_name" : "",
        "last_name" : "",
        "email" : "",
        "phone" : "",
    }
}
```

Response Body Error :
```json
{
    "errors" : "Email is not valid format"
}
```

## Get Contact API

Endpoint : POST /api/contacts

Headers :
- Authorization : token

Request Body :
```json
{

}
```

Response Body Success :
```json
{

}
```

Response Body Error :
```json

```

## Search Contact API

Endpoint : POST /api/contacts

Headers :
- Authorization : token

Request Body :
```json
{

}
```

Response Body Success :
```json
{

}
```

Response Body Error :
```json

```

## Remove Contact API

Endpoint : POST /api/contacts

Headers :
- Authorization : token

Request Body :
```json
{

}
```

Response Body Success :
```json
{

}
```

Response Body Error :
```json

```