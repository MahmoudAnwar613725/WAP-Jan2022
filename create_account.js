window.onload = function() {
    document.getElementById("createAccountBtn").onclick = accountModule.addAccount
        //  addAccount("safsfs", "30303303")


}
var accountList = [];

var accountModule = (function() {
    function Account(name, deposit) {
        this.name = name;
        this.deposit = deposit;
    };

    let printAccount = function() {
        // document.getElementById("output").value = ""
        document.getElementById("textAreaOutput").value += "Account type :" + accountList[accountList.length - 1].name +
            "  Balance :" + accountList[accountList.length - 1].deposit + "\n"
    }
    return {
        addAccount: function() {
            accountList.push(new Account(document.getElementById("textAccount").value, document.getElementById("textDeposit").value))
                // printAccount();
            printAccount()
        }
    };



})();