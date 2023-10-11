
    var cm = 180 ;
    var cm1 = 175;
    var cm2 = 170;

    function tampilkan_data() {
        
        if (cm > cm1) {
            console.log("Tinggi badan tertinggi ke 1 : ", cm);
        }else {
            console.log("Tinggi badan tertinggi ke 3 : ", cm2);
        }
        
        for (var cm2= 170; cm2 <= cm; cm2+=5) {
            
            if (cm2 <= cm) {
                console.log("Tinggi badan",cm2);
            } else {    
                console.log("Tidak di cetak");
            }
        }
        
    }
    tampilkan_data();

