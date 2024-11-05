import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";

const title = new Component("h1", "body", { textContent: "Exercício 20" });
console.log(title);

title.render();

title.tag = "h3";

title.build().render();

const form = new Form("body");
const label = new Label("Nome", form, { htmlFor: "nameInput" });
const input = new Input(form, { id: "nameInput", name: "nameInput" });

form.render();
label.render();
form.addChildren(input);

form.addChildren(
  new Component("br"),
  new Component("br"),
  new Label("Data de Nascimento:", form, { htmlFor: "brithdayInput" }),
  new Input(form, { id: "brithdayInput", name: "brithdayInput", type: "date" })
);
