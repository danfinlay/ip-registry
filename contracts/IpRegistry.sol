contract IpRegistry {
  mapping (string => address) ideas;

  function register(string h) returns(bool success){
    if (ideas[h] == 0x0) {
      ideas[h] = msg.sender;
      return true;
    } else {
      return false;
    }
  }

  function checkAuthor(string h) returns(address addr) {
    return ideas[h];
  }
}
