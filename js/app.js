window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.boxShadow = "0 1px 6px 0 rgb(32 33 36 / 28%)";
    } else {
        document.getElementById("navbar").style.boxShadow = "none";
    }
}

document.getElementById('formulario').addEventListener('submit', saveform);

function saveform() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;

    function getRadioButtonSelectedValue(ctrl) {
        for (i = 0; i < ctrl.length; i++) {
            if (ctrl[i].checked) {
                return ctrl[i].value;
            }
        }
    }
    let sexo = getRadioButtonSelectedValue(document.frmSO.so);

    function getOptionSelected() {
        let nivel = document.getElementById("grado").value;
        return nivel;
    }
    let grado = getOptionSelected();

    let estudiante = {
        nombre,
        apellido,
        email,
        telefono,
        sexo,
        grado
    };

    if (localStorage.getItem('table') === null) {
        let estudiantes = [];
        estudiantes.push(estudiante);
        localStorage.setItem('table', JSON.stringify(estudiantes));
    } else {
        let estudiantes = JSON.parse(localStorage.getItem('table'));
        estudiantes.push(estudiante);
        localStorage.setItem('table', JSON.stringify(estudiantes));
    }
    listForm();
    document.getElementById('formulario').reset();
   
}

function listForm() {
    let estudiantes = JSON.parse(localStorage.getItem('table'));
    let estudiantesView = document.getElementById('table');
    estudiantesView.innerHTML = '';
    for (let i = 0; i < estudiantes.length; i++) {
        let nombre = estudiantes[i].nombre;
        let apellido = estudiantes[i].apellido;
        sexo = estudiantes[i].sexo;
        grado = estudiantes[i].grado;

        estudiantesView.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${nombre} ${apellido}</td>
            <td>${sexo}</td>
            <td>${grado}</td>
            <td><img src="./img/delete.png" onclick="deleteForm('${nombre}')""/> </td>
        </tr>`;
    }
}
listForm()

function deleteForm(nombre) {

    let estudiantes = JSON.parse(localStorage.getItem('table'));
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nombre == nombre) {
            estudiantes.splice(i, 1);
        }
    }
    localStorage.setItem('table', JSON.stringify(estudiantes));
    listForm()
}