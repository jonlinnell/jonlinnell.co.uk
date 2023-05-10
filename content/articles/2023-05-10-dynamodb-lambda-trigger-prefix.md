---
title: Prefix matching in Lambda DynamoDB triggers
date: 2023-05-10T10:00:00.000Z
keywords: dynamodb
heroimage: /blog/images/testimage.png
---

DynamoDB's `begins_with` query function is tremendously useful. It can be used to query records with certain formats (imagine querying based on an ISO date string), or in Single Table Design to match entity types by some canonical prefix. If you're using DynamoDB streams, especially in a Single Table Design setting, you might expect to be able to use the same concept to match events coming through the stream.

AWS's documentation is, to no one's surprise, clear as mud on this subject. Other Lambda triggers have examples detailing how this can be done, but not DynamoDB, which seems to imply one has to perform an exact key match for a trigger to fire.

```json
{
  "dynamodb": {
    "NewImage": {
      "sk": {
        "S": ["SOME_WHOLE_KEY"]
      }
    }
  }
}
```

Thankfully this is not the case, and although a solution isn't obvious, one does exist.

To match records with a specific prefix, you can modify the matching string with an object with key `prefix` and value of whatever prefix you wish to match.

For example, let's say we're storing a ledger of customer payment records. Our key structure looks like this: `pk: CUSTOMER#1234 sk: PAYMENT#2023-02-03`.

Looking at the documentation, you might assume it's impossible to match all new items with an `sk` beginning with `PAYMENT` but fortunately, it's simply a case of altering our filter pattern to something like this:

```json
{
  "dynamodb": {
    "NewImage": {
      "sk": {
        "S": [
          {
            "prefix": "PAYMENT#"
          }
        ]
      }
    }
  }
}
```

Here, we match all new images with an `sk` beginning with `PAYMENT#` — just what we want.
