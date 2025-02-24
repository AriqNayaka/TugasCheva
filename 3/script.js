let notes = [
  {
    title: "judul 1",
    description: "Deskripsi",
    deadline: "2024-10-30",
  },
];

let notesElement = document.getElementById("notes-list");
// console.log(notesElement);

function renderNotes() {
  notesElement.innerHTML = "";
  notes.forEach((note, index) => {
    const newElement = `
      <div style="width: max-content; height: 10rem; background-color: white; border: 1px solid gray; display: flex; flex-direction: column; padding: 1rem 1rem 1rem 1rem; justify-content: space-between; border-radius: 5px">
            <h2>${note.title}</h2>
            <p style="color: rgb(93, 92, 92)">${note.description}</p>
            <p style="font-size: small; color: gray">Deadline : ${note.deadline}</p>
            <button onclick="deleteNote(${index})" style="background-color: orangered; width: max-content; padding: 0.5rem 1rem 0.5rem 1rem; border-radius: 5px; border: 1px solid gray">Hapus</button>
          </div>
      `;

    notesElement.innerHTML += newElement;
  });
}

function addNote() {
  const newTitle = document.getElementById("namaTugas").value;
  const newDesc = document.getElementById("deskripsiTugas").value;
  const newDead = document.getElementById("tanggalTugas").value;
  console.log(newDesc);
  if (newTitle && newDesc && newDead && newTitle.length > 1 && newDesc.length > 1 && newDead.length > 1) {
    const newData = {
      title: newTitle,
      description: newDesc,
      deadline: newDead,
    };

    notes.push(newData);
  }
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  renderNotes();
}

renderNotes();
