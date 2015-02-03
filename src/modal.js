import templates from 'alloy-modal/modal.soy';

function Modal(opt_config) {
  Modal.base(this, 'constructor', opt_config);
}
lfr.inherits(Modal, lfr.SoyComponent);

Modal.ATTRS = {
  bodyContent: {
    value: ''
  },
  elementClasses: {
    value: ['modal']
  },
  footerButtons: {
    valueFn: function() {
      return [];
    }
  },
  headerContent: {
    value: ''
  },
  visible: {
    value: false
  }
};

Modal.ATTRS_SYNC = ['visible'];

Modal.SURFACES = {
  body: {
    renderAttrs: ['bodyContent']
  },
  footer: {
    renderAttrs: ['footerButtons']
  },
  header: {
    renderAttrs: ['headerContent']
  }
};

Modal.TEMPLATES = templates;

Modal.prototype.attached = function() {
  var instance = this;

  this.delegate('click', '.modal-button', function(event) {
    instance.emit('buttonClicked', {button: event.delegateTarget});
  });
};

Modal.prototype.syncVisible = function() {
  this.element.style.display = this.visible ? 'block' : 'none';
};

export default Modal;