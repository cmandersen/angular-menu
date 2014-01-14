# Angular Menu Module


A [Bootstrap](http://getbootstrap.com/) (**3.0.3**) menu module for use in [Angular](http://angularjs.org/) (**1.2.7**).

## Installation

Using the module is simple. Just copy the lib-folder into the root of your Angular installation, and inject "**napp.menu**" in your app.

```javascript
var app = angular.module("exampleApp", ["napp.menu"]);
```

The module is also available in a [RequireJS](http://requirejs.org/) compatible version. Just include the `rq-angular-napp-menu.js` file instead of the `angular-napp-menu.js` file.

##Usage

The module consists of three parts, the `<menu title="...">` for the menu in general, `<menu-item-parent match="...">` for menu-items with children, and `<menu-item route="..." match="...">` for the underlying menu items.

As you can see, the _menu-item-parent_ and _menu-item_ tags, have a _match_ attribute. That attribute is used for regex-matching if the menu-item should be shown as active.

As with normal Angular markup, you can also use attributes, e.g. `<div menu title="...">` and `<div menu-item route="...">` etc.

The module interprits those tags and replaces them with a regular Bootstrap menu.

### Example

```html
<menu title="Angular is awesome!">
  <menu-item route="#/somepage" match="/somepage$">Some page</menu-item>
  <menu-parent-item match="/otherpage">
    <menu-item route="#/otherpage/details" match="/otherpage/details$">Other page details</menu-item>
    <menu-item route="#/otherpage/list" match="/otherpage/list$">Other page list</menu-item>
  </menu-parent-item>
</menu>
```
