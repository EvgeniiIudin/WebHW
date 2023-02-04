function hello() {
    let name = prompt("Введите ваше имя!!!");
    if(name == null || name == ""){
        alert("Не хотите, как хотите!!!");
    } else {
        alert(`Категорически приветствую, ${name}!!!`);
    }
}

window.addEventListener('load', function(event) {
    hello();
});