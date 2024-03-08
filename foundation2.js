const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClock(){
    // console.log("title was clicked !");
    /*
    const currentColor = h1.style.color;
    let newColor;
    if(h1.style.color === "blue"){
        newColor = "tomato";
    }
    else{
        newColor = "blue";
    }
    h1.style.color = newColor;

    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }
    else{
        h1.classList.add(clickedClass);
    }
    */
   h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClock);
/*
    function handleMouseEnter(){
    h1.innerText = "Mouse is here !";
    }
    function hadleMouseLeave(){
        h1.innerText = "Mouse is gone !";
    }
    function handleWindowResize(){
        document.body.style.backgroundColor = "tomato";
    }
    function handleWindowCopy(){
        alert("copier !");
    }
    function handleWindowOffline(){
        alert("SOS no WIFI");
    }
    function handleWindowOnline(){
        alert("ALL GOOOD");
    }

    h1.addEventListener("click", handleTitleClock);
    h1.addEventListener("mouseenter", handleMouseEnter);
    h1.addEventListener("mouseleave", hadleMouseLeave);

    // 화면의 크기가 변하면 이벤트가 발생함
    window.addEventListener("resize", handleWindowResize);
    // 복사를 하면 이벤트가 발생함
    window.addEventListener("copy", handleWindowCopy);
    // 인터넷 연결이 끊기면 이벤트가 발생함
    window.addEventListener("offline", handleWindowOffline);
    // 인터넷 연결이 되면 이벤트가 발생함
    window.addEventListener("online", handleWindowOnline);
*/