<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script>
  function save(){
    $('#typeSubmit').val('save');
    $('#btnSubmit').click();
  }
  function update(){
    console.log("@lang('Update')");
    $('#typeSubmit').val('update');
    $('#btnSubmit').click();
  }
  function destroy(url)
  {
    var anwser =  confirm("Bạn muốn xóa?");
    if(anwser){
      window.location = url;
    }
  }
  $(function () {
    $('select#choose').on('change', function (e) {
      console.log("Choose");
      $('#btnSubmitFilter').click();
    });
    if($('.datepicker').length){
      $('.datepicker').datepicker({
        autoclose: true,
        format: 'yyyy-mm-dd'
      })
    }
    if($('.datetime').length){
      var optional_config = {
        enableTime: true,
        dateFormat: "Y-m-d H:i:ss",
      }
      $(".datetime").flatpickr(optional_config);
    }
    if($('#example1').length){
      $('#example1').DataTable({
        "lengthMenu": [[35,50, -1], [35,50, "All"]],
      })
    }
    if($('#example2').length){
      $('#example2').DataTable({
        'paging'      : true,
        'lengthChange': false,
        'searching'   : false,
        'ordering'    : true,
        'info'        : true,
        'autoWidth'   : false
      })
    }
    if($('#table-no-order').length){
      $('#table-no-order').DataTable({
        "lengthMenu": [[35,50, -1], [35,50, "All"]],
        'ordering'    : false,
        })
    }
    if($('.select').length){
      $(document).ready(function() { $(".select").select2(); });
    }

  })
</script>