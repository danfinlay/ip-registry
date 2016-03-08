contract IpRegistry {
  mapping (string => address) ideas;

  function register(string h) {
    ideas[h] = msg.sender;
  }

  function checkAuthor(string h) returns(address addr) {
    return ideas[h];
  }
}
