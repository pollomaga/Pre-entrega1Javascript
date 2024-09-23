// Configuración de especialidades, médicos y horarios
const especialidades = ["1- Medicina General", "2- Cardiología", "3- Oftalmología"];
const medicos = [
    ["Dr. Dibu Martinez", "Dr. Franco Armani"],  // Medicina General
    ["Dr. Nico Otamenti", "Dr. Cuti Romero"],    // Cardiología
    ["Dr. Rodri De Paul", "Dr. Fideo Di Maria"]  // Oftalmología
];
const horarios = ["8:00 AM", "9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];
let reserva = [];

// Solicitar especialidad
let mensaje = "Seleccione la Especialidad:\n\n" + especialidades.join("\n");
let tipoEspecialidad = parseInt(prompt(mensaje));

if (isNaN(tipoEspecialidad) || tipoEspecialidad < 1 || tipoEspecialidad > 3) {
    alert("Error! Ingresaste una especialidad inválida.");
} else {
    reserva.push("Especialidad: " + especialidades[tipoEspecialidad - 1]);

    // Solicitar médico
    mensaje = "Seleccione el Médico:\n\n1- " + medicos[tipoEspecialidad - 1][0] + "\n2- " + medicos[tipoEspecialidad - 1][1];
    let tipoMedico = parseInt(prompt(mensaje));

    if (isNaN(tipoMedico) || tipoMedico < 1 || tipoMedico > 2) {
        alert("Error! Ingresaste un médico inválido.");
    } else {
        reserva.push("Médico: " + medicos[tipoEspecialidad - 1][tipoMedico - 1]);

        // Solicitar horario
        mensaje = "Seleccione el Horario:\n\n";
        for (let i = 0; i < horarios.length; i++) {
            mensaje += (i + 1) + "- " + horarios[i] + "\n";
        }
        let tipoHorario = parseInt(prompt(mensaje));

        if (isNaN(tipoHorario) || tipoHorario < 1 || tipoHorario > horarios.length) {
            alert("Error! Ingresaste un horario inválido.");
        } else {
            reserva.push("Horario: " + horarios[tipoHorario - 1]);

            // Mostrar resumen de la reserva usando un FOR
            mensaje = "RESERVA COMPLETA:\n\n";
            for (let i = 0; i < reserva.length; i++) {
                mensaje += reserva[i] + "\n";
            }
            alert(mensaje);
        }
    }
}
