    var tgl = new Date();
    document.getElementById("tanggal").innerHTML = "Waktu akses " + tgl;

    window.setTimeout("waktu()", 1000);
    function waktu(){
        var waktu = new Date();
        setTimeout("waktu()", 1000);
        document.getElementById("jam").innerHTML = waktu.getHours();
        document.getElementById("menit").innerHTML = waktu.getMinutes();
        document.getElementById("detik").innerHTML = waktu.getSeconds();
    }

    // // mengubah warna css per detik
    // var i=0;
    // function change(){
    //     var classJamDigital = document.getElementsByClassName("wkt");
    //     // var classJamDigital = document.getElementById("jam_digital");
    //     var color = ["#00aeff"]

    //     classJamDigital[0].style.color = color[i];
    //     // classJamDigital.style.backgroundColor = color[i];

    //     i=(i+1)%color.length;
    // }