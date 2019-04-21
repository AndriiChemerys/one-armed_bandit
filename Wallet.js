class Wallet {
    constructor(money) {
        let _money = money;
        // pobieranie aktualnej zaawartości portfela
        this.getWalletValue = () => _money;
        //sprawdzanie czy użytkownik ma odpowidnią ilość środków
        this.checkCanPay = value => {
            if (_money >= value) return true
        }
        this.changeWallet=(value, type='+') => {
            if(typeof value === 'number' && !isNaN(value))
            {
                if (typ==="+") {
                    return _money += value;
                } else if (type=== "-") {
                    return _money -= value;
                } else {
                    throw new Error('Nieprawidłowy ty działania')
                }
            } else {
                console.log(typeof value);
                throw new Error ('Nieprawidłowa liczba')
            }
        }
    }
}

const wallet = new Wallet(200);