class Wallet {
    constructor(money) {
        let _money = money;
        // pobieranie aktualnej zaawartości portfela
        this.getWalletValue = () => _money;
        //sprawdzanie czy użytkownik ma odpowidnią ilość środków
        this.checkCanPay = value => {
            if (_money >= value) return true
        }
    }
}

const wallet = new Wallet(200);