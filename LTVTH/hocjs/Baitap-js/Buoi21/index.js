F8.component("counter-app", {
  data: () => {
    return {
      count: 0,
      title: "Counter App",
    };
  },
  template: `
      <h1>{{ title }}</h1>
      <h2>{{ count }}</h2>
      <button v-on:click="count--">-</button>
      <button v-on:click="count++">+</button>
      <button v-on:dblclick="title='Hello F8'">Change title</button>
  `,
});

F8.component("header-component", {
  template: `<h1>HEADER</h1>`,
});

//Thông

/*mẫu template
const template = `
<p>Hello F8</p>
<h2>Khóa học full stack</h2>
`;

const templateEl = document.createElement("template");
templateEl.innerHTML = template;

const templateNode = templateEl.content.cloneNode(true);
console.log(templateNode);
templateNode.children[0].style.color = "red";
document.body.append(templateNode);


*/
/*
customElements.define(
  "hello-world",
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerText = `Hello F8`;
    }
  }
);



//HÀM TẠO STATIC

class F8 {
  constructor() {
    console.log(this);
  }
  static component(name) {
    console.log(this);
    console.log(name);
  }
}

F8.component("hello-word");



const data = {
  count: 0,
};

Object.keys(data).forEach((key) => {
  window[key] = data[key];
});

count++;
console.log(count);
console.log(title);


//Regex

const html = `<h1>{{title}}</h1>
<h2> Đã đếm: {{ count }} lần</h2>`;

const results = html.match(/{{.+?}}/g);

results.forEach((result) => {
  const variableResult = result.match(/{{.+?}}/);
  console.log(variableResult);
});


*/
