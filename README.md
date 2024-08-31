# markets_ft
JavaScript library for markets.ft.com
# main
```js
async function main(){
    const {markets_ft} = require('./markets_ft');
    const markets= new markets_ft();
    let req=await markets.conversion(1000,"RUB","USD")
    console.log(req)
}
main()
```
