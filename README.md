# Angular Menu Module


A [Bootstrap](http://getbootstrap.com/) (**3.0.3**) menu module for use in [Angular](http://angularjs.org/) (**1.2.7**).

## Installation

Using the module is simple. Just copy the lib-folder into the root of your Angular installation, and inject "**napp.menu**" in your app.

```javascript
var app = angular.module("exampleApp", ["napp.menu"]);
```

##Usage

The module uses a simple syntax of `<menu title="...">` for the menu in general, and `<menu-item route="...">` for the underlying menu items.
As with normal Angular markup, you can also use attributes, e.g. `<div menu title="...">` and `<div menu-item route="...">`.

The module interprits those tags and replaces them with a regular Bootstrap menu.
