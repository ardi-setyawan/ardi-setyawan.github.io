//event ketika link di klik

$('.page-scroll').on('click', function(){

	//ambil isi href
	var tujuan = $(this).attr('href');
	
	//tangkap element yang bersangkutan
	 var elemenTujuan= $(tujuan);

	//pindahkan scrol
	$('body').animate({

		scrollTop : elemenTujuan.offset().top
	});

});