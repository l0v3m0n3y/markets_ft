class markets_ft{
    constructor(){
        this.api = "https://markets.ft.com/data/currencies/ajax"
        this.headers={"Accept-Encoding":"gzip","Cache-Control":"no-cache","Connection":"Keep-Alive","Host":"markets.ft.com","User-Agent":"Dalvik/2.1.0 (Linux; U; Android 12; SM-G965N Build/QP1A.190711.020)"}
    }
    async conversion(amount,baseCurrency,comparison){
        let req=await fetch(`${this.api}/conversion?amount=${amount}&baseCurrency=${baseCurrency}&comparison=${comparison}`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {markets_ft};