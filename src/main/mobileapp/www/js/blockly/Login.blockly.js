window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Login = window.blockly.js.blockly.Login || {};

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Login.fecharModalCadastro = async function() {
 var item;
  this.cronapi.screen.hideIonicModal("modalCadastro");
}

/**
 * Login
 */
window.blockly.js.blockly.Login.abrirModalCadastro = async function() {
 var item;
  this.cronapi.screen.showIonicModal("modalCadastro");
}
