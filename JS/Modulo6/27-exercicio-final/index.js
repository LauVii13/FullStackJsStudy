let transactions = [];

function createTransactionContainer(id) {
  const container = document.createElement("div");
  container.classList.add("transaction");
  container.id = `transaction-${id}`;

  return container;
}

function createTransactionTitle(name) {
  const title = document.createElement("span");
  title.classList.add("transaction-title");
  title.textContent = name;

  return title;
}

function createTransactionAmount(amount) {
  const span = document.createElement("span");

  const formater = Intl.NumberFormat("pt-BR", {
    compactDisplay: "long",
    currency: "BRL",
    style: "currency",
  });

  const formaterAmount = formater.format(amount);

  if (amount > 0) {
    span.textContent = ` ${formaterAmount} C`;
    span.classList.add("transaction-amount", "credit");
  } else {
    span.textContent = ` ${formaterAmount} D`;
    span.classList.add("transaction-amount", "debit");
  }

  return span;
}

function renderTransaction(transaction) {
  const container = createTransactionContainer(transaction.id);
  const title = createTransactionTitle(transaction.name);
  const amount = createTransactionAmount(transaction.amount);
  const editBtn = createEditTransactionBtn(transaction);
  const deleteBtn = createDeleteTransactionBtn(transaction.id);

  container.append(title, amount, editBtn, deleteBtn);
  document.querySelector("#transactions").append(container);
}

async function fetchTransactions() {
  return await fetch("http://localhost:3000/transactions").then((res) =>
    res.json()
  );
}

function updateBalance() {
  const balanceSpan = document.querySelector("#balance");
  const balance = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const formater = Intl.NumberFormat("pt-BR", {
    compactDisplay: "long",
    currency: "BRL",
    style: "currency",
  });
  balanceSpan.textContent = formater.format(balance);
}
async function setup() {
  const result = await fetchTransactions();
  transactions.push(...result);
  transactions.forEach(renderTransaction);
  updateBalance();
}

async function saveTransaction(ev) {
  ev.preventDefault();

  const id = document.getElementById("id").value;
  const name = document.querySelector("#name").value;
  const amount = parseFloat(document.querySelector("#amount").value);

  if (id) {
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, amount }),
    });

    const transaction = await response.json();
    const indexToRemove = transactions.findIndex((tx) => tx.id === id);
    transactions.splice(indexToRemove, 1, transaction);
    document.querySelector(`#transaction-${id}`).remove();
    renderTransaction(transaction);
  } else {
    const response = await fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, amount }),
    });

    const transaction = await response.json();
    transactions.push(transaction);
    renderTransaction(transaction);
  }

  ev.target.reset();
  updateBalance();
}

function createEditTransactionBtn(transaction) {
  const btn = document.createElement("button");
  btn.classList.add("edit-btn");
  btn.textContent = "Editar";
  btn.addEventListener("click", () => {
    document.querySelectorAll("#id").value = transaction.id;
    document.querySelectorAll("#name").value = transaction.name;
    document.querySelectorAll("#amount").value = transaction.amount;
  });

  return btn;
}

function createDeleteTransactionBtn(id) {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Excluir";
  deleteBtn.addEventListener("click", async () => {
    await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    });
    deleteBtn.parentElement.remove();
    const indexToRemove = transactions.findIndex((t) => t.id === id);
    transactions.splice(indexToRemove, 1);
    updateBalance();
  });

  return deleteBtn;
}

document.addEventListener("DOMContentLoaded", setup);
document.querySelector("form").addEventListener("submit", saveTransaction);
