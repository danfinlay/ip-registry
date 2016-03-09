var accounts;
var account;

function  checkRegistration() {
  var reg = IpRegistry.deployed();
  var idea = getHash();
  reg.checkAuthor.call(idea, { from: accounts[0] })
  .then(function(author) {
    if (author === '0x' || author.match(/0x0+$/)) {
      note('That idea has not been registered yet!', 'green');
    } else {
      note('Sorry, that idea has been registered already by ' + author, 'red');
    }
  })
  .catch(function(reason) {
    alert(reason);
  });
}

function clearNote() {
  note('', 'black');
}

function register() {
  var reg = IpRegistry.deployed();
  var idea = getHash();
  reg.register(idea, { from: accounts[0] })
  .then(function(success) {
    if (success) {
      note('You are the new proud owner of the idea '+idea, 'green');
    } else {
      note('Sorry, that idea has been registered already.', 'red');
    }
  })
  .catch(function(reason) {
    note("Fails because " + reason);
  });
}

function note(text, color) {
  var noteEl = document.querySelector('.note')
  noteEl.innerText = text
  if (color) {
    noteEl.style.color = color;
  }
}

function getHash() {
  return document.getElementById('hash').value
}

function displayError(err) {
  var errorEl = document.querySelector('.error')
  errorEl.innerText = err
  showSection('error')
}

function showSection(elClass) {
  var errorEl = document.querySelector('.error')
  var loadingEl = document.querySelector('.loading')
  var mainEl = document.querySelector('.main')

  var map = {
    error: errorEl,
    loading: loadingEl,
    main: mainEl,
  }

  for(var name in map) {
    var el = map[name]
    if (name === elClass) {
      el.classList.remove('invisible')
    } else {
      el.classList.add('invisible')
    }
  }
}



window.onload = function() {
  showSection('loading')
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      displayError("There was a problem accessing your Ethereum wallet. Are you using an Ethereum-compatible client, like Metamask or Mist?")
      return;
    }

    if (accs.length == 0) {
      displayError("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];
    showAccount();
    showSection('main')
  });
}

function showAccount() {
  var accountEl = document.querySelector('.account')
  accountEl.innerText = account;
}
