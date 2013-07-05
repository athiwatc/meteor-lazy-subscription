# Lazy Subscription


## Overview

***Lazy Subscription*** allows you to subscribe to collection when you need it. It is an easy way to write big application that need to load a lot of collection over an amount of pages.

### Installation

`mrt add lazy-subscription`

### Uses

First you must define the collection to be independence of server and client side.

/server/publish.js

``` javascript
//This is no longer share with the client.
Post = new Meteor.Collection('post');
Meteor.publish('posts', function() {
	//Just a normal publish function.
	return Post.find({});
});
```

/client/subscribe.js

``` javascript
//Post = new Meteor.Collection('post'); No longer exists. Lazy will deal with it for us.
Post = new Meteor.Lazy('post', function() {
	Meteor.subscribe('posts');
});
```

### Notes
This should be use in reactive context or else on the first run you will get an empty collection.