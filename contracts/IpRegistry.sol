contract IpRegistry {
  mapping (string => address) ideas;

  function register(string h) {
    if (ideas[h] == 0x0) {
      ideas[h] = msg.sender;
    }
  }

  function checkAuthor(string h) returns(address addr) {
    return ideas[h];
  }
}
