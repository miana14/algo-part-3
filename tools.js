function displayArray () {
    let obj = analyze();
    let out = 'Contenu du tableau :\n\n';
    for (let i in obj) {
        out += "index : " + i + " -> valeur : " + obj[i] + "\n";
    }

    alert(out);
}

function addStudentToSelect (name, firstname) {
    let newOption = new Option(firstname + " " + name, name+firstname);
    const select = document.getElementById ('student-select');
    select.add(newOption, undefined);
    return;
}