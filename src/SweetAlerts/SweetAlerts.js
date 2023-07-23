import Swal from 'sweetalert2';

export const showAlert = (title, text, icon) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: 'Aceptar'
  });
};