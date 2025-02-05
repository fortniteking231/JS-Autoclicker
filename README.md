# JS-Autoclicker

A Simple Javascript auto-clicker.

## Features

- Prompt user for CPS (Clicks Per Second)
- Clicks at the current mouse position
- Keybind to stop the autoclicker (Ctrl + E)

## Usage

1. Open the `Autoclicker.html` file in a web browser.
2. Enter the desired CPS (Clicks Per Second) when prompted.
3. The autoclicker will start clicking at the current mouse position.
4. Press `Ctrl + E` to stop the autoclicker.

## Bookmarklet

<code>javascript:void%20function(){function%20a(){clearInterval(g),document.removeEventListener(%22mousemove%22,e),document.removeEventListener(%22keydown%22,f)}const%20b=prompt(%22CPS:%20%22);let%20c,d;!b||isNaN(b)||0%3E=b%3F(alert(%22Error,%20Please%20Try%20Again!%22),a()):alert(`Autoclicker%20activated%20at%20${b}%20CPS!%20Press%20[Ctrl%20+%20E]%20to%20stop.`);const%20e=document.addEventListener(%22mousemove%22,a=%3E{c=a.clientX,d=a.clientY}),f=document.addEventListener(%22keydown%22,b=%3E{%22e%22===b.key%26%26b.ctrlKey%26%26(alert(%22Autoclicker%20Deactivated!%22),a())}),g=setInterval(()=%3E{const%20a=document.elementFromPoint(c,d);a%26%26a.click()},1e3/b)}();</code>

## License

This project is licensed under the MIT License.
