[View styleguide](https://itslogical.github.io/css-utility_classes/dist/styleguide/)

# [ITL] CSS utility_classes
This css file contains lots of handy classes that will improve the efficiency of prototyping webdevelopment.
Easily try out different sizes, spacings, colors, fonts all by changing a few classes and without messing around in the stylesheets too much.

This code was written under the context of trying new styles quick and easy on any website. e.g. whenever a client wants to see this and that, you dont need to destroy your stylesheets entirely, but just edit the utility_classes of the elements.

### Problems with traditional (S)CSS / LESS / everthing:
Say we have a specific element that just needs a padding-left of 4px. Ideally one would create a new class for this element and then apply the styling to that class. Having lots of these unique elements on a website will rapidly make a mess out of your stylesheets. Iterations where you keep on changing the style of every element will add to this mess.. And before you know it, the stylesheet becomes unmanagable.

Thats where utility_classes steps in as a game changer.

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

### utility_classes with sass
Extend the classes of utility_classes in your own classes to minimize the code you actually need to write.
```css
@import "~/itl-css-utility_classes/src/scss/itl-utility_classes";
```
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
```scss
.comment-wrapper-first-disabled {
    @include not-allowed;
    @include no-select;
}
```

#### Overriding colors and fonts
Variables are used for the colors and fonts.
To override these simply have them set before importing utility_classes.
```scss
$redColor: crimson;
$titleFontFamily: "Lato";
$textFontFamily: "Open Sans";

@import "...itl-utility_classes";
```



### Changelog
| version | description          | note(s)                                                          |
|---------|----------------------|------------------------------------------------------------------|
| v1.0.0  | initial release      | very basic utility classes                                       |
| v2.0.0  | refactoring          | breaks previous dependencies as the folder structure has changed |
| v2.0.1  | binding strength     | added important to the responsiveness visibility classes         |
| v2.0.2  | link-underline fix   | the underline should be done with text-decoration not borders    |
| v2.0.3  | specificity fix      | specificity for responsiveness visibility improved               |
| v2.1.0  | specificity changed  | specificity for responsiveness visibility changed / renewed      |
| v2.1.1  | added reset optional | itl-css_reset: overrides/improves default browser behaviour      |
| v3.0.0  | mixins > inheritance | change the inherited properties for mixins                       |
|         | dont autoload fonts  | Autoloading new typefaces from google API made optional          |
|         | allow overrides      | Allow color and font overrides                                   |
| v3.0.1  | README update        | How to use                                                       |
| v3.0.2  | Specificity (button) | Specifity fix. No need for important everywhere.                 |
| v3.0.3  | underline link       | Removed the blue color on link underlines.                       |

DISCLAIMER utility_classes was written for prototype development; Therefore try to use it only as such.