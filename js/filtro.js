$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont_work').show('1000');
        } else {
            $('.cont_work').not('.' + valor).hide('1000');
            $('.cont_work').filter('.' + valor).show('1000');
        }
    });

});