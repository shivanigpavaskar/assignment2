function set() {
    let elements = document.getElementsByName('cssStyle');

    for (let index = 0; index < elements.length; index++) {

        let cssStyle = elements[index].getAttribute('id');
        let cssValue = elements[index].value;
        let div = document.getElementById('modify');
        div.style[cssStyle] = cssValue;

     }
 
}
