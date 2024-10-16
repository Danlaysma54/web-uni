var number =0
function myFunction(){
  let button =  document.getElementsByClassName("circle")[0]
  console.log(number)
  number++
  if(number==1){
    button.style.width='200px'
    button.style.height='200px'
    button.style.backgroundColor='aqua'
  }
    if(number==2){
        button.style.width='100px'
        button.style.height='100px'
        button.style.backgroundColor='blueviolet'
        console.log("second")
    }
    if(number==3){
        button.style.backgroundColor="white"
        console.log("third")
    }
if(number==4){
  button.remove()
  console.log("four")

}
  }
