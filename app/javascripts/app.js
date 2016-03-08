var accounts;
var account;

function  checkRegistration() {
  var reg = IpRegistry.deployed();
  var idea = getHash();
  reg.checkAuthor.call(idea, { from: accounts[0] })
  .then(function(author) {
    if (author.match(/0x[0]+/)) {
      alert('That idea has not been registered yet!');
    } else {
      alert('Sorry, that idea has been registered already by ' + author);
    }
  });
}

function register() {
  var reg = IpRegistry.deployed();
  var idea = getHash();
  reg.register(idea, { from: accounts[0] })
  .then(function(success) {
    if (success) {
      alert('You are the new proud owner of the idea '+idea);
    } else {
      alert('Sorry, that idea has been registered already');
    }
  });
}

function getHash() {
  return document.getElementById('hash').value
}

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshBalance() {
  var meta = MetaCoin.deployed();

  meta.getBalance.call(account, {from: account}).then(function(value) {
    var balance_element = document.getElementById("balance");
    balance_element.innerHTML = value.valueOf();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });
};

function sendCoin() {
  var meta = MetaCoin.deployed();

  var amount = parseInt(document.getElementById("amount").value);
  var receiver = document.getElementById("receiver").value;

  setStatus("Initiating transaction... (please wait)");

  meta.sendCoin(receiver, amount, {from: account}).then(function() {
    setStatus("Transaction complete!");
    refreshBalance();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];
  });
}
