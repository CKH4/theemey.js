# theemey.js

## How to use?
### Setup
Include the script in your page:
###### JS
<script src="assets/theemey.js"></script>

##Making Your Theme

Include the Stylus mixin in your page:
###### CSS
    theme($name, /* theme properties go here */)
      /#{$name} &
        //theme goes here

Only use variable properties here, otherwise you'll have redundant code.
Write the rest of your theme like normal:
###### CSS
    body
      margin 0
    
    header
      width 100%
      height 64px

Call the themes on the <body> element:
###### CSS
    body
      theme(/* name */, /* properties */)

## Example
Setup your HTML:
###### HTML
    <html>
     <head>
       <link href="assets/style.css" type="text/css" rel="stylesheet"></link>
     </head>
    
      <body>
        <header>Header</header>
    
        <article>
          <h3>Lorem Ipsum...</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a dapibus mi. Donec vitae tempor magna. Vestibulum orci leo, porttitor ac nisi nec, lacinia imperdiet leo. Nam luctus, felis sed molestie pretium, turpis orci eleifend est, eget ullamcorper metus risus aliquam justo. Aenean est leo, pharetra vitae tempor ac, vestibulum non dolor. Cras vulputate sed justo nec auctor. Ut sit amet semper augue. Vivamus erat diam, iaculis eget libero at, accumsan consectetur ante. Morbi sagittis arcu sollicitudin hendrerit fermentum.</p>
        </article>
    
        <script src="assets/theemey.js"></script>
      </body>
    </html>

Setup your CSS:
###### CSS
theme($name, $background, $color, $font)
      #{$name} &
        background $background
        color $color
        font-family $font
    
    body
      margin 0
      theme(default, #333, #bdbdbd, sans-serif)
      theme(red, #c00, #000, serif)
    
    header
      width 100%
      paddding 32px
    
    article
      width 600px
      max-width 90%
      margin 32px auto
