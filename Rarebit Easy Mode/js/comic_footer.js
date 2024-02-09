//the footer of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeFooter"
document.querySelector(".writeFooter").innerHTML = `
    <footer align="center">
        <p><a href="https://twitter.com/capsulecomics">Follow me on Twitter @CapsuleComics</a></p>
        <br>
        <p><strong>Powered by</strong></p>
        <a style="opacity:0.2;filter:alpha(opacity=20);" href="https://rarebit.neocities.org"><img src="img/rarebitlogo_small.png" height = "20" /></a>
    </footer>
`;
