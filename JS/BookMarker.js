document.addEventListener('DOMContentLoaded', function() {
    var nameInput = document.getElementById('name');
    var urlInput = document.getElementById('url');
    var addBtn = document.getElementById('addBtn'); // Fixed ID
    var tableBody = document.getElementById('tableBody');

    var bookMarks = JSON.parse(localStorage.getItem("bookMarks")) || [];

    addBtn.onclick = function () {
        var bookMark = {
            name: nameInput.value,
            url: urlInput.value,
        };
        bookMarks.push(bookMark);
        localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
        display();
        clear();
    };

    
function clear() {
    nameInput.value = ''
    urlInput.value = ''
  }

    function display() {
        var box = '';
        for (var i = 0; i < bookMarks.length; i++) {
            box += `<tr>
                <td>${i + 1}</td>
                <td>${bookMarks[i].name}</td>
                <td><a href="${bookMarks[i].url}" target="_blank" class="btn btn-visit"><i class="bi bi-eye"></i>Visit</a></td>
                <td><button onclick='deleteBookmark(${i})' class="btn btn-delete pe-2"><i class="bi bi-trash"></i>Delete</button></td>
                </tr>`;
        }
        tableBody.innerHTML = box;
    }

    function update(index) {
        var bookMark = bookMarks[index];
        nameInput.value = bookMark.name;
        urlInput.value = bookMark.url;
        deleteBookmark(index);
    }

    window.deleteBookmark = function(index) {
        bookMarks.splice(index, 1);
        localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
        display();
    }

    display();
});



