//(async ()=>{let primes=n=>{let p=[2],i=3;while(p.length<n){if(p.every(j=>i%j))p.push(i);i++}return p}, fib=(n,a=0,b=1)=>n?fib(n-1,b,a+b):a, quote=await fetch('https://api.quotable.io/random').then(r=>r.json()).then(d=>d.content), title=await fetch('https://nova.bg/').then(r=>r.text()).then(t=>t.match(/<title>(.*?)<\/title>/)[1]); console.log(`🔢 First 10 Primes: ${primes(10)}\n🐍 10th Fibonacci: ${fib(10)}\n📝 Quote: "${quote}"\n🌍 Webpage Title: "${title}"`);})();

function fac(n1, n2){
    function factorial(n) {
        return n <= 1 ? 1 : n * factorial(n - 1);
    }

    let fact1 = factorial(n1);
    let fact2 = factorial(n2);
    let divisionResult = fact1 / fact2;

    console.log(divisionResult.toFixed(2));

}

fac(5, 2);
fac(6, 2);