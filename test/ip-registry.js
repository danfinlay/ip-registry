contract('IpRegistry', function(accounts) {
  it('should initially reply with no response', function(done) {
    var reg = IpRegistry.deployed();

    reg.checkAuthor.call('media-hash', { from: accounts[0] })
    .then(function(author) {
      assert.equal(author, '0x0000000000000000000000000000000000000000', 'No author should be assigned');
    })
    .then(done)
  })

  it('should allow registration of arbitrary hashes', function(done) {
    var firstIp = 'this-is-the-first-test-ip';
    var firstAccount = accounts[0];
    var reg = IpRegistry.deployed();

    reg.register(firstIp, { from: firstAccount })
    .then(function() {
      return reg.checkAuthor.call(firstIp, { from: accounts[0] })
    })
    .then(function(author) {
      assert.equal(author, firstAccount, 'first account should be the author');
    })
    .then(done);
  });

  it('should not allow re-registration of ideas', function(done) {
    var firstIp = 'this-is-the-first-test-ip';
    var reg = IpRegistry.deployed();
    var firstAccount = accounts[0];
    var secondAccount = accounts[1];

    reg.register(firstIp, { from: firstAccount })

    .then(function(address) {
      return reg.register(firstIp, { from: secondAccount });
    })
    .then(function() {
      return reg.checkAuthor.call(firstIp, { from: firstAccount });
    })
    .then(function(author) {
      assert.equal(author, accounts[0], 'first account should be the author');
    })
    .then(done);
  });
});
