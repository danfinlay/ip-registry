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
  IpRegistry.abi = [{ "constant": false, "inputs": [{ "name": "h", "type": "string" }], "name": "checkAuthor", "outputs": [{ "name": "addr", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "h", "type": "string" }], "name": "register", "outputs": [{ "name": "success", "type": "bool" }], "type": "function" }];
  IpRegistry.binary = "60606040526101df806100126000396000f3606060405260e060020a6000350463ac7207e68114610026578063f2c298be146100b6575b005b60206004803580820135601f8101849004909302608090810160405260608481526101ab9460249391929184019181908382808284375094965050505050505060405181516000918291849190819060809080838184896004600f60036020601f8701040201f15090910193845250506040519182900360200190912054600160a060020a03169150505b919050565b60206004803580820135601f8101849004909302608090810160405260608481526101c89460249391929184019181908382808284375094965050505050505060405181516000918291849190819060809080838184896004600f60036020601f8701040201f15090910193845250506040519182900360200190912054600160a060020a031682141590506101da576040518251339183918591908190608090808381848960046020601f850104600302600f01f150909101938452505060405191829003602001909120805473ffffffffffffffffffffffffffffffffffffffff191690921790915550600190506100b1565b60408051600160a060020a03929092168252519081900360200190f35b60408051918252519081900360200190f35b6100b156";

  if ("0x7c4c818512209ec4bfd3652faf651a43272b085b" != "") {
    IpRegistry.address = "0x7c4c818512209ec4bfd3652faf651a43272b085b";

    // Backward compatibility; Deprecated.
    IpRegistry.deployed_address = "0x7c4c818512209ec4bfd3652faf651a43272b085b";
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