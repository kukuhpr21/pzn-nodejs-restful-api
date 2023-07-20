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

Endpoint : GET /api/contacts/:id

Headers :
- Authorization : token

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
    "errors" : "Contact is not found"
}
```

## Search Contact API

Endpoint :  GET /api/contacts

Headers :
- Authorization : token

Query params :
- name : search by first_name or last_name, using like, optional
- email : search by email, using like, optional
- phone : search by phone, using like, optional
- page : number of page, default 1
- size : size per page, default 10

Response Body Success :
```json
{
    "data" : [
        {
            "id" : "",
            "first_name" : "",
            "last_name" : "",
            "email" : "",
            "phone" : "",
        }
    ],
    "paging" : {
        "page" : "",
        "total_page" : "",
        "total_item" : "",
    }
}
```

Response Body Error :
```json

```

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

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
    "errors" : "Contact is not found"
}
```