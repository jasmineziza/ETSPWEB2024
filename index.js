
        function validateForm() {
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const errorMessage = document.getElementById('errorMessage');

            // Regex patterns
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const phonePattern = /^[0-9]+$/;

            // Validate if fields are not empty
            if (!firstName) {
                errorMessage.textContent = "Nama depan tidak boleh kosong.";
                return false;
            }
            if (firstName.length > 50) {
                errorMessage.textContent = "Nama depan maksimal 50 karakter.";
                return false;
            }

            if (!lastName) {
                errorMessage.textContent = "Nama belakang tidak boleh kosong.";
                return false;
            }
            if (lastName.length > 50) {
                errorMessage.textContent = "Nama belakang maksimal 50 karakter.";
                return false;
            }

            if (!email) {
                errorMessage.textContent = "Email tidak boleh kosong.";
                return false;
            }
            if (!emailPattern.test(email)) {
                errorMessage.textContent = "Email tidak valid.";
                return false;
            }
            if (email.length > 100) {
                errorMessage.textContent = "Email maksimal 100 karakter.";
                return false;
            }

            if (!phone) {
                errorMessage.textContent = "Nomor telepon tidak boleh kosong.";
                return false;
            }
            if (!phonePattern.test(phone)) {
                errorMessage.textContent = "Nomor telepon hanya boleh berisi angka.";
                return false;
            }
            if (phone.length > 15) {
                errorMessage.textContent = "Nomor telepon maksimal 15 digit.";
                return false;
            }

            // Clear error message if all validations pass
            errorMessage.textContent = "";
            alert("Data berhasil disubmit!");
            return true;
        }