import Swal from 'sweetalert2';
import './toast.scss';

const toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toastTrigger) => {
    toastTrigger.addEventListener('mouseenter', Swal.stopTimer);
    toastTrigger.addEventListener('mouseleave', Swal.resumeTimer);
  },
  customClass: {
    popup: 'custom-toast',
  },
});

export default toast;
