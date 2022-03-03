// When you scroll the page, or resize the window, or move your mouse, the browser captures dozens and dozens of events per second.
// In many cases, you don't need to capture every single intermediate step; 
// you're only interested in capturing the end state (when the user finishes scrolling, or finishes resizing the window.

// Debouncing is a strategy that lets us improve performance by waiting until a certain amount of time has passed before triggering an event.
// When the user stops triggering the event, our code will run.

// In some cases, this isn't necessary. 
// But, if any network requests are involved, or if the DOM changes (eg. re-rendering a component), this technique can drastically improve the smoothness of your application.


const debounce = (callback, delay) => {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args)
        }, delay)
    }

}