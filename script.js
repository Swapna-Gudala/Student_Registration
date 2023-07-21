var students = [];

    function displayDetails(event) {
      event.preventDefault();

      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var course = document.getElementById("course").value;

      var student = {
        name: name,
        email: email,
        course: course
      };

      students.push(student);

      updateStudentList();

      // Display the uploaded image
      var fileInput = document.getElementById("image");
      var file = fileInput.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        student.imageSrc = e.target.result;
        updateStudentList();
      };
      reader.readAsDataURL(file);

      document.getElementById("registrationForm").reset();
    }

    function updateStudentList() {
      var studentList = document.getElementById("studentList");
      studentList.innerHTML = "";

      for (var i = 0; i < students.length; i++) {
        var student = students[i];

        var studentElement = document.createElement("div");
        studentElement.className = "student";

        var detailsElement = document.createElement("div");
        detailsElement.className = "student-details";
        detailsElement.innerHTML = `
          <h4>Student ${i + 1}:</h4>
          <p><strong>Name:</strong> ${student.name}</p>
          <p><strong>Email:</strong> ${student.email}</p>
          <p><strong>Course:</strong> ${student.course}</p>
        `;
        studentElement.appendChild(detailsElement);

        if (student.imageSrc) {
          var imageElement = document.createElement("img");
          imageElement.className = "student-image";
          imageElement.src = student.imageSrc;
          studentElement.appendChild(imageElement);
        }

        studentList.appendChild(studentElement);
      }
    }