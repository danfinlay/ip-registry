"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var IpRegistry = (function (_Pudding) {
    _inherits(IpRegistry, _Pudding);

    function IpRegistry() {
      _classCallCheck(this, IpRegistry);

      _get(Object.getPrototypeOf(IpRegistry.prototype), "constructor", this).apply(this, arguments);
    }

    return IpRegistry;
  })(Pudding);

  ;

  // Set up specific data for this class.
  IpRegistry.abi = [{ "constant": false, "inputs": [{ "name": "h", "type": "string" }], "name": "checkAuthor", "outputs": [{ "name": "addr", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "h", "type": "string" }], "name": "register", "outputs": [], "type": "function" }];
  IpRegistry.binary = "6060604052610173806100126000396000f3606060405260e060020a6000350463ac7207e68114610026578063f2c298be146100c1575b005b60206004803580820135601f8101849004909302608090810160405260608481526101619460249391929184019181908382808284375094965050505050505060405181516000918291849190819060809080838184896004600f60036020601f8701040201f1509091019384525050604051918290036020019091205473ffffffffffffffffffffffffffffffffffffffff169392505050565b60206004803580820135601f8101849004909302608090810160405260608481526100249460249391929184019181908382808284375094965050505050505060405181513391600091849190819060809080838184896004600f60036020601f8701040201f150909101938452505060405191829003602001909120805473ffffffffffffffffffffffffffffffffffffffff19169092179091555050565b60408051918252519081900360200190f3";

  if ("0xb2ac2289b10fd3da943a6e3bcc6ce08be6925bd5" != "") {
    IpRegistry.address = "0xb2ac2289b10fd3da943a6e3bcc6ce08be6925bd5";

    // Backward compatibility; Deprecated.
    IpRegistry.deployed_address = "0xb2ac2289b10fd3da943a6e3bcc6ce08be6925bd5";
  }

  IpRegistry.generated_with = "1.0.3";
  IpRegistry.contract_name = "IpRegistry";

  return IpRegistry;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.IpRegistry = factory;
}