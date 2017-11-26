# [ITL] CSS attribute_classes
This css file contains lots of handy classes that will improve the efficiency of prototyping webdevelopment.
Easily try out different sizes, spacings, colors, fonts all by changing a few classes and without messing around in the stylesheets to much.

This code was written under the context of trying new styles quick and easy on any website. e.g. whenever a client wants to see this and that, you dont need to destroy your stylesheets entirely, but just edit the attribute_classes of the elements.

### Problems with traditional (S)CSS / LESS / everthing:
Say we have a specific element that just needs a padding-left of 4px. Ideally one would create a new class for this element and then apply the styling to that class. Having lots of these unique elements on a website will rapidly make a mess out of your stylesheets. Iterations where you keep on changing the style of every element will add to this mess.. And before you know it, the stylesheet becomes unmanagable.

Thats where attribute_classes steps in as a game changer.

Instead of doing this:
```html
<div class="comment-wrapper-first">Padded comment</div>
```
```css
.comment-wrapper-first {
    padding-left: 4px;
}
```

Do this:
```html
<div class="pl4">Padded comment</div>
```

### attribute_classes with sass
Extend the classes of attribute_classes in your own classes to minimize the code you actually need to write.

Instead of doing this:
```css
.comment-wrapper-first-disabled {
  cursor: not-allowed;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  outline: none;
}
```

Do this:
```css
.comment-wrapper-first-disabled {
    @extend .not-allowed;
    @extend .no-select;
}
```

DISCLAIMER attribute_classes was written for prototype development; Therefore try to use it only as such.