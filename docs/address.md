# Address API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Request Body :
```json
{
    "street" : "",
    "city" : "",
    "province" : "",
    "country" : "",
    "postal_cde" : "",
}
```

Response Body Success :
```json
{
    "data" : {
        "id" : ,
        "street" : "",
        "city" : "",
        "province" : "",
        "country" : "",
        "postal_cde" : "",
    }
}
```

Response Body Error :
```json
{
    "errors" : "Country is required"
}
```

## Update Address API

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Request Body :
```json
{
    "street" : "",
    "city" : "",
    "province" : "",
    "country" : "",
    "postal_cde" : "",
}
```

Response Body Success :
```json
{
    "data" : {
        "id" : ,
        "street" : "",
        "city" : "",
        "province" : "",
        "country" : "",
        "postal_cde" : "", 
    }
}
```

Response Body Error :
```json
{
    "errors" : "Country is required"
}
```

## Get Address API

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Response Body Success :
```json
{
    "data" : {
        "id" : ,
        "street" : "",
        "city" : "",
        "province" : "",
        "country" : "",
        "postal_cde" : "",
    }
}
```

Response Body Error :
```json
{
    "errors" : "Contact is not found"
}
```

## List Address API

Endpoint : GET /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Response Body Success :
```json
{
    "data" : [
        {
            "id" : ,
            "street" : "",
            "city" : "",
            "province" : "",
            "country" : "",
            "postal_cde" : "",
        }
    ]
}
```

Response Body Error :
```json
{
    "errors" : "Contact is not found"
}
```

## Remove Address API

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

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
