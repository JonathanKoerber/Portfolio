
const callback = function(entries) {
    entries.forEach(entry => {
        // entry.target.anchor(entry.nextSibling(
// if(entry.intersectionRatio < .20) {
//     console.log(entry.bottom);
   // window.scrollTo(entry.bottom, 0);
//}
        //try and find out if page in moving up or down
if(entry.intersectionRatio < .2 ){
    console.log("20%");
}else if(entry.intersectionRatio > .2 && entry.intersectionRatio < .51){
    console.log(entry)
}
    });
};
let options = {
    root: null,
    rootMargin: '0px',
    threshold: [0,.15, .5 ,.85, 1]
}


const observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll(".to_next");
targets.forEach(function(target) {
    observer.observe(target);
});

var firstEliment = document.getElementById("first")

function onclick(){
    console.log("onclick");
    window.scrollTo(document.getElementsByClassName('.to_next'));
}
// var scroll = window.requestAnimationFrame ||
//     // IE Fallback
//     function(callback){ window.setTimeout(callback, 1000/60)};
// var elementsToShow = document.querySelectorAll('.to_next');
//
// function loop() {
//
//     elementsToShow.forEach(function (element) {
//         if (isElementInViewport(element)) {
//             element.classList.add('.pink');
//            var rect = element.getBoundingClientRect();
//            //console.log(rect.bottom)
//            window.scrollTo(0, rect.bottom)
//         } else {
//             element.classList.remove('.pink');
//         }
//     });
//
//     scroll(loop);
// }
//
// // Call the loop for the first time
// loop();
//
// // Helper function from: http://stackoverflow.com/a/7557433/274826
// function isElementInViewport(el) {
//     // special bonus for those using jQuery
//     if (typeof jQuery === "function" && el instanceof jQuery) {
//         el = el[0];
//     }
//     var rect = el.getBoundingClientRect();
//     return (
//         (rect.top <= 0
//             && rect.bottom >= 0)
//         ||
//         (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.top <= (window.innerHeight || document.documentElement.clientHeight))
//         ||
//         (rect.top >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
//     );
// }