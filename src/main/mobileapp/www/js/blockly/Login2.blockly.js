window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Login2 = window.blockly.js.blockly.Login2 || {};

/**
 * Login2
 */
window.blockly.js.blockly.Login2.abrirModalCadastro = async function() {
 var item;
  this.cronapi.screen.showIonicModal("modalCadastro");
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Login2.fecharModalCadastro = async function() {
 var item;
  this.cronapi.screen.hideIonicModal("modalCadastro");
}
