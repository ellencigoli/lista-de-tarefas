$(document).ready(function() {
    $('#taskForm').submit(function(e) {
        e.preventDefault();
        var taskName = $('#taskInput').val().trim();
        if (taskName !== '') {
            var taskItem = $('<li>' + taskName + '</li>');
            $('#taskList').append(taskItem);
            $('#taskInput').val('');
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
