---
id: doc2
title: Authentication
---

## Introducation
This service exposes 3 major endpoint. 

BASE URL PATH: [https://theroom-test.herokuapp.com](https://theroom-test.herokuapp.com)

# Authentication

## Create User's Account

You can create an account using this endpoint.

**URL** : `/v1/auth/register/`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Request Payload**

The request should be in this format

```json
{
    "firstName": "[Regular string]",
    "lastName": "[Regular string]",
    "email": "[Must be a valid email]",
    "password": "[Must be more that 3 char]",
}
```

## Success Response

**Condition** : If everything is OK and an Account was created.

**Code** : `200 CREATED`

**Content example**

```json
{
    "message": "Registration successful",
}
```

## Error Responses

**Condition** : If Account (Email) already exists for User. NOTE: As at the time of this doc this is still pending as its not a core requirement for this test.

**Code** : `303 SEE OTHER`

**Content** : `{}`

### Or

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
    "name": [
        "This field is required."
    ]
}
```


## Login

Used to collect a Token for a registered User.

**URL** : `/v1/auth/login/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "email": "ighotouch@gmail.com",
    "password": "comms"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d",
    "auth": true,
    "message": "success"
}
```

## Error Response

**Condition** : If 'username' and 'password' combination is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "token": null,
    "auth": false,
    "message": "Invalid Credentials"
}
```


This is a link to [another document.](doc3.md) This is a link to an [external page.](http://www.example.com/)
