Gravitate
=========

Yet another node library for [Gravatar](http://en.gravatar.com) with support for both the **photo** and **profile** APIs.

[![Build Status](https://travis-ci.org/psirenny/gravitate.png?branch=master)](https://travis-ci.org/psirenny/gravitate)

Hash
----

Although all of the gravitate functions can accept an email, there is still a hash function available for your use.
If the input has already been hashed then it will just return the value.

```javascript
var gravitate = require('gravitate');
var email = 'email@address.com';
var hash = gravitate.hash(email); // "63b91ca4ec19ad79f320eaf5815d75e9"
```

Images
------

```javascript
var hash = '63b91ca4ec19ad79f320eaf5815d75e9';
var imageUrl = gravitate.image.url(hash); // "https://secure.gravatar.com/avatar/63b91ca4ec19ad79f320eaf5815d75e9"
```

All functions also accept an email:

```javascript
var email = 'email@address.com';
var imageUrl = gravitate.image.url(email); // "https://secure.gravatar.com/avatar/63b91ca4ec19ad79f320eaf5815d75e9"
```

Image and profile urls are secure by default.
You can toggle SSL by setting the **secure** property in options to *true* or *false*.

```javascript
var email = 'email@address.com';
var imageUrl = gravitate.image.url(email, {secure: false}); // "http://www.gravatar.com/avatar/63b91ca4ec19ad79f320eaf5815d75e9"
```

All of the [standard url options](http://en.gravatar.com/site/implement/images/) are also available either through their full or abbreviated name:

```javascript
var email = 'email@address.com';
var imageUrl = gravitate.image.url(email, {
  default: 'monsterid',
  r: 'pg'
});
```

Profiles
--------

Profile urls work the same way as image urls and also accept a **secure** parameter:

```javascript
var email = 'email@address.com';
var profileUrl = gravitate.profile.url(email); // "https://secure.gravatar.com/63b91ca4ec19ad79f320eaf5815d75e9.json"
```

Often times you'll want the actual data and not url.
You can get the profile data with the following function:

```javascript
var email = 'email@address.com';
var profileUrl = gravitate.profile.data(email, function (err, data) {
  if (err) return;
  console.log(data.entry[0]); // {hash: '...', photos: [], ...}
});
```
