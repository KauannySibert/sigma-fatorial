function fatorial_user() {
while(n>=1){
        pote = Math.pow (2,n);
        i=n
        while(i > n) {
            fat = fat * (i - 1)
            i = i - 1;
        }
        soma = soma + ( pote/fat );
        n = n - 1;
    }

    soma = soma * (1/3);
    alert(soma);    
}

