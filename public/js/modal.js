$('#myModal').on('show.bs.modal', function(e) {
    var yourparameter1 = e.relatedTarget.dataset.yourparameter1;
    var yourparameter2 = e.relatedTarget.dataset.yourparameter2;
    var yourparameter3 = e.relatedTarget.dataset.yourparameter3;
    $(".modal-title #facultyName").html(yourparameter1);
    $(".modal-body #qualification").html(yourparameter2);
    $(".modal-body #description").html(yourparameter3);
});
