function Calculadora(){
    const display = document.querySelector('.display');

    this.inicia = ()=>{
        this.cliqueBotoes();
        this.capturaEnter();
    }

    this.capturaEnter = () =>{
        display.addEventListener('keyup', (e)=>{
            if(e.keyCode === 13){
                this.realizaOperacao();
            };
        });
    }



    this.cliqueBotoes = () =>{
        document.addEventListener('click', e =>{
            const el = e.target;
            if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
        
            if(el.classList.contains('btn-clear')) display.value = '';

            if(el.classList.contains('btn-del')) this.apagarUm();

            if(el.classList.contains('btn-eq')) this.realizaOperacao();
            
        });
    }

    this.btnParaDisplay = (valor) => display.value += valor;

    this.apagarUm = () => display.value = display.value.slice(0,-1);

    this.realizaOperacao = () =>{
        let operacao = display.value;

        try{
            operacao = eval(operacao);
            if(!operacao){
                console.log('Conta Inválida!');
                return;
            };

            display.value = operacao;
        }catch(e){
            console.log('Conta Inválida');
            return;
        };
    }
}

const calculadora = new Calculadora();
calculadora.inicia();