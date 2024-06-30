class F8 {
  static create(tag, callback) {
    class Component extends HTMLElement {
      registry = {
        length: this.handleLength,
        event: this.handleEvent,
      };
      connectedCallback() {
        var _this = this;
        var shadowRoot = this.attachShadow({
          mode: "open",
        });
        shadowRoot.innerHTML = callback.call(this);
        _this.resolveAttributes(shadowRoot);
      }
      resolveAttributes(elementWrap) {
        var _this = this;
        if (elementWrap.children && elementWrap.children.length) {
          Array.from(elementWrap.children).forEach(function (element) {
            Array.from(element.attributes).forEach(function (attribute) {
              if (attribute.name.startsWith("x-")) {
                var attrName = attribute.name.replace("x-", "");
                var attrValue = attribute.nodeValue;
                typeof _this.registry[attrName] === "function" &&
                  _this.registry[attrName]({
                    element: element,
                    value: attrValue,
                  });
              }
              if (attribute.name.startsWith("@")) {
                var eventName = attribute.name.replace("@", "");
                typeof _this.registry["event"] === "function" &&
                  _this.registry["event"]({
                    element: element,
                    eventName: eventName,
                    value: attribute.nodeValue,
                  });
              }
            });
            _this.resolveAttributes(element);
          });
        }
      }
      handleLength(obj) {
        var element = obj.element;
        var value = obj.value;
        for (var i = 0; i < value; i++) {
          var elementClone = element.cloneNode(true);
          element.parentElement.append(elementClone);
        }
        element.remove();
      }
      handleEvent(obj) {
        var eventName = obj.eventName;
        var value = obj.value;
        var element = obj.element;
        element.addEventListener(eventName, function () {
          var funcCreator = Function(value);
          funcCreator.call(element);
        });
      }
    }
    customElements.define(tag, Component);
  }
}

F8.create("hello-world", function () {
  return `
    <div class="content">
      <h1 @mouseover="this.style.color='red'">Hello anh em F8</h1>
      <h2 @dblclick="console.log('ahihi')">Học JS không khó</h2>
      <button @click="console.log(123123)">Click me</button>
    </div>
    `;
});

// F8.create("todo-app", function () {
//   var shadowRoot = this.attachShadow({
//     mode: "open",
//   });
//   shadowRoot.innerHTML = `<div class="todo-app">
//     <h1>Todo App</h1>
//     <ul>
//       <li>Todo 1</li>
//       <li>Todo 2</li>
//       <li>Todo 3</li>
//     </ul>`;
// });
