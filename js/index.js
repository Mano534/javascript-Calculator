class calculator {
    constructor(privousInnerText, currentInnerText){
        this.privousInnerText = privousInnerText ; 
        this.currentInnerText = currentInnerText ; 
        this.clear(1);
    }
    clear(aper){
        this.privous = '';
        this.current = "0";
        this.operate = undefined ; 
        this.appended = 0 ; 
    }
    appendNumber(number , aper){
        if(number === "." && this.current.toString().includes(".")) return
        this.current = this.current.toString() + number.toString();  
    }
    chooseOperant(oper){
        if(this.privous !== ""){
            this.compute();
        }
        this.operate = oper ; 
        this.privous = this.current;
        this.current = "" ; 
    }
    compute(){
        // this.current = this.current.toString().replace(/[\+]*[\*]*[\/]*[\-]*/,"") ;
        // this.privous = this.privous.toString().replace(/[\+]*[\*]*[\/]*[\-]*/,"") ;
        let computable , 
        curr = Number(this.current),
        pre = Number(this.privous);

        switch (this.operate){
            case '+' : 
                computable = pre + curr ;
                break;
            case '-' : 
                computable = pre - curr ;
                break;
            case '/' : 
                computable = pre / curr ;
                break;
            case '*' : 
                computable = pre * curr ;
                break;
            default : 
                return ;
        }
        // console.log(computable)
        this.current = computable ; 
        console.log(computable);
        this.computable = undefined;
        this.privous = '';
        this.operate =undefined ; 

          
    }
     updateResults(){

         console.log(this.appended)
        if(this.appended === 1) {
            this.current = this.current.toString().replace(/0*(.*)/ , "$1");
        }else if(this.appended === 0){
            this.current = this.current.toString().replace(/0*(.*)/ , "0$1");
            this.appended = 1 ; 
        }
        if(isNaN(Number(this.current))) return
        this.currentInnerText.innerText = this.current ;
        this.privousInnerText.innerText = this.operate ?  this.privous + this.operate : this.privous;

     }

}




let aC = document.getElementById('clear'),
off = document.getElementById('OFF'),
operators = document.querySelectorAll('.operator'),
number = document.querySelectorAll('.number'),
equale = document.getElementById('equals');
// on = document.getElementById('on'),
output = document.querySelector('.result'),
resaptor = document.querySelector('.input');

let cal = new calculator(resaptor , output);
let power = true ; 

off.onclick = function(){
    console.log(power)
    this.classList.toggle('power');
    if(power){
        this.innerText = "OFF"
        cal.clear(0);
        cal.updateResults();
    }
    if(power === false){
        this.innerHTML = "ON"

    }
    power = !power;
    
}



    number.forEach(ele=>{
        ele.onclick = ()=>{
            if(power === false) return 
            cal.appendNumber(ele.textContent , 1);
            cal.updateResults();
        }
    })
    
    
    operators.forEach(ele=>{
        ele.onclick = ()=>{
            if(power === false) return 
            cal.chooseOperant(ele.innerText);
            cal.updateResults();
        }
    })
    
    
    
    
    
    
    
    
    equale.onclick = ()=>{
        if(power === false) return 
        cal.compute();
        cal.updateResults();
    }
    
    
    
    
    aC.onclick = ()=>{
        if(power === false) return 
        cal.clear();
        cal.updateResults();
    }

